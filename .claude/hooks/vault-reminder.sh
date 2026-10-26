#!/usr/bin/env bash
# Stop hook: if files in web/ changed after the newest vault note, ask the
# agent to update obsidian/ before finishing (see AGENTS.md).
set -u

input=$(cat)
# Already continuing because of this hook: don't loop.
if [ "$(printf '%s' "$input" | jq -r '.stop_hook_active // false')" = "true" ]; then
  exit 0
fi

root=$(git -C "${CLAUDE_PROJECT_DIR:-.}" rev-parse --show-toplevel 2>/dev/null) || exit 0
cd "$root" || exit 0

# Newest note in the vault (ignoring Obsidian config and personal daily notes)
newest_note=$(find obsidian -type f -name '*.md' \
  -not -path 'obsidian/.obsidian/*' -not -path 'obsidian/Daily/*' -print0 2>/dev/null \
  | xargs -0 ls -t 2>/dev/null | head -n 1)
[ -n "$newest_note" ] || exit 0

changed=()
while IFS= read -r -d '' entry; do
  path=${entry:3}
  [ -f "$path" ] && [ "$path" -nt "$newest_note" ] && changed+=("$path")
done < <(git status --porcelain=v1 -z -uall -- web)

[ ${#changed[@]} -gt 0 ] || exit 0

list=$(printf '%s, ' "${changed[@]:0:5}")
list=${list%, }
[ ${#changed[@]} -gt 5 ] && list="$list and $(( ${#changed[@]} - 5 )) more"

jq -n --arg files "$list" '{
  decision: "block",
  reason: ("Code in web/ changed after the last vault update (" + $files + "). Before finishing, update the Obsidian vault as described in AGENTS.md (Features/, Architecture/, Decisions/, Sessions/). If nothing about the project changed that is worth recording, say so and stop.")
}'

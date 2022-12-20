# we need to check if the working tree is clean, we might otherwise  cache
# invalid artefacts;
function check-clean-working-tree {
  if [[ ! -z $(git status -s --untracked-files=no) ]]; then
    return 1
  fi
}
# possibly expand later with e.g.:
# https://stackoverflow.com/questions/3878624/how-do-i-programmatically-determine-if-there-are-uncommitted-changes

function require-clean-working-tree {
  echo "INFO: checking clean working_tree in ${PWD} "
  if ! check-clean-working-tree; then
    echo "The working tree is not clean or has uncommited changes: "
    echo "$(git status -s --untracked-files=no)"
    echo "This is not compatible with caching and defies the meaning of a build."
    echo "Commit your changes, clean-up or run in devlopment mode".
    exit 1
  fi
}

# vi: ft=sh

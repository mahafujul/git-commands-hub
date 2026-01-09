import type { Section } from "@/types/types";

export const sections: Section[] = [
  {
    title: "🟢 Easy Commands (Everyday Basics)",
    difficulty: "easy",
    subsections: [
      {
        title: "Repository Setup",
        commands: [
          {
            code: "git init",
            description: "Create a new Git repository in current folder",
          },
          {
            code: "git clone <url>",
            description: "Download a repository from GitHub to your computer",
          },
          {
            code: "git status",
            description: "Show what files have changed (your best friend!)",
          },
          {
            code: "git add <file>",
            description: "Stage a file for commit (prepare it)",
          },
          { code: "git add .", description: "Stage all changed files" },
          {
            code: 'git commit -m "message"',
            description: "Save changes with a description",
          },
          { code: "git push", description: "Upload your commits to GitHub" },
          {
            code: "git pull",
            description: "Download latest changes from GitHub",
          },
        ],
      },
      {
        title: "Basic Information",
        commands: [
          { code: "git log", description: "See history of commits" },
          {
            code: "git log --oneline",
            description: "See commit history in compact format",
          },
          { code: "git diff", description: "Show what changes you made" },
          { code: "git branch", description: "List all branches" },
          { code: "git branch <name>", description: "Create new branch" },
          {
            code: "git checkout <branch>",
            description: "Switch to another branch",
          },
          {
            code: "git merge <branch>",
            description: "Combine another branch into current one",
          },
        ],
      },
    ],
  },
  {
    title: "🟡 Medium Commands (Getting Comfortable)",
    difficulty: "medium",
    subsections: [
      {
        title: "Branch Management",
        commands: [
          {
            code: "git checkout -b <branch>",
            description: "Create and switch to new branch in one command",
          },
          {
            code: "git branch -d <branch>",
            description: "Delete a branch (safe deletion)",
          },
          {
            code: "git branch -D <branch>",
            description: "Force delete a branch",
          },
          {
            code: "git push -u origin <branch>",
            description: "Push new branch to GitHub and track it",
          },
          {
            code: "git push origin --delete <branch>",
            description: "Delete branch from GitHub",
          },
        ],
      },
      {
        title: "Undoing Changes",
        commands: [
          {
            code: "git checkout -- <file>",
            description: "Discard changes in a file (back to last commit)",
          },
          {
            code: "git reset HEAD <file>",
            description: "Unstage a file (opposite of git add)",
          },
          {
            code: "git commit --amend",
            description: "Change the last commit message or add more files",
          },
          {
            code: "git revert <commit-id>",
            description: "Create new commit that undoes another commit",
          },
          {
            code: "git clean -f",
            description: "Delete untracked files permanently",
          },
        ],
      },
      {
        title: "Cherry Picking & Stashing",
        commands: [
          {
            code: "git cherry-pick <commit-id>",
            description: "Copy a specific commit to current branch",
          },
          {
            code: "git stash",
            description: "Temporarily save changes without committing",
          },
          {
            code: "git stash -u",
            description: "Stash changes including untracked files",
          },
          { code: "git stash pop", description: "Bring back stashed changes" },
          { code: "git stash list", description: "See all your stashes" },
          { code: "git stash drop", description: "Delete a stash" },
        ],
      },
      {
        title: "Remote Management",
        commands: [
          {
            code: "git remote -v",
            description: "See which GitHub repository you're connected to",
          },
          {
            code: "git remote add origin <url>",
            description: "Connect your folder to a GitHub repository",
          },
          {
            code: "git fetch",
            description: "Download changes but don't merge them yet",
          },
          {
            code: "git push --set-upstream origin <branch>",
            description: "Push and track new branch",
          },
        ],
      },
    ],
  },
  {
    title: "🔴 Hard Commands (Advanced Wizardry)",
    difficulty: "hard",
    subsections: [
      {
        title: "History Rewriting (Dangerous!)",
        commands: [
          {
            code: "git reset --soft HEAD~1",
            description: "Undo last commit, keep changes staged",
          },
          {
            code: "git reset --mixed HEAD~1",
            description: "Undo last commit, unstage changes",
          },
          {
            code: "git reset --hard HEAD~1",
            description: "Undo last commit, delete all changes",
          },
          {
            code: "git reset --hard <commit-id>",
            description: "Jump back to specific commit, lose everything after",
          },
          {
            code: "git rebase -i HEAD~3",
            description:
              "Interactively edit last 3 commits (squash, reorder, etc.)",
          },
          {
            code: "git rebase <branch>",
            description: "Move your commits to tip of another branch",
          },
        ],
      },
      {
        title: "Advanced History & Recovery",
        commands: [
          {
            code: "git reflog",
            description: "See everything you've done (even deleted commits!)",
          },
          {
            code: "git fsck --lost-found",
            description: "Find orphaned commits",
          },
          {
            code: "git log --graph --oneline --all",
            description: "Visual tree of all branches",
          },
          {
            code: "git blame <file>",
            description: "See who wrote each line of code",
          },
          {
            code: "git bisect start",
            description: "Binary search to find which commit broke something",
          },
        ],
      },
      {
        title: "Advanced Merging",
        commands: [
          {
            code: "git merge --no-ff <branch>",
            description:
              "Force create merge commit (even if fast-forward possible)",
          },
          {
            code: "git merge --squash <branch>",
            description: "Combine all commits from branch into one",
          },
          {
            code: "git merge -X ours <branch>",
            description: "Merge but prefer our version in conflicts",
          },
        ],
      },
    ],
  },
  {
    title: "🐙 GitHub Concepts",
    difficulty: "github",
    subsections: [
      {
        title: "Repository Management",
        tip: `<strong>Fork</strong> - Make your own copy of someone else's repository<br>
          <strong>Clone</strong> - Download a repository to your computer<br>
          <strong>Star</strong> - Bookmark a repository (like a "like" button)<br>
          <strong>Watch</strong> - Get notifications when repository changes<br>
          <strong>Issues</strong> - Bug reports or feature requests<br>
          <strong>Pull Request (PR)</strong> - Ask to merge your changes into main repository`,
      },
      {
        title: "Collaboration Workflow",
        workflow: {
          title: "Contributing to Open Source",
          code: `# On GitHub: Fork the repository
git clone <your-fork-url>
git checkout -b feature-branch
# Make changes
git add .
git commit -m "Add amazing feature"
git push origin feature-branch
# On GitHub: Create Pull Request`,
        },
      },
    ],
  },
  {
    title: "🚨 Emergency Commands (When Things Go Wrong)",
    difficulty: "emergency",
    subsections: [
      {
        title: '"I Messed Up!"',
        commands: [
          { code: "git reflog", description: "Find lost commits" },
          {
            code: "git reset --hard HEAD@{1}",
            description: "Go back to where you were before",
          },
          {
            code: "git checkout <commit-id> -- <file>",
            description: "Restore specific file from specific commit",
          },
        ],
      },
      {
        title: '"I Can\'t Push!"',
        commands: [
          {
            code: "git pull --rebase",
            description: "Download changes and replay your commits on top",
          },
          {
            code: "git push --force-with-lease",
            description: "Force push but safely",
          },
        ],
      },
      {
        title: "Fixing Merge Conflicts",
        workflow: {
          title: "Conflict Resolution",
          code: `git status  # See which files have conflicts
# Edit files to resolve <<<<<<< ======= >>>>>>> markers
git add <resolved-files>  # Mark conflicts as resolved
git commit  # Complete the merge`,
        },
      },
    ],
  },
];

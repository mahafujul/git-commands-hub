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
    title: "🔵 Understanding Git & GitHub (Core Concepts)",
    difficulty: "concepts",
    subsections: [
      {
        title: "What is a Remote?",
        tip: `
<strong>Remote</strong> = A connection to a repository stored somewhere else (like GitHub or GitLab).<br><br>

Think of it like a <strong>bookmark</strong> to another copy of your code that lives on the internet.<br><br>

<strong>Common scenario:</strong>
<ul>
  <li>Your code lives on your laptop (local)</li>
  <li>A copy lives on GitHub (remote called "origin")</li>
  <li>You push/pull to keep them in sync</li>
</ul>
      `,
      },
      {
        title: "Why Use Multiple Remotes?",
        tip: `
In real-world projects, teams often connect to <strong>multiple remote repositories</strong>:<br><br>

<strong>Example:</strong>
<ul>
  <li><strong>origin</strong> → GitHub (primary collaboration)</li>
  <li><strong>gitlab</strong> → GitLab (backup or internal access)</li>
</ul>

<strong>Benefits:</strong>
<ul>
  <li>Code backup across platforms</li>
  <li>Different access controls for different teams</li>
  <li>Flexibility in collaboration workflows</li>
</ul>
      `,
      },
      {
        title: "Standard Remote Naming",
        tip: `
<strong>Convention everyone follows:</strong>
<ul>
  <li><strong>origin</strong> → Your primary remote (usually GitHub)</li>
  <li><strong>upstream</strong> → Original project you forked from</li>
  <li><strong>gitlab</strong> → Secondary remote (if using GitLab)</li>
</ul>

Following this convention makes commands predictable and easier to understand.
      `,
      },
      {
        title: "Working with Remotes - Basic Commands",
        commands: [
          {
            code: "git remote -v",
            description: "List all remotes connected to your repository",
          },
          {
            code: "git remote add <name> <url>",
            description: "Connect to a new remote repository",
          },
          {
            code: "git remote rename <old> <new>",
            description: "Rename an existing remote",
          },
          {
            code: "git remote remove <name>",
            description: "Disconnect from a remote",
          },
        ],
      },
      {
        title: "Pushing to Different Remotes",
        commands: [
          {
            code: "git push origin main",
            description: "Push to GitHub (origin)",
          },
          {
            code: "git push gitlab main",
            description: "Push to GitLab (gitlab)",
          },
          {
            code: "git push --all origin",
            description: "Push all branches to origin",
          },
        ],
      },
    ],
  },
  {
    title: "🔐 SSH Keys (Secure & Passwordless Access)",
    difficulty: "concepts",
    subsections: [
      {
        title: "What is SSH and Why Should I Care?",
        tip: `
<strong>SSH (Secure Shell)</strong> lets you connect to GitHub/GitLab without typing your password every time.<br><br>

<strong>Without SSH:</strong>
<ul>
  <li>Type username & password for every push</li>
  <li>Less secure (passwords can be stolen)</li>
  <li>Annoying and time-consuming</li>
</ul>

<strong>With SSH:</strong>
<ul>
  <li>Push/pull automatically - no passwords!</li>
  <li>More secure (uses cryptographic keys)</li>
  <li>Industry standard for professional developers</li>
</ul>
      `,
      },
      {
        title: "How SSH Works (Simple Explanation)",
        tip: `
SSH uses two keys (think of them like a lock and key):<br><br>

<ul>
  <li><strong>Private key</strong> → Stays on your computer (never share this!)</li>
  <li><strong>Public key</strong> → You upload to GitHub/GitLab</li>
</ul>

When you push code, GitHub checks if your private key matches the public key you uploaded. If it matches, you're in!
      `,
      },
      {
        title: "One-Time Setup: Generate SSH Key",
        commands: [
          {
            code: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
            description: "Generate a new SSH key pair (modern & secure)",
          },
          {
            code: "ls ~/.ssh",
            description: "Check that your keys were created successfully",
          },
        ],
      },
      {
        title: "Add SSH Key to SSH Agent",
        tip: `
The <strong>SSH agent</strong> manages your keys so you don't have to manually load them every time.<br><br>
Think of it as a key manager that remembers your keys for you.
      `,
        commands: [
          {
            code: 'eval "$(ssh-agent -s)"',
            description: "Start the SSH agent",
          },
          {
            code: "ssh-add ~/.ssh/id_ed25519",
            description: "Add your private key to the agent",
          },
        ],
      },
      {
        title: "Upload Public Key to GitHub/GitLab",
        workflow: {
          title: "Follow these steps",
          code: `# 1. Copy your public key to clipboard
cat ~/.ssh/id_ed25519.pub

# 2. Go to GitHub/GitLab Settings
#    GitHub: Settings → SSH and GPG keys → New SSH key
#    GitLab: Settings → SSH Keys → Add new key

# 3. Paste the key and give it a name (e.g., "My Laptop")

# 4. Save!`,
        },
      },
      {
        title: "Test Your SSH Connection",
        commands: [
          {
            code: "ssh -T git@github.com",
            description: "Test connection to GitHub",
          },
          {
            code: "ssh -T git@gitlab.com",
            description: "Test connection to GitLab",
          },
        ],
        tip: `
<strong>Success message:</strong> "Hi username! You've successfully authenticated..."<br>
<strong>Error?</strong> Double-check you uploaded the correct public key.
      `,
      },
      {
        title: "Why Teams Use SSH",
        tip: `
<strong>SSH is essential for:</strong>
<ul>
  <li>Automated deployments (CI/CD pipelines)</li>
  <li>Team collaboration without password sharing</li>
  <li>Secure access to private repositories</li>
  <li>Professional development workflows</li>
</ul>

Once set up, you'll never think about authentication again!
      `,
      },
    ],
  },
  {
    title: "🎟️ Personal Access Tokens (PAT)",
    difficulty: "concepts",
    subsections: [
      {
        title: "What is a PAT and Why Do I Need It?",
        tip: `
<strong>Personal Access Token (PAT)</strong> is like a temporary password that gives specific permissions to apps and services.<br><br>

<strong>Think of it as:</strong> A special key that unlocks only certain doors, not your entire account.<br><br>

<strong>Why PATs exist:</strong>
<ul>
  <li>GitHub disabled password authentication in 2021</li>
  <li>More secure than passwords (you can limit what they can do)</li>
  <li>Can be revoked without changing your password</li>
  <li>Required for API access, automation, and Docker</li>
</ul>
      `,
      },
      {
        title: "PAT vs SSH: When to Use Which?",
        tip: `
<strong>Use SSH for:</strong>
<ul>
  <li>Git operations (push, pull, clone)</li>
  <li>Daily development work</li>
  <li>Personal repositories</li>
</ul>

<strong>Use PAT for:</strong>
<ul>
  <li>GitHub API access</li>
  <li>Docker image publishing (GHCR)</li>
  <li>CI/CD pipelines (GitHub Actions)</li>
  <li>Third-party apps and services</li>
  <li>Automation scripts</li>
</ul>

<strong>Pro tip:</strong> You can use both! SSH for git, PAT for everything else.
      `,
      },
      {
        title: "Creating a Personal Access Token",
        workflow: {
          title: "Step-by-step guide",
          code: `# 1. Go to GitHub Settings
#    Settings → Developer settings → Personal access tokens → Tokens (classic)

# 2. Click "Generate new token (classic)"

# 3. Give it a descriptive name (e.g., "Docker GHCR Access")

# 4. Set expiration (recommended: 90 days for security)

# 5. Select scopes (permissions):
#    ✅ repo (full control of private repos)
#    ✅ write:packages (upload packages)
#    ✅ read:packages (download packages)
#    ✅ delete:packages (delete packages)

# 6. Click "Generate token"

# 7. COPY THE TOKEN IMMEDIATELY! You won't see it again!`,
        },
      },
      {
        title: "Storing Your PAT Securely",
        tip: `
<strong>⚠️ NEVER commit PATs to Git repositories!</strong><br><br>

<strong>Secure storage options:</strong>
<ul>
  <li><strong>Environment variables</strong> → Store in .bashrc or .zshrc</li>
  <li><strong>Password manager</strong> → 1Password, Bitwarden, LastPass</li>
  <li><strong>GitHub CLI</strong> → Automatically stores credentials</li>
  <li><strong>Git Credential Manager</strong> → Built-in credential storage</li>
</ul>
      `,
        commands: [
          {
            code: 'export GITHUB_TOKEN="your_pat_here"',
            description: "Store PAT in environment variable (temporary)",
          },
          {
            code: 'echo "export GITHUB_TOKEN=your_pat_here" >> ~/.bashrc',
            description: "Store PAT permanently in bash profile",
          },
          {
            code: "echo $GITHUB_TOKEN",
            description: "Verify PAT is stored",
          },
        ],
      },
      {
        title: "Using PAT for Git Operations (HTTPS)",
        commands: [
          {
            code: "git clone https://github.com/username/repo.git",
            description: "Clone with HTTPS (will prompt for PAT)",
          },
          {
            code: "git remote set-url origin https://<PAT>@github.com/user/repo.git",
            description: "Add PAT directly to remote URL (not recommended)",
          },
          {
            code: "git config --global credential.helper store",
            description: "Store credentials permanently (use with caution)",
          },
        ],
        tip: `
<strong>When prompted:</strong>
<ul>
  <li>Username: Your GitHub username</li>
  <li>Password: Your PAT (not your actual password!)</li>
</ul>
      `,
      },
      {
        title: "Real-World Use: Docker Login with PAT",
        tip: `
<strong>GitHub Container Registry (GHCR)</strong> stores Docker images.<br>
You need a PAT to authenticate and publish images.
      `,
        commands: [
          {
            code: "echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin",
            description: "Login to GitHub Container Registry using PAT",
          },
          {
            code: "docker login ghcr.io",
            description:
              "Login interactively (will prompt for username and PAT)",
          },
        ],
      },
      {
        title: "Publishing Docker Images to GHCR",
        workflow: {
          title: "Complete workflow",
          code: `# 1. Build your Docker image
docker build -t myapp:latest .

# 2. Tag image for GHCR (use lowercase username!)
docker tag myapp:latest ghcr.io/username/myapp:latest
docker tag myapp:latest ghcr.io/username/myapp:v1.0.0

# 3. Login to GHCR with PAT
echo $GITHUB_TOKEN | docker login ghcr.io -u username --password-stdin

# 4. Push image to GHCR
docker push ghcr.io/username/myapp:latest
docker push ghcr.io/username/myapp:v1.0.0

# 5. Make package public (if needed)
#    Go to: github.com/users/username/packages → Package settings → Change visibility`,
        },
      },
      {
        title: "Docker Tagging Best Practices",
        tip: `
<strong>Common tagging strategies:</strong>
<ul>
  <li><code>latest</code> → Most recent version (auto-updated)</li>
  <li><code>v1.0.0</code> → Specific semantic version</li>
  <li><code>stable</code> → Production-ready release</li>
  <li><code>dev</code> → Development builds</li>
  <li><code>sha-a1b2c3d</code> → Git commit SHA</li>
</ul>

<strong>Example:</strong> One image can have multiple tags
      `,
        commands: [
          {
            code: "docker tag myapp:latest ghcr.io/user/myapp:latest",
            description: "Tag as latest version",
          },
          {
            code: "docker tag myapp:latest ghcr.io/user/myapp:v1.2.3",
            description: "Tag with semantic version",
          },
          {
            code: "docker tag myapp:latest ghcr.io/user/myapp:stable",
            description: "Tag as stable release",
          },
        ],
      },
      {
        title: "Pulling Images from GHCR",
        commands: [
          {
            code: "docker pull ghcr.io/username/myapp:latest",
            description: "Pull latest version (public images)",
          },
          {
            code: "echo $GITHUB_TOKEN | docker login ghcr.io -u username --password-stdin",
            description: "Login first for private images",
          },
          {
            code: "docker pull ghcr.io/username/myapp:v1.0.0",
            description: "Pull specific version",
          },
        ],
      },
      {
        title: "Managing Your PATs",
        commands: [
          {
            code: "gh auth status",
            description: "Check GitHub CLI authentication status",
          },
          {
            code: "gh auth refresh",
            description: "Refresh GitHub CLI token",
          },
        ],
        tip: `
<strong>Security best practices:</strong>
<ul>
  <li>Set expiration dates (30-90 days recommended)</li>
  <li>Use minimum required permissions</li>
  <li>Revoke tokens you're not using</li>
  <li>Never share tokens or commit them to repos</li>
  <li>Rotate tokens regularly</li>
</ul>

<strong>To revoke a PAT:</strong> GitHub Settings → Developer settings → Personal access tokens → Delete
      `,
      },
      {
        title: "Troubleshooting PAT Issues",
        tip: `
<strong>Common errors and solutions:</strong>
<ul>
  <li><strong>"403 Forbidden"</strong> → Check token permissions (scopes)</li>
  <li><strong>"401 Unauthorized"</strong> → Token expired or invalid</li>
  <li><strong>"denied: permission_denied"</strong> → Need write:packages scope</li>
  <li><strong>"no basic auth credentials"</strong> → Not logged in to Docker</li>
</ul>
      `,
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
          {
            code: "git stash --staged",
            description: "Stash changes that are staged for commit",
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

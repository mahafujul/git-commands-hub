export default function ProTips() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-blue-500">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        💡 Pro Tips
      </h2>
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-gray-700 space-y-2">
        <p>
          •{" "}
          <strong>
            Always use{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">git status</code>
          </strong>{" "}
          - It tells you exactly what to do next
        </p>
        <p>
          • <strong>Commit early, commit often</strong> - Small commits are
          easier to understand
        </p>
        <p>
          • <strong>Write good commit messages</strong> - Future you will thank
          present you
        </p>
        <p>
          • <strong>Use branches</strong> - Keep main branch clean
        </p>
        <p>
          •{" "}
          <strong>
            <code className="bg-gray-200 px-2 py-1 rounded">
              git log --oneline
            </code>
          </strong>{" "}
          - Quick way to see recent commits
        </p>
        <p>
          •{" "}
          <strong>
            Never{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">
              git push --force
            </code>
          </strong>{" "}
          to shared branches
        </p>
        <p>
          •{" "}
          <strong>
            <code className="bg-gray-200 px-2 py-1 rounded">git stash</code> is
            your friend
          </strong>{" "}
          - When you need to quickly switch context
        </p>
      </div>
    </div>
  );
}

import { Book, GitBranch, AlertTriangle, Github } from "lucide-react";
import CommandItem from "./CommandItem";
import Workflow from "./Workflow";
import Tip from "./Tip";
import type { Section } from "../types/types";

interface SectionCardProps {
  section: Section;
}

export default function SectionCard({ section }: SectionCardProps) {
  const difficultyColors = {
    easy: "border-l-green-500",
    medium: "border-l-yellow-500",
    hard: "border-l-red-500",
    github: "border-l-purple-500",
    concepts: "border-l-blue-500",
    emergency: "border-l-orange-500",
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md border-l-4 ${
        difficultyColors[section.difficulty]
      } p-4 sm:p-6 mb-6`}
    >
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {section.title}
        </h2>
      </div>

      {section.subsections.map((subsection, idx) => (
        <div key={idx} className="mb-6 last:mb-0">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {subsection.title}
          </h3>

          {subsection.commands && (
            <div className="space-y-3">
              {subsection.commands.map((cmd, cmdIdx) => (
                <CommandItem key={cmdIdx} {...cmd} />
              ))}
            </div>
          )}

          {subsection.tip && <Tip content={subsection.tip} />}

          {subsection.workflow && (
            <Workflow
              title={subsection.workflow.title}
              code={subsection.workflow.code}
            />
          )}
        </div>
      ))}
    </div>
  );
}

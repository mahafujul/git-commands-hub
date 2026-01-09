import type { FilterType } from "../types/types";

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function FilterBar({
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  const filters = [
    { id: "all" as const, label: "All", color: "bg-gray-500" },
    { id: "easy" as const, label: "Easy", color: "bg-green-500" },
    { id: "medium" as const, label: "Medium", color: "bg-yellow-500" },
    { id: "hard" as const, label: "Hard", color: "bg-red-500" },
    { id: "github" as const, label: "GitHub", color: "bg-purple-500" },
    { id: "emergency" as const, label: "Emergency", color: "bg-orange-500" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeFilter === filter.id
              ? `${filter.color} text-white shadow-md`
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

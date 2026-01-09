"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import SectionCard from "@/components/SectionCard";
import ProTips from "@/components/ProTips";
import { sections } from "@/data/sections";
import type { FilterType } from "@/types/types";

export default function GitCheatSheet() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredSections = sections.filter((section) => {
    if (activeFilter !== "all" && section.difficulty !== activeFilter)
      return false;

    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return section.subsections.some(
      (sub) =>
        sub.title.toLowerCase().includes(searchLower) ||
        sub.commands?.some(
          (cmd) =>
            cmd.code.toLowerCase().includes(searchLower) ||
            cmd.description.toLowerCase().includes(searchLower)
        )
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Search and Filters */}
      {/* <div className="max-w-6xl mx-auto px-4 py-6 sticky top-32 sm:top-36 bg-gradient-to-br from-gray-50 to-gray-100 z-10">
        <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </div> */}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {filteredSections.map((section, idx) => (
          <SectionCard key={idx} section={section} />
        ))}

        <ProTips />
      </main>
    </div>
  );
}

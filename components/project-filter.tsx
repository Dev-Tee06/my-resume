"use client";

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Project categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          className={`filter-tab ${active === category ? "filter-tab-active" : ""}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

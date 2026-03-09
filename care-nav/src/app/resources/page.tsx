'use client';

import { useState, useMemo } from 'react';
import ResourceFilter from '@/components/resources/ResourceFilter';
import ResourceCard from '@/components/resources/ResourceCard';
import { resources, resourceCategories } from '@/data/resources';
import { ResourceCategory } from '@/types';

export default function ResourcesPage() {
  const [selected, setSelected] = useState<string>('all');

  const filtered = useMemo(() => {
    if (selected === 'all') return resources;
    return resources.filter((r) => r.category === (selected as ResourceCategory));
  }, [selected]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">Directory</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Resource Finder</h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          Key organizations, programs, and tools to help you navigate the financial, legal, medical, and caregiving aspects of elder care.
        </p>
      </div>

      <div className="mb-6">
        <ResourceFilter
          categories={resourceCategories}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      <p className="text-sm text-slate-400 mb-5">
        Showing {filtered.length} resource{filtered.length !== 1 ? 's' : ''}
        {selected !== 'all' && ` in "${resourceCategories.find((c) => c.id === selected)?.label}"`}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <p className="text-lg">No resources found for this category.</p>
        </div>
      )}
    </div>
  );
}

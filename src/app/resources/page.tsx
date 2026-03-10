'use client';

import { useState, useMemo } from 'react';
import ResourceFilter from '@/components/resources/ResourceFilter';
import ResourceCard from '@/components/resources/ResourceCard';
import { resources, resourceCategories } from '@/data/resources';
import { ResourceCategory } from '@/types';
import PageHero from '@/components/ui/PageHero';

export default function ResourcesPage() {
  const [selected, setSelected] = useState<string>('all');

  const filtered = useMemo(() => {
    if (selected === 'all') return resources;
    return resources.filter((r) => r.category === (selected as ResourceCategory));
  }, [selected]);

  return (
    <div>
      <PageHero
        eyebrow="Directory"
        title="Resource Finder"
        subtitle="Medi-Cal programs, IHSS enrollment, CalAIM community supports, legal aid, and senior care resources across California — all in one place."
        photoId="photo-1543269664-76bc3997d9ea"
        photoAlt="A diverse group of seniors and family members gathered warmly in a California community setting"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
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
    </div>
  );
}

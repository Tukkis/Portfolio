import React from 'react';
import RowItem from './RowItem';
import FilterBar from './Filterbar';

const ProjectsSection = ({ projects, allKeywords, activeFilters, setActiveFilters }, ref) => {
  const filteredProjects =
    activeFilters.length === 0
      ? projects
      : projects.filter((p) =>
          activeFilters.every((keyword) => p.keywords.includes(keyword))
        );

  return (
    <section ref={ref} className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <FilterBar
        allKeywords={allKeywords}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <div className="projects-list">
        {filteredProjects.map((project, i) => (
          <RowItem
            key={i}
            index={i}
            imageSrc={project.image}
            title={project.name}
            shortDescription={project.text}
            longDescription={project.longText}
            features={project.features}
            keywords={project.keywords}
          />
        ))}
      </div>
    </section>
  );
};

export default React.forwardRef(ProjectsSection);

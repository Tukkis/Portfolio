import React from 'react';

const FilterBar = ({ allKeywords, activeFilters, setActiveFilters }) => {
    return (
      <div className="filter-bar">
        {allKeywords.map((keyword) => (
          <button
            key={keyword}
            className={`filter-button ${activeFilters.includes(keyword) ? 'active' : ''}`}
            onClick={() =>
              setActiveFilters((prev) =>
                prev.includes(keyword)
                  ? prev.filter((t) => t !== keyword)
                  : [...prev, keyword]
              )
            }
          >
            {keyword}
          </button>
        ))}
      </div>
    );
  };
  
export default FilterBar;
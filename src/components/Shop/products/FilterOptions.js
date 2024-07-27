import React, { useState } from 'react';
import './FilterOptions.css';
const FilterOptions = ({ onFilterChange, selectedFilter }) => {
  console.log("from filter optionss::" , onFilterChange);
  const [showFilters, setShowFilters] = useState(false);

  const handleChange = (event) => {
    onFilterChange(event.target.checked && selectedFilter !== event.target.value ? event.target.value : '');
    setShowFilters(false);  // Optionally close filters on selection
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className='mt-4'>
      <button onClick={toggleFilters} className="filter-toggle-btn">
        Filters
      </button>
      {showFilters && (
        <form className=' position-absolute '>
          {["men's clothing", "women's clothing", 'electronics'].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                name="filter"
                value={category}
                onChange={handleChange}
                checked={selectedFilter === category}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </form>
      )}
    </div>
  );
};

export default FilterOptions;

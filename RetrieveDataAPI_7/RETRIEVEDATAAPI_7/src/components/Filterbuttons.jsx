import React from 'react';

const FilterButtons = ({ filter, filterProducts }) => {
  return (
    <div className="filter-buttons flex justify-around w-1/2 mx-auto p-4">
      <button
        className={`px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => filterProducts('All')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'Men' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => filterProducts('Men')}
      >
        Men
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'Women' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => filterProducts('Women')}
      >
        Women
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'Kids' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => filterProducts('Kids')}
      >
        Kids
      </button>
    </div>
  );
};

export default FilterButtons;

import "./Filter.css";

function FilterBar({ isExpanded }) {
  const filters = [
    "All", "Music", "Gaming", "News", "Live", "Recently uploaded", 
    "Watched", "New to you", "Trending", "Cooking", "Podcasts"
  ];

  return (
    <div className={`filter-bar ${isExpanded ? "expanded" : ""}`}>
      <div className="filter-scroll-container">
        {filters.map((filter, index) => (
          <button 
            key={index}
            className={`filter-item ${index === 0 ? "active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
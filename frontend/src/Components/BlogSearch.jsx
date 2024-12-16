import React from 'react';

const BlogSearch = ({ search, handleSearchChange, handleSearch }) => {
  const handleInputChange = (event) => {
    handleSearchChange(event); // Update the search query state

    if (event.target.value === '') {
      handleSearch(); // If input is empty, show all results
    } else {
      handleSearch(); // Trigger the search otherwise
    }
  };

  return (
    <div className="blog-search-input">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search Blog by Title..."
      />
    </div>
  );
};

export default BlogSearch;

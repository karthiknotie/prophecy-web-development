import React from 'react';

const CareerSearch = ({ search, handleSearchChange, onSearch }) => {
    const handleInputChange = (event) => {
        handleSearchChange(event); // Update the search query state
        
        // Check if the search input is empty and refresh the page if so
        if (event.target.value === '') {
            window.location.reload(); // Refresh the page if the input is empty
        } else {
            onSearch(); // Automatically trigger the search otherwise
        }
    };

    return (
        <div className="blog-search-input">
            <input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Search Job by Role..."
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default CareerSearch;

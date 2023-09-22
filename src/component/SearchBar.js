import React, { useEffect, useState } from "react";

const SearchBar = ({ listRes, setFilterData, setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filterData = listRes.filter((item, index) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterData(filterData);
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        className="search-input"
        placeholder="Enter Search here..."
        onChange={(e) => handleSearchTerm(e)}
      />
    </div>
  );
};

export default SearchBar;

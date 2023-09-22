import React, { useEffect, useState } from "react";
import List from "./List";
import SearchBar from "./SearchBar";

const api = "https://dummyjson.com/products";

const ListPage = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getSListData();
  }, []);
  const getSListData = async () => {
    const res = await fetch(api);
    const listRes = await res.json();
    setData(listRes.products);
    setFilterData(listRes.products);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <SearchBar
        listRes={data}
        setFilterData={setFilterData}
        setCurrentPage={setCurrentPage}
      />
      <List
        listRes={filterData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={paginate}
      />
    </div>
  );
};

export default ListPage;

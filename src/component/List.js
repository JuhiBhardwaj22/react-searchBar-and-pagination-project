import React from "react";
import { Pagination } from "./Pagination";

const List = ({ listRes, currentPage, itemsPerPage, setCurrentPage }) => {
  // Pagination logic

  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = listRes.slice(indexOfFirstItems, indexOfLastItems);
  return (
    <div>
      <ul className="list-ul">
        {currentItems.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItem={listRes.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default List;

"use client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { supabase } from "../services/supabase";

function YourComponent() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10; // จำนวนรายการต่อหน้า

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    const offset = page * perPage;
    const { data, error } = await supabase
      .from("Test")
      .select()
      .range(offset, offset + perPage - 1);

    if (error) {
      console.error("Error fetching data:", error.message);
      return;
    }

    setItems(data);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <h1>Supabase Data Pagination Example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.fullName}</li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={10} // จำนวนหน้าทั้งหมด
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default YourComponent;

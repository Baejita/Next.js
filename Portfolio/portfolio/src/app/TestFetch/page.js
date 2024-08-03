"use client";
import React, { useState, useEffect } from "react";
import { getTest } from "../services/apiPerformance";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDataFromTest() {
      try {
        const result = await getTest();
        console.log(result);
        setData(result); // Assuming result is an array of data objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getDataFromTest();
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <p>This is a test page.</p>
      {data.map((item, index) => (
        <p key={index}>{item.fullName}</p>
      ))}
      {/* Other components or logic */}
    </div>
  );
}

export default Page;

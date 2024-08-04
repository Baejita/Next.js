"use client";

import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { createBrowserClient } from "@supabase/ssr";

function page() {
  const [dataPage, setDataPage] = useState([]);
  async function getfetchPerfrom() {
    const { data, error } = await supabase
      .from("performResult")
      .select(
        "id,typeOf,date,district,subDistrict,mainTopic,details,image,result"
      )
      .range(100, 120)
      .order("id");

    if (error) {
      console.error(error);
      throw new Error("PerformResult could not be loaded");
    }
    return data;
  }
  useEffect(() => {
    getfetchPerfrom().then((data) => {
      setDataPage(data);
    });
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {dataPage.map((item) => (
          <li key={item.id}>{item.date}</li>
        ))}
      </ul>
      <button>Load More</button>
    </div>
  );
}

export default page;

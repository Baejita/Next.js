"use client";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function page() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase.from("Test").select("*");

      console.log(data);
      setTestData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {testData.map((test) => (
        <p>{test.fullName}</p>
      ))}
    </div>
  );
}

export default page;

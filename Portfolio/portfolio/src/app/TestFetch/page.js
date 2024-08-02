"use client";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    supabase
      .from("Test")
      .select("*")
      .then(({ data }) => setData(data));
  }, []);
  return (
    <div>
      <h1>Hi </h1>
      {data.map((item) => {
        return <p key={item.id}>{item.fullName}</p>;
      })}
    </div>
  );
}

export default page;

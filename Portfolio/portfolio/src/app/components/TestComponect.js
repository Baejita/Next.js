"use client";

import { SupabaseClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export const ClientComponent = () => {
  const supabase = createClientComponentClient();
  const [data, setData] = useState(null);

  useEffect(() => {
    SupabaseClient.from("Test")
      .select("*")
      .then(({ data }) => setData(data));
  }, []);

  return (
    <>
      <h2>This is a client component {data.fullName}</h2>
    </>
  );
};

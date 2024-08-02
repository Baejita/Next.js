"use client";
// services/supabase.js

import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const supabaseUrl = " https://gkywegpqvqbcrhpfosqh.supabase.co"; // Replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreXdlZ3BxdnFiY3JocGZvc3FoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjE4ODczMywiZXhwIjoyMDM3NzY0NzMzfQ.FX4P5pL9qCWwPf5BVydhmCskBWhHY4yziK02OiImo3Y"; // Replace with your Supabase Anonymous Key

const supabase = createClient(supabaseUrl, supabaseKey);

const Page = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from("Test")
        .select("id, fullName, number")
        .order("id")
        .single(); // Use .single() if expecting only one result

      if (error) {
        console.error(error);
        throw new Error("Test could not be loaded");
      }

      setUsers(data); // Ensure data is set to an empty array if null or undefined
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <div>
        {users.map((test) => (
          <div key={test.id}>
            <p>
              {test.id} {test.fullName} : {test.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

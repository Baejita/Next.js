"use client";

import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function page() {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    let { data, error } = await supabase.from("Test").select("*");
    console.log({ data });
    if (error || !data) {
      console.log("error", error);
    }

    setUsers(data);
  };
  useEffect(() => {
    fetchUser()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  }, []);

  return (
    <>
      <h1>Test</h1>
      <div>
        {users &&
          users.map((user) => (
            <div key={user.id}>
              <p>{fullName}</p>
            </div>
          ))}
      </div>
    </>
  );
}

"use client";

import { createClient } from "@supabase/client";
import { useEffect, useState } from "react";

export default function UserTest() {
  const supabase = createClient();
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    let { data: Test, error } = await supabase.from("Test").select("*");

    if (error || !data) {
      console.log("error", error);
    }

    setUsers(Test || []);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <>
          <h1>{user.fullName}</h1>
        </>
      ))}
    </div>
  );
}

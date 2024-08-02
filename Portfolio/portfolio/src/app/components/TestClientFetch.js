"use client";

import { useState, useEffect } from "react";
import { getTest } from "../services/apiPerformance";

export const TestClientFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data, error } = await getTest();

      setUsers(data || []);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>This is a client component</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

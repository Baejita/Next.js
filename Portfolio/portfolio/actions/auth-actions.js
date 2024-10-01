"use server";

import { redirect } from "next/navigation";
import { hashUserPassword } from "../lib/hash";
import { createUser } from "../lib/user";
import { createAuthSession } from "../lib/auth";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    createAuthSession(id);
    redirect("/performance");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "It seem like an account for the choses email already exists",
        },
      };
    }
    throw error;
  }

  //stor it in the database (create new a user)
}

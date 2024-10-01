"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { signup } from "../../../actions/auth-actions";
export default function AuthForm({ mode }) {
  const [formState, formAction] = useFormState(signup, {});
  return (
    <form id="auth-form" action={formAction}>
      <h1 className="text-[36px] text-center">
        {mode === "login" ? "ลงชื่อเช้าใช้" : "สร้างบัญชีใหม่"}
      </h1>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li className="pt-6" key={error}>
              {formState.errors[error]}
            </li>
          ))}
        </ul>
      )}
      <p className="py-4">
        <button type="submit">
          {mode === "login" ? "ลงชื่อเช้าใช้" : "สร้างบัญชีใหม่"}
        </button>
      </p>
      <p>
        {mode === "login" && (
          <Link href="/authPage?mode=signup">สร้างบัญชีผู้ใช้</Link>
        )}
        {mode === "signup" && (
          <Link href="/authPage/?mode=login">ลงชื่อเข้าใช้ (มีบัญชีแล้ว)</Link>
        )}
      </p>
    </form>
  );
}

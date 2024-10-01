import React from "react";
import AuthForm from "../components/auth-form";

function page({ searchParams }) {
  const formMode = searchParams.mode || "login";
  return (
    <div>
      <AuthForm mode={formMode} />
    </div>
  );
}

export default page;

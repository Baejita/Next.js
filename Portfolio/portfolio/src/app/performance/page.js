import { submitForm } from "../services/action";
import TitlePerForm from "../components/TitlePerForm";
import AllListOfPerform from "../components/AllListOfPerform";
import Highlight from "../components/Higlight";
import Spinner from "../components/Spinner";
import { Suspense } from "react";
import { verifyAuth } from "../../../lib/auth";
import { redirect } from "next/navigation";

export const revalidate = 0; //ทำให้รีเฟชตลอด
export default async function Page({ data }) {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/authPage");
  }

  return (
    <>
      <TitlePerForm />
      <Suspense
        fallback={
          <div className="grid items-center justify-center">
            <Spinner />
            <p className="text-xl text-primary-500">
              Loading ผลการดำเนินงาน...
            </p>
          </div>
        }
      >
        <Highlight />
        <AllListOfPerform />
      </Suspense>
      <form action={submitForm} className=" font-medium text-xl my-10">
        Email <input name="email" />
        <button>Submit</button>
      </form>
    </>
  );
}

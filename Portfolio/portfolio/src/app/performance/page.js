import Image from "next/image";
import Link from "next/link";
import doubleQ from "/src/app/image/quote_4990659.png";
import Card from "../components/Card";
import { getPerformResult, getSAPA, getTest } from "../services/apiPerformance";
import { submitForm } from "../services/action";
import { Children } from "react";
import TitlePerForm from "../components/TitlePerForm";
import AllListOfPerform from "../components/AllListOfPerform";

export const revalidate = 0; //ทำให้รีเฟชตลอด
export default async function Page({ data }) {
  //const test = await getTest()

  return (
    <>
      <TitlePerForm />

      <div>{/* <Card>{Children}</Card> */}</div>

      <AllListOfPerform />
      <form action={submitForm} className=" font-medium text-xl my-10">
        Email <input name="email" />
        <button>Submit</button>
      </form>
    </>
  );
}

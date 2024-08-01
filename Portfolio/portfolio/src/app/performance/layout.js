import { submitForm } from "../services/action";
import TitlePerForm from "../components/TitlePerForm";
import AllListOfPerform from "../components/AllListOfPerform";
import Highlight from "../components/Higlight";

export const revalidate = 0; //ทำให้รีเฟชตลอด
// export default async function Page({ data }) {
//   //const test = await getTest()

//   return (
//     <>
//       <TitlePerForm />

//       <Highlight />

//       <AllListOfPerform />
//       <form action={submitForm} className=" font-medium text-xl my-10">
//         Email <input name="email" />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div>
      <TitlePerForm />
      <div className="py-1">{children}</div>
    </div>
  );
}

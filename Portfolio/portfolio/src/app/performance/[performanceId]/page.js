import ButtonBack from "@/app/components/ButtonBack";
import { getPerformResult, getResult } from "@/app/services/apiPerformance";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  // Accessing the dynamic route parameter "id"
  const result = await getResult(params.performanceId);
  const { id, typeOf, date, image, district, subDistrict, mainTopic, details } =
    result;

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        <div className="py-4  flex flex-col ">
          {/* <h1>{item.id} </h1> */}

          <div
            className="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 pr-10 align-content-center  "
            key={id}
          >
            {result.image == null ? (
              ""
            ) : (
              <Image
                src={result.image}
                alt="image"
                width={850}
                height={200}
                className="object-cover mr-10"
              />
            )}

            <div className="flex flex-col justify-center py-9 ml-10">
              <div className="my-2">
                <h4>{result.typeOf}</h4>
              </div>
              <div className="my-6 w-[650px]">
                <h2 className="leading-10 mb-4 text-secondary-500 tracking-tight">
                  {result.mainTopic}
                </h2>
                <p className="w-[550px] text-secondary-500 tracking-wide mb-4">
                  {details}
                </p>

                <div className="flex flex-row gap-4 text-primary-500">
                  <h3 className="border-r-4 pr-4 border-secondary-200">
                    {result.date}
                  </h3>
                  <p className="border-r-4 pr-4 border-secondary-200">
                    {result.subDistrict}
                  </p>
                  <p>{result.district}</p>
                </div>
              </div>

              <div>
                <p className="bg-green-500 w-fit py-2 px-4 rounded-sm text-white tracking-wide ">
                  {result.result}
                </p>
                <div className=" flex justify-end">
                  <Link href="/performance">
                    <button className="bg-primary-500 py-1 px-2 text-primary-50 hover:bg-primary-50 hover:text-primary-500">
                      back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

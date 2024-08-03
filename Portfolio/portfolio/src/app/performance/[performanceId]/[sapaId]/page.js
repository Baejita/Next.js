import { getSAPAbyID } from "@/app/services/apiPerformance";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  // Accessing the dynamic route parameter "id"
  const result = await getSAPAbyID(params.sapaId);
  const { id, date, mainTopic, details, hightlight, image, district } = result;

  return (
    <>
      <ul>
        <div className="py-4   ">
          <div
            className="flex flex-col bg-gradient-to-r from-white to-slate-100 pt-10 align-content-center "
            key={id}
          >
            <div className="my-2 ml-10">
              <h2 className="leading-10 mb-4 text-secondary-500 tracking-tight">
                {result.mainTopic}
              </h2>
              <h1>{result.hightlight}</h1>

              <div className="flex flex-row gap-4 text-primary-500 ">
                <h3 className="border-r-4 pr-4 border-secondary-200">
                  {result.date}
                </h3>
                <p className="border-r-4 pr-4 border-secondary-200">
                  {result.subDistrict}
                </p>
                <p>{result.district}</p>
              </div>
            </div>
            {result.image == null ? (
              ""
            ) : (
              <Image
                src={result.image}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="object-cover mx-auto mt-10"
              />
            )}

            <div className="flex flex-col justify-center py-9 ml-60 ">
              <div className="my-6 pr-60">
                <p className=" text-secondary-500 tracking-wide mb-4">
                  {result.details}
                </p>
              </div>

              <div>
                <p className="bg-green-500 w-fit py-2 px-4 rounded-sm text-white tracking-wide ">
                  {result.result}
                </p>
                <div className=" flex justify-end">
                  <Link href="/performance">
                    <button className="bg-primary-500 py-1 px-2 text-primary-50 hover:bg-primary-50 hover:text-primary-500 mr-10">
                      back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}

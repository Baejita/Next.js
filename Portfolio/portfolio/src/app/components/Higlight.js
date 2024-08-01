import Image from "next/image";
import { getSAPA } from "../services/apiPerformance";
import Link from "next/link";

async function Higlight() {
  const sapa = await getSAPA();

  return (
    <div className="grid grid-cols-3 gap-4">
      {sapa.map((item) => (
        <div className="mx-2 my-4  grid-cols-1 grid-rows-3">
          <Link href={"/performance/sapald/" + item.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg hover:drop-shadow-2xl shadow hover:scale-105 dark:bg-gray-800 dark:border-gray-700 transition-transform h-[600px]">
              <Image
                src={item.image}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="object-cover mx-auto "
              />

              <div className="">
                <div className="p-5 bg-slate-200 h-[300px] flex flex-col justify-between">
                  <h5 className="mb-2 text-2xl font-medium tracking-tight text-secondary-700 dark:text-white">
                    {item.mainTopic}
                  </h5>

                  <div className=" flex justify-between">
                    <div>
                      <p>{item.date}</p>
                    </div>

                    <div>
                      {item.hightlight === "hightlight" ? (
                        <h3 className=" bg-primary-500 text-primary-50  w-fit px-2 py-1">
                          Highlight
                        </h3>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* <p className="mb-3 font-normal text-secondary-400 dark:text-gray-400">
               
                {item.details}
              </p> */}

                    <Link
                      href={"/performance/sapald/" + item.id}
                      className="inline-flex items-center px-3 py-2 text-sm
                  font-medium  text-white bg-blue-700 rounded-lg
                  hover:bg-blue-800 focus:ring-4 focus:outline-none
                  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800 justify-end "
                    >
                      <p> Read more</p>
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Higlight;

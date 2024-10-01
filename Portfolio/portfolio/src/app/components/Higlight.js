import Image from "next/image";
import { getSAPA } from "../services/apiPerformance";
import Link from "next/link";

async function Higlight() {
  const sapa = await getSAPA();

  return (
    <div className="grid grid-cols-3 gap-4">
      {sapa.map((item) => (
        <div key={item.id} className="mx-2 my-4">
          <Link href={"/performance/sapald/" + item.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg hover:drop-shadow-2xl shadow hover:scale-105 dark:bg-gray-800 dark:border-gray-700 transition-transform h-[600px]">
              <Image
                src={item.image}
                alt="image"
                width={400}
                height={300}
                layout="responsive"
                className="object-cover rounded-t-lg"
              />

              <div className="p-5 bg-slate-50 flex flex-col justify-between h-[300px]">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-secondary-700 dark:text-white">
                  {item.mainTopic}
                </h5>

                <div className="flex justify-between items-center">
                  <p>{item.date}</p>

                  {item.highlight === "highlight" && (
                    <h3 className="bg-primary-500 text-primary-50 px-2 py-1 rounded-lg">
                      Highlight
                    </h3>
                  )}

                  <Link
                    href={"/performance/sapald/" + item.id}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-end"
                  >
                    <p>Read more</p>
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
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Higlight;

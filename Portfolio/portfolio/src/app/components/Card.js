import Image from "next/image";
import photo from "../../../src/app/image/พี่ปูในสภา.jpeg";
import { getSAPA } from "../services/apiPerformance";

export async function Card(children) {
  const resultFromSapa = await getSAPA();

  return (
    <>
      <div className="mx-2">
        <div>
          <p>{resultFromSapa.date}</p>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg hover:drop-shadow-2xl shadow hover:scale-105 dark:bg-gray-800 dark:border-gray-700 transition-transform">
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={photo}
              width={400}
              height={200}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-secondary-700 dark:text-white">
                {resultFromSapa.mainTopic}
              </h5>
            </a>
            <p className="mb-3 font-normal text-secondary-400 dark:text-gray-400">
              {/* อภิปรายร่างพระราชบัญญัติการประกอบกิจการกระจายเสียงและกิจการโทรทัศน */}
              {resultFromSapa.details}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

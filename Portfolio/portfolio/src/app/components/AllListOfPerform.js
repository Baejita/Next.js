import Image from "next/image";
import { getPerformResult } from "../services/apiPerformance";
import Link from "next/link";

async function AllListOfPerform() {
  const districts = await getPerformResult();
  return (
    <div>
      <ul>
        {districts.map((item) => (
          <div key={item.id} className=" bg-primary-500">
            <Link href={"/performance/" + item.id}>
              <div className="pb-2 grid ">
                {/* <h1>{item.id} </h1> */}

                <div className="flex flex-row bg-white pr-10 hover:scale-105 hover:drop-shadow-lg transition-all">
                  {item.image === null ? (
                    ""
                  ) : (
                    <Image
                      src={item.image}
                      alt="image"
                      width={390}
                      height={200}
                      className="object-cover  mr-10"
                    />
                  )}

                  <div className="flex flex-col justify-center py-9 ml-10 ">
                    <div className="my-2">
                      <h4>{item.typeOf}</h4>
                    </div>
                    <div className="my-6 w-[650px]">
                      <h2 className="leading-10 mb-4 text-secondary-500 tracking-tight">
                        {item.mainTopic}
                      </h2>
                      {/* <p className="w-[550px] text-secondary-500 tracking-wide mb-4">
                        {item.details}
                      </p> */}

                      <div className="flex flex-row gap-4 text-primary-500">
                        <h3 className="border-r-4 pr-4 border-secondary-200">
                          {item.date}
                        </h3>
                        <p className="border-r-4 pr-4 border-secondary-200">
                          {item.subDistrict}
                        </p>
                        <p>{item.district}</p>
                      </div>
                    </div>
                    <div>
                      <p className="bg-green-500 w-fit py-2 px-4 rounded-sm text-white tracking-wide ">
                        {item.result}
                      </p>
                    </div>
                  </div>
                  {/* {item.image === null ? " ": <Image src={item.image} width={200} height={200}/>} */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AllListOfPerform;

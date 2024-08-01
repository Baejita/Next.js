import Link from "next/link";

function TitlePerForm() {
  return (
    <div>
      <div className="bg-white px-40 py-20 ">
        <h1 className="text-4xl mb-5 mt-5 text-secondary-400 font-semibold">
          ผลการดำเนินงาน
        </h1>

        <p className="text-primary-500 text-m font-extralight mb-10 w-3/5">
          <span className=" mr-2 inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="#B3C1CD"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </span>
          ประเทศนี้จะเปลี่ยนได้ก็ต่อเมื่อประชาชนเปลี่ยนความคิด ผมและเพื่อนๆ
          สมาชิกของพรรคก้าวไกลทุกคนจะไม่ย่อท้อในการทำงานเพื่อเปลี่ยนประเทศนี้ให้ดีกว่าเดิม
          เพราะพวกเราเชื่อว่าประเทศไทยของเราดีกว่านี้ได้
          ขอให้เชื่อมั่นการทำงานของพรรคก้าวไกล
          <span className=" ml-2 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="#B3C1CD"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </span>
        </p>
        {/* <div className="flex mb-10">
          <h1>{resultFromSapa.date}</h1>
        </div> */}
        <div className="flex justify-center">
          <Link
            href="/performance/allResult"
            className="hover:text-secondary-50  hover:bg-secondary-500 hover:border-b-primary-500 transition-colors px-2 "
          >
            ดูเพิ่มเติม
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TitlePerForm;

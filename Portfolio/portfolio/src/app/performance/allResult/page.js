import Link from "next/link";

function page() {
  
  return (
    <>
      <div>This is all result ผลการดำเนินงาน</div>
      <Link
        href="/performance/allResult/blog"
        className="hover:text-secondary-50  hover:bg-secondary-500 hover:border-b-primary-500 transition-colors"
      >
        ดูรายละเอียด
      </Link>
    </>
  );
}

export default page;

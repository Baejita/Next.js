import Link from "next/link";

function page() {
  const linkMFP = "https://accounts.moveforwardparty.org/account/register";
  return (
    <>
      <div>
        <h1>This is Apply for membership page</h1>
      </div>
      <Link href={linkMFP}>มาร่วมเป็นส่วนหนึ่งกับเรา</Link>
    </>
  );
}

export default page;

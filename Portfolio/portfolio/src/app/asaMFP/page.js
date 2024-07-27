import Link from "next/link";

function page() {
  const ASALink = "https://www.facebook.com/letsgoforwardteam";
  return (
    <>
      <div>This is ASA MFP</div>
      <Link href={ASALink}>มาร่วมเป็นอาสากับเรา</Link>
    </>
  );
}

export default page;

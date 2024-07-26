import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className=" text-primary-600 bg-accent-200">Portfolio</h1>
      <div className=" text-accent-200">
        <Link href="/about">About</Link>
      </div>
    </>
  );
}

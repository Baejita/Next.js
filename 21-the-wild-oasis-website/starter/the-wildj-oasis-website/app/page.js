import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <>
      <Navigation />
      <h1>The Wild Oasis. Welcome to paradise</h1>

      <Link href="/cabins">Exploe luxury cabins</Link>
    </>
  );
}

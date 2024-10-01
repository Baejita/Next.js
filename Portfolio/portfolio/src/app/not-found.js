import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/">Go back to the home page</Link>
    </main>
  );
}

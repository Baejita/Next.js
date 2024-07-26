import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl text-primary-200">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/performance"
            className="hover:text-accent-400 transition-colors"
          >
            ผลการดำเนินงาน
          </Link>
        </li>
        <li>
          <Link
            href="/สมัครสมาชิกพรรค"
            className="hover:text-accent-400 transition-colors"
          >
            สมัครสมาชิกพรรค
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <img className=" h-8 rounded-full  " referrerPolicy="no-referrer" />
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

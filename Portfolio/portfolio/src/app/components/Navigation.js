import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl text-primary-500 border-b-2">
      <ul className="flex gap-10 items-center">
        <li>
          <Link
            href="/"
            className="hover:text-secondary-50  hover:bg-primary-500 hover:border-b-primary-500 transition-colors px-2"
          >
            หน้าหลัก
          </Link>
        </li>
        <li>
          <Link
            href="/performance"
            className="hover:text-secondary-50 hover:bg-primary-500 transition-colors px-2"
          >
            ผลการดำเนินงาน
          </Link>
        </li>

        <li>
          <Link
            href="/applyforMember"
            className="hover:text-secondary-50 hover:bg-primary-500 transition-colors flex items-center gap-4 px-2"
          >
            <span>สมัครสมาชิกพรรค</span>
          </Link>
        </li>

        <li>
          <Link
            href="/asaMFP"
            className="hover:text-secondary-50 hover:bg-primary-500 transition-colors px-2"
          >
            อาสาก้าวไกลอยุธยา
          </Link>
        </li>
      </ul>
    </nav>
  );
}

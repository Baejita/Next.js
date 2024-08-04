"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="z-10 text-xl text-primary-500 border-b-2">
      <ul className="flex gap-10 items-center ">
        <li>
          <Link
            href="/contactUs"
            className={
              path.startsWith("/contactUs")
                ? "hover:text-white hover:bg-primary-500 transition-colors bg-primary-500 px-2  visited:text-white               "
                : "text-primary-500 hover:text-white hover:bg-primary-500 transition-colors px-2                visited:text-primary-500"
            }
          >
            ติดต่อเรา
          </Link>
        </li>
        <li>
          <Link
            href="/performance"
            className={
              path.startsWith("/performance")
                ? "hover:text-white hover:bg-primary-500 transition-colors bg-primary-500 px-2  visited:text-white               "
                : "text-primary-500 hover:text-white hover:bg-primary-500 transition-colors px-2                visited:text-primary-500"
            }
          >
            ผลการดำเนินงาน
          </Link>
        </li>

        <li>
          <Link
            href="/applyforMember"
            className={
              path.startsWith("/applyforMember")
                ? "hover:text-white hover:bg-primary-500 transition-colors bg-primary-500 px-2  visited:text-white               "
                : "text-primary-500 hover:text-white hover:bg-primary-500 transition-colors px-2                visited:text-primary-500"
            }
          >
            <span>สมัครสมาชิกพรรค</span>
          </Link>
        </li>

        <li>
          <Link
            href="/asaMFP"
            className={
              path.startsWith("/asaMFP")
                ? "hover:text-white hover:bg-primary-500 transition-colors bg-primary-500 px-2  visited:text-white               "
                : "text-primary-500 hover:text-white hover:bg-primary-500 transition-colors px-2                visited:text-primary-500"
            }
          >
            อาสาก้าวไกลอยุธยา
          </Link>
        </li>
      </ul>
    </nav>
  );
}

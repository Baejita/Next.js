import Image from "next/image";
import Link from "next/link";
import logo from "../../../src/app/image/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}

      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
      />
      <span className="text-xl font-medium text-primary-500">พรรคก้าวไกล</span>
    </Link>
  );
}

export default Logo;
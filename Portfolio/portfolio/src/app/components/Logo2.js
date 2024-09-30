import Image from "next/image";
import Link from "next/link";
import logo from "../../../src/app/image/logo.png";
function Logo2() {
  return (
    <Link href="/" className="items-center gap-4 z-10 flex  ">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}

      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
      />
      <span className="text-xl font-medium text-primary-500">พรรคประชาชน</span>
    </Link>
  );
}

export default Logo2;

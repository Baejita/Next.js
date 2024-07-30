import Image from "next/image";
import bg from "../../../src/app/image/พี่ปูในสภา.jpeg";
import Link from "next/link";

function HeroSection() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        className="object-cover "
        quality={100}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center mt-[300px]">
        <h1 className="text-8xl text-primary-50  tracking-tight font-normal">
          ชริน วงศ์พันธ์เที่ยง
        </h1>
        <p className=" bg-gradient-to-l from-primary-500 to-tertiary-500 mb-10 text-4xl inline-block  text-transparent bg-clip-text">
          สส.เขต 2 พระนครศรีอยุธยา พรรคก้าวไกล
        </p>
        <div>
          <Link
            href="/contactUs"
            className="bg-gradient-to-r from-primary-500 to-amber-500 px-6 py-4 text-primary-50 text-lg font-medium hover:bg-gradient-to-l
          transition-all inline-block"
          >
            ติดต่อเรา / รับเรื่องร้องเรียน
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;

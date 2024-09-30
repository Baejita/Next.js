import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import bg from "../../../src/app/image/พี่ปูในสภา.jpeg";
function page() {
  const linkMFP =
    "https://accounts.peoplespartythailand.org/account/register?utm_source=landing&utm_medium=web&utm_campaign=moveon";
  return (
    <>
      <div></div>

      <div className="flex justify-center align-middle gap-4 mt-10">
        <div>
          <Card className="py-4 mb-10 hover:scale-105">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-lg uppercase font-bold">
                เวปไซต์ทางการของพรรคประชาชน{" "}
              </p>
              <small className="text-default-500">เข้าชมเวปไซต์</small>
              <h4 className="font-bold text-sm">พรรคประชาชน</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Link href="https://www.peoplespartythailand.org/">
                <Image
                  src={bg}
                  width={400}
                  placeholder="blur"
                  className="object-cover "
                  quality={100}
                  alt="charin wongpantieng"
                />
              </Link>
            </CardBody>
          </Card>

          <div className="text-xl my-2 bg-primary-400 text-primary-50 px-4">
            <Link href={linkMFP}>มาร่วมเป็นส่วนหนึ่งกับเรา</Link>
          </div>
          <div>
            <Card className="py-4 hover:scale-105">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-lg uppercase font-bold">
                  สมัครสมาชิกพรรคประชาชน
                </p>
                <small className="text-default-500">เข้าชมเวปไซต์</small>
                <h4 className="font-bold text-sm">พรรคประชาชน</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Link href={linkMFP}>
                  <Image
                    src={bg}
                    width={400}
                    placeholder="blur"
                    className="object-cover "
                    quality={100}
                    alt="charin wongpantieng"
                  />
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

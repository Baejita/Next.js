import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import bg from "../../../src/app/image/พี่ปูในสภา.jpeg";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import line from "../../../src/app/image/Line.jpg";
import titok from "../../../src/app/image/tiktok.jpg";

const link = [
  "https://www.facebook.com/profile.php?id=100089996004006",
  "https://lin.ee/7U79MeF",
  "https://www.tiktok.com/@poohmfp?_t=8lQoABEA7YA&_r=1",
];

function page() {
  return (
    <>
      <div className="flex justify-center align-middle mx-20 gap-4 mt-10 flex-col sm:flex-row  ">
        <div>
          <Card className="w-[300px] h-[400px] py-4 hover:scale-105 ">
            <Link href="https://www.facebook.com/profile.php?id=100089996004006">
              <Image
                src={bg}
                width={300}
                height={300}
                placeholder="blur"
                className="object-cover "
                quality={100}
                alt="charin wongpantieng"
              />
              <CardHeader className="pb-0 pt-20 px-4 flex-col items-start">
                <small className="text-default-500">กดติดตามได้ที่</small>
                <p className="text-lg uppercase font-bold text-blue-500">
                  Facebook fanpage
                </p>

                <h4 className="font-bold text-sm">
                  Charin Wongpantiang - ชริน วงศ์พันธ์เที่ยง
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Link>
          </Card>
        </div>

        <div>
          <Card className="w-[300px] h-[400px] py-4 hover:scale-105">
            <Link href="https://lin.ee/7U79MeF">
              <Image
                src={line}
                width={280}
                height={300}
                placeholder="blur"
                className="object-cover "
                quality={100}
                alt="charin wongpantieng"
              />
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <small className="text-default-500">กดติดตามได้ที่</small>

                <p className="text-lg uppercase font-bold text-green-600">
                  Line Official
                </p>
                <h4 className="font-bold text-sm">ปู ชริน</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Link>
          </Card>
        </div>

        <div>
          <Card className="py-4 w-[300px] h-[400px] hover:scale-105">
            <Link href="https://www.tiktok.com/@poohmfp?_t=8lQoABEA7YA&_r=1">
              <Image
                src={titok}
                width={300}
                height={200}
                placeholder="blur"
                className="object-cover"
                quality={100}
                alt="charin wongpantieng"
              />
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <small className="text-default-500">กดติดตามได้ที่</small>
                <p className="text-lg uppercase font-bold">Tik tok</p>

                <h4 className="font-bold text-sm">ปู ชริน</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>{" "}
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}

export default page;

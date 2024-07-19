import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_library/data-service";

async function CabinList() {
  noStore();
  // การใส่ตรงนี้ดีกว่า ใส่การตรวจสอบ revalidate ที่หน้าเพจ cabin โดยตรงเพราะตรงนี้เป็ฯ แบบ dynamic ล้วน ๆ
  const cabins = await getCabins();
  if (!cabins.length) return null;

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </div>
  );
}

export default CabinList;

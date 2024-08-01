import Spinner from "@/app/components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-500">Loading ผลการดำเนินงาน...</p>
    </div>
  );
}

import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_library/auth";
import { getBookings } from "@/app/_library/data-service";

export const metadata = {
  title: "Reservations",
};
export default async function Page() {
  // CHANGE
  const session = await auth();

  let bookings = await getBookings(session?.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} key={bookings.div} />
      )}
    </div>
  );
}

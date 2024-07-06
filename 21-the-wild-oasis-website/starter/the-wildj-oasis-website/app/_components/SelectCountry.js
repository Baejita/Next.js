import { getCountries } from "@/app/_library/data-service";

// Async function to fetch countries and build the SelectCountry component
async function SelectCountry({ defaultCountry, name, id, className }) {
  let countries = [];
  try {
    countries = await getCountries(); // Fetch countries asynchronously
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    // Handle error or provide fallback if countries cannot be fetched
  }

  // Find the flag for the default country
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag || "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`} // Encode default value
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;

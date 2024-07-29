function District({ districts }) {
  // const { id, typeOf, date, district, subDistrict, mainTopic } = districts;

  const [{ id, typeOf, date, district, subDistrict, mainTopic }] = districts;
  console.log(district);
  return (
    <>
      <h1>{district}</h1>
    </>
  );
}

export default District;

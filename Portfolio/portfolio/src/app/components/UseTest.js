import { useState } from "react";
import { getTest } from "../services/apiPerformance";

function UseTest() {
  const [data, setData] = useState([]);

  const getDataFormTest = async () => {
    const result = getTest();
    setData(result);
  };

  return { data, getDataFormTest };
}

export default UseTest;

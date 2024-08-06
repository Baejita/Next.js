import { supabase } from "./supabase";

// export async function getPerformance(id) {
//   const { data, error } = await supabase
//     .from("performance")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//   }
//   return data;
// }

export async function getPerformResult() {
  const { data, error } = await supabase
    .from("performResult")
    .select(
      "id,typeOf,date,district,subDistrict,mainTopic,details,image,result"
    )
    .range(100, 120)
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("PerformResult could not be loaded");
  }

  return data;
}

//เลือกแบบตัวเดียว
export async function getResult(id) {
  const { data, error } = await supabase
    .from("performResult")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("PerformResult could not be loaded");
  }

  return data;
}

//เลือกแบบหมด
export async function getSAPA() {
  const { data, error } = await supabase
    .from("SapaAndGummathikarn")
    .select("id,date,mainTopic,details, hightlight,image,district")
    .order("id");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (error) {
    console.error(error);

    throw new Error("SAPA could not be loaded");
  }

  return data;
}

//เลือกแบบตัวเดียว
export async function getSAPAbyID(id) {
  const { data, error } = await supabase
    .from("SapaAndGummathikarn")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("SAPA could not be loaded");
  }

  return data;
}

export async function getTest() {
  const { data, error } = await supabase
    .from("Test")
    .select("id,fullName,number,image")
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Test could not be loaded");
  }

  return data;
}

export async function getFakedData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  try {
    const allPosts = await res.json();
    return allPosts;
  } catch (error) {}
}

// export const getCabins = async function () {
//   const { data, error } = await supabase
//     .from("cabins")
//     .select("id, name, maxCapacity, regularPrice, discount, image")
//     .order("name");

//   await new Promise((res) => setTimeout(res, 1200));

//   if (error) {
//     console.error(error);
//     throw new Error("Cabins could not be loaded");
//   }

//   return data;
// };

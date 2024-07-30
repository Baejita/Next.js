import { supabase } from "./supabase";

export async function getPerformance(id) {
  const { data, error } = await supabase
    .from("performance")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }
  return data;
}

export async function getPerformResult() {
  const { data, error } = await supabase
    .from("performResult")
    .select("id,typeOf,date,district,subDistrict,mainTopic,details,image,result")
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("PerformResult could not be loaded");
  }

  return data;
  
}

export async function getTest() {
  const { data, error } = await supabase
    .from("Test")
    .select("fullName,number,image")
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Test could not be loaded");
  }

  return data;
  
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

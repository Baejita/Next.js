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

export async function getDistrict() {
  const { data, error } = await supabase
    .from("performance")
    .select("id,typeOf,date,district,subDistrict,mainTopic")
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
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

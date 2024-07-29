import { supabase } from "./supabase";

export async function getTest() {
  const { data, error } = await supabase
    .from("Test")
    .select("id,fullName,number");

  if (error) {
    console.error(error);
    throw new Error("Test could not be loaded");
  }

  return data;
}

"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const nationalityValue = formData.get("nationality");

  if (!nationalID || !nationalityValue) {
    throw new Error("Missing national ID or nationality in form data");
  }

  const [nationality, countryFlag] = nationalityValue.split("%");

  let nationalIdRegex = /^[a-zA-Z0-9]{6,12}$/;

  if (!nationalIdRegex.test(nationalID))
    throw new Error("please provide a valid nationalId");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  return data;
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

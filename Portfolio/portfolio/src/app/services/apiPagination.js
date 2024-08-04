import { supabase } from "./supabase";

export default async function getPaginationOfPerform(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { page = 1, perPage = 10 } = req.query;

  const offset = (page - 1) * perPage;
  const { data, error } = await supabase
    .from("getPerformResult")
    .select("*")
    .range(offset, offset + perPage - 1);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}

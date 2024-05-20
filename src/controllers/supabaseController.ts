import { Response, Request } from "express";
import supabase from "../utils/superbase.js";

export const getusers = async (req: Request, res: Response) => {
  const userId = 1;

  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("user_id", userId);

  console.log(data);

  res.json(data);
};

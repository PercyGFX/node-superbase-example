import { Response, Request } from "express"
import supabase from "../utils/superbase.js";

export const getusers = async (req: Request, res: Response) => {

 const {data, error} = await supabase
 .from("user")
 .select()

 console.log(data)

    res.json(data);
};
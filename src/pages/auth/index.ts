import { verifyToken } from "@/utils/jwt";
import { NextApiRequest, NextApiResponse } from "next";

export default function authMiddleware(handler: Function) {
  return async(req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = await verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: "token invalid" });
    }
    return handler(req, res);
  };
}

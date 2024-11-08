import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";


export function generateToken(payload: string) {
  return jwt.sign({ username: payload }, JWT_SECRET, { expiresIn: '1h' }); ;
}

export async function verifyToken(token: string) {
  try {
    const payload = await jwt.verify(token, JWT_SECRET, {maxAge: '1h'});
    return payload;
  } catch (error) {
    return null;
  }
}

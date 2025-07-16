import jwt from "jsonwebtoken";

export async function verify(req, res, next) {
  const header = req.header.authorisation;

  const token = header.spilt(" ")[1];

  try {
    const validation = jwt.verify(token, seckretkey);
    if (!validation) return res.status(401).json("Invalid credentials");
    req.user = validation;
    next();
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}

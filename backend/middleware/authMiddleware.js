import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //cookie-parser allows us to do this in order to get the token
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //we can access this userId because we passed it in as a payload in the generateToken function
      //this basically sets the req.user to the user whos id was found through the decoded.userId. Then, runs next() which moves on to either the next middleware or logic
      //Now, we will be able to have acceess to req.user in any route that we apply this middlleware to
      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };

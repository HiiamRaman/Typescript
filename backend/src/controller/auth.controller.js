import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "all fields are required " });
  }

  

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful",
  });
};

export const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(400).json({
      message: "all fields are required!!!",
    });
  }

  console.log(fullname, email, password);

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  // hash password

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);

  const newUser = await User.create({
    fullname,
    email,
    password: hashedPassword,
  });

  return res.status(200).json({
    message: "Register endpoint reached",
  });
};

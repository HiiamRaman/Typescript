import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateAccessAndRefreshTokens } from "../service/auth.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required " });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id,
    );
    const options = {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    };

    res.cookie("refreshToken", refreshToken, options);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
    });
  } catch (error) {
    console.log("Error", error);
    throw Error(500, "Failed To login");
  }
};

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: "all fields are required!!!",
    });
  }

  console.log(fullName, email, password);

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  // hash password

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);

  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  return res.status(200).json({
    message: "Register endpoint reached",
  });
};

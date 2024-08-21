import User from "../moduls/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  const { userName, emaile, password, addrase } = req.body;
  const existingUser = await User.findOne({ emaile });
  if (!existingUser) {
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        userName,
        emaile,
        password: hashPassword,
        addrase,
      });
      res.json(user);
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  } else {
    res.json("user allready exisites");
  }
};

export const logIn = async (req, res) => {
  const { password, emaile } = req.body;
  const user = await User.findOne({ emaile });
  if (user) {
    try {
      const passwordMuched = await bcrypt.compare(password, user.password);
      if (passwordMuched) {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );

        res.status(200).json({ user, accessToken });
      } else {
        res.json("credential error");
      }
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  } else {
    res.json("user does not exist ");
  }
};

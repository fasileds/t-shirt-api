import User from "../moduls/User.js";

export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hash(req.body.password, 10).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const delateUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("user delated sussfully");
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const getUserStatuses = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

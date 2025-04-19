import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

// posting a single user
userRouter.post("/", async (req, res) => {
  try {
    const user = req.body;

    let salt = await bcrypt.genSalt(10);
    let hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    await userModel.create(user);
    res.status(201).send({ message: "User Created" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Error Creating User" });
  }
});

// getting all users
userRouter.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Error Fetching Users" });
  }
});

// getting a single user
userRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }

    res.status(200).send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send({ message: "Error Fetching User" });
  }
});

// updating a single user
userRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }
    await user.updateOne(updatedUser);
    res.status(200).send({ message: "User Updated", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send({ message: "Error Updating User" });
  }
});

// deleting a single user
userRouter.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }
    await user.deleteOne();
    res.status(200).send({ message: "User Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error Deleting User" });
  }
});

export default userRouter;
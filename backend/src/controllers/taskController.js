import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      user: req.userId,
    });

    return res.json(task);
  } catch (err) {
    return res.status(500).json({ message: "Failed to create task" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

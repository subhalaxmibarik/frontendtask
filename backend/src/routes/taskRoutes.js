import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import { createTask, getTasks } from "../controllers/taskController.js";

const router = Router();

router.post("/", auth, createTask);
router.get("/", auth, getTasks);

export default router;

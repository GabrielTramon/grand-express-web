import { Router } from "express";
import { CreateUserController } from "../useCases/create/createUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
userRoutes.post("/create", (req, res) => {
  createUserController.handle(req, res);
});

export { userRoutes };
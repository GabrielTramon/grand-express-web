import "reflect-metadata";
import express from "express";
import cors from "cors";
import { userRoutes } from "./modules/users/routes/userRoutes";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/user", userRoutes)


app.listen(3001, () => console.log("Server running at http://localhost:3001"));
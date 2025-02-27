import { Router } from "express";
import indexController from "../controllers/indexController.js";

const index = Router();

index.get("/", indexController);

export default index;

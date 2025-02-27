import { Router } from "express";
import newMsgController from "../controllers/newMsgController.js";

const newMsg = Router();

newMsg.get("/", newMsgController);

export default newMsg;

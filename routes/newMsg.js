import { Router } from "express";
import newMsgController from "../controllers/newMsgController.js";
import postMsg from "../controllers/postMsg.js";

const newMsg = Router();

newMsg.get("/", newMsgController);
newMsg.post("/", (req, res, next) => {
	console.log("test");
});

export default newMsg;

import { Router } from "express";
import newMsgController from "../controllers/newMsgController.js";
import postMsg from "../controllers/postMsg.js";

const newMsg = Router();

newMsg.get("/", newMsgController);
newMsg.post("/", (req, res) => {
	const msg = req.body.msg;
	res.send(msg);
	console.log(msg);
});

export default newMsg;

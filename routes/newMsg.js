import { Router } from "express";

const newMsg = Router();

newMsg.get("/", (req, res) => {
	res.send("this is the new message page");
});

export default newMsg;

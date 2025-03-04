import { Router } from "express";
import {
	getNewMessage,
	postNewMessage,
	getMessageDetails,
} from "../controllers/messagesController.js";

const newMsg = Router();

newMsg.get("/", getNewMessage);

newMsg.post("/", postNewMessage);

newMsg.get("/:id", getMessageDetails);

export default newMsg;

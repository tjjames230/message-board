import { Router } from "express";
import {
	getNewMessage,
	postNewMessage,
} from "../controllers/messagesController.js";

const newMsg = Router();

newMsg.get("/", getNewMessage);

newMsg.post("/", postNewMessage);

export default newMsg;

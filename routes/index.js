import { Router } from "express";

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

const index = Router();

index.get("/", (req, res) => res.send("this is the home page"));

export default index;

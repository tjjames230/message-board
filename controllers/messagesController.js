import messages from "../db.js";

const getNewMessage = (req, res) => {
	res.render("newMessage");
};

const postNewMessage = (req, res) => {
	const { text, user } = req.body;

	if (!text || !user) {
		res.status(422);
		res.send("please complete both fields");
		return;
	}

	messages.push({
		id: messages.length + 1,
		text: text,
		user: user,
		added: new Date(),
	});

	res.redirect("/");
};

const getMessageDetails = (req, res) => {
	res.render("messageDetails");
};

export { getNewMessage, postNewMessage, getMessageDetails };

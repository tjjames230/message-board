import messages from "../db.js";

const getNewMessage = (req, res) => {
	res.render("newMessage");
};

const postNewMessage = (req, res) => {
	const { text, user } = req.body;
	messages.push({
		text: text,
		user: user,
		added: new Date(),
	});
	res.redirect("/");
};

export { getNewMessage, postNewMessage };

import messages from "../db.js";

const getNewMessage = (req, res) => {
	res.render("newMessage");
};

const postNewMessage = (req, res) => {
	const { msg } = req.body;
	messages.push({
		text: msg,
		user: "Charles",
		added: new Date(),
	});
	res.redirect("/");
};

export { getNewMessage, postNewMessage };

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

const indexController = (req, res) => {
	res.render("index", { title: "mini messageboard", messages: messages });
};

export default indexController;

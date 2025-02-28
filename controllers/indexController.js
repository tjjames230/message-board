import messages from "../db.js";

const indexController = (req, res) => {
	res.render("index", { title: "mini messageboard", messages: messages });
};

export default indexController;

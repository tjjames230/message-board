const logger = (req, res, next) => {
	console.log(`Request Method: ${req.method}\nRequest URL: ${req.url}`);
	console.log(req.body);
	next();
};

export default logger;

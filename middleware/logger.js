const logger = (req, res, next) => {
	console.log(`Request Method: ${req.method}\nRequest URL: ${req.url}`);
	next();
};

export default logger;

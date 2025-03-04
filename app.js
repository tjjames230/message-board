import express from "express";
import path from "path";
import url from "url";
import index from "./routes/index.js";
import logger from "./middleware/logger.js";
import newMsg from "./routes/newMsg.js";

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

/*	answer from stackoverflow (https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded) about what express.json() and express.urlencoded are used for and why they are needed:

	Here is the explanation that should clear doubts on express.json() and express.urlencoded() and the use of body-parser. It took me some time to figure this out.

	What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

	When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

	You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

	You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

	Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

	a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

	b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", logger, index);

app.use("/new", newMsg);

app.listen(PORT, () => {
	console.log(`listening on port http://localhost:${PORT}/`);
});

import express from "express";
import path from "path";
import url from "url";
import index from "./routes/index.js";
import logger from "./middleware/logger.js";
import newMsg from "./routes/newMsg.js";
import errorHandler from "./errors/errorHandler.js";

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger);

app.use("/", index);

app.use("/new", newMsg);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

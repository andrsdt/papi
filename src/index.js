import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import api from "./api";
import config from "./config.json";
import { generatePassword } from "./utils/passwordGenerator";

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

// 3rd party middleware
app.use(
	cors({
		exposedHeaders: config.corsHeaders,
	})
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api router
app.use("/api", api({ config }));

api.get("/", (req, res) => res.send(generatePassword(req)));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;

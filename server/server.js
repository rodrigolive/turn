const express = require("express"); //your original BE server

const config = require("./config").load();

const PORT = config.port;

const app = express();

const webpackBuilder = require("./webpack.js");
webpackBuilder.setupHMR(app);

console.log("Turn Server listening at %s%s", PORT, String.fromCharCode(7));

app.listen(PORT);

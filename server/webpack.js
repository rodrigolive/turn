const path = require("path");
const debug = require("debug")("turn:webpack");

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const setupHMR = app => {
    const webpackConfig = require("./webpack.config.js");
    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );

    app.use(webpackHotMiddleware(compiler));

    app.get("*", (req, res, next) => {
        // const filename = path.join(DIST_DIR, "index.html");
        const filename = path.join(compiler.outputPath, "index.html");
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set("content-type", "text/html");
            res.send(result);
            res.end();
        });
    });
    debug("Output path", compiler.outputPath);
};

module.exports = { setupHMR };

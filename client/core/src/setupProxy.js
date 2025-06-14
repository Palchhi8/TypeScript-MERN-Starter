const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(createProxyMiddleware("/api", { 
        target: "http://localhost:3001/",
        headers: {
            "Connection": "keep-alive"
        }
    }));
    app.use(createProxyMiddleware("/auth", { target: "http://localhost:3001/" }));
    app.use(createProxyMiddleware("/oauth2", { target: "http://localhost:3001/" }));
};
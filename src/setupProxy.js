const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/**",
    createProxyMiddleware({
      changeOrigin: true,
      target: "https://opentdb.com/",
      pathRewrite: (path) => path.replace(/^\/api/, ""),
      secure: false,
    })
  );
};
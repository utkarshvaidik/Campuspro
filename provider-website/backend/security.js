// Backend security के लिए - Helmet, Rate Limiter, CORS
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

function setupSecurity(app) {
  app.use(helmet());
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "बहुत ज़्यादा requests! 15 मिनट बाद ट्राय करें।",
  });
  app.use("/api/", limiter);
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}

module.exports = setupSecurity;


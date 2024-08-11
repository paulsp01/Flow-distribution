const express = require("express");
const { metricsMiddleware, metricsEndpoint } = require("./middlewares/metrics");
const rateLimiter = require("./middlewares/rateLimiter");
const astrologerRoutes = require("./routes/astrologerRoutes");
const app = express();

app.use(express.json());

// Apply rate limiting middleware
app.use(rateLimiter);

// Apply metrics middleware
app.use(metricsMiddleware);

app.use("/api", astrologerRoutes);

// Metrics endpoint
app.get("/metrics", metricsEndpoint);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

const express = require("express");
const astrologerRoutes = require("./routes/astrologerRoutes");

const app = express();
app.use(express.json());

app.use("/api", astrologerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

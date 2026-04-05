const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.listen(process.env.PORT, () => console.log("Server running"));

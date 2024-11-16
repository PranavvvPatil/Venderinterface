const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');
const apiRouter = require("./routes/api.route");
const authRoutes = require("./routes/auth");
const connectDB = require("./db/database");
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    credentials: true, // Allow cookies to be sent with requests
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

//api route navigation to handle all api requests
app.use("/api", apiRouter);
app.use("/api/auth", authRoutes);
app.get("/check", (req, res) => {
 res.send("Server is Healthy");
});

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const documentRoutes = require("./routes/documents");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
// MongoDB connection
mongoose.connect("mongodb+srv://dms_user:dms_user@cluster0.x9b8g1d.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));


app.get("/", (req, res) => {
  res.send("DMS Backend Running");
});

// USE PORT 5000 CONSISTENTLY
app.listen(5001, () => {
  console.log("Server running on port 5001");
});

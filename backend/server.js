const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGODB_URL;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success!");
});

app.use('/api/auth', require('./routes/authenticationRoutes'));

//Chat Router
app.use("/api/messages", require("./routes/messageRoutes"));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`server running on ${port}`)
})



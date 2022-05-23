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

const port = process.env.PORT || 5000;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success!");
});

//Evaluated docs Router
const evaluatedDocRouter = require("./routes/EvaluatedDocs");
app.use("/evaluateDocs", evaluatedDocRouter);
//Evaluated Presentations Router
const evaluatedPreRouter = require("./routes/EvaluatedPres");
app.use("/EvaluatedPres", evaluatedPreRouter);
//Evaluated Topics Router
const evaluatedTopicsRouter = require("./routes/EvaluatedTopics");
app.use("/EvaluateTopics", evaluatedTopicsRouter);

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});



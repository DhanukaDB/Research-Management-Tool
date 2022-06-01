const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
const fileRoute = require('./routes/markinguploads')
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


//give feedback for the topics

app.use("/api/sendFeedback",require ("./routes/evaluationTopics"));



//Group Router
app.use("/api/group", require("./routes/groups"));

//Evaluated docs Router
app.use("/api/evaluateDocs", require("./routes/evaluateDocs"));

//Evaluated presentations Router
app.use("/api/evaluatePres", require("./routes/evaluatePresentations"));

//marking schemes uploading and downloading
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});


const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`server running on ${port}`)
})



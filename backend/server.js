const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
const fileRoute = require('./routes/markinguploads')
require("dotenv").config();
const Chat = require('./modules/chat/chat');

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


// const authRoutes = require("./routes/authenticationRoutes");
// app.use("/auth", authRoutes);

app.use('/api/auth', require('./routes/authenticationRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api/staff', require('./routes/staffRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

//give feedback for the topics
app.use("/api/sendFeedback", require("./routes/topicEvaluateRoutes"));
//Group Router
app.use("/api/group", require("./routes/groupRoutes"));

//Evaluated docs Router
app.use("/api/evaluateDocs", require("./routes/docsEvaluateRoutes"));

//Evaluated presentations Router
app.use("/api/evaluatePres", require("./routes/presentationEvaRoutes"));

//marking schemes uploading and downloading
// app.use(express.static(path.join(__dirname, '..', 'build')));
// app.use(fileRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

//student upload
// app.use('/api/studentUpload', require('./routes/studentUpload'));
app.get('*', (req, res) => {
  res.sendstudentUpload(path.join(__dirname, '..', 'build', 'index.html'));
});



app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});

//Chat
// new Chat(server).init();
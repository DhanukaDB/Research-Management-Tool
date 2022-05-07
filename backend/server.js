const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});
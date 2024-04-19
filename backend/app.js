const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const audioRouter = require("./routes/audioRouter");

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use('/audio', audioRouter);

const uri = "mongodb+srv://devjyoti598:YsDAY9td8AnzdqS6@record.4hxzkaj.mongodb.net/?retryWrites=true&w=majority&appName=Record";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
let db;
mongoose.connect(uri, clientOptions)
  .then((connection) => {
    console.log("Successfully connected to MongoDB!");
    db = connection.connection.db;
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

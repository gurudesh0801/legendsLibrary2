const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const databaseName = "legendslibrary";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to the MongoDB database:", err);
    return;
  }
  console.log("Connected to the MongoDB database.");
  const db = client.db(databaseName);
});

module.exports = client;

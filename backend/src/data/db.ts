import { MongoClient } from "mongodb";
const DB_NAME = "Poodi-Sabji-dot-com";
let uri = `mongodb://0.0.0.0:27017/${DB_NAME}`;
if (process.env.NODE_ENV != "development" || true) {
  uri =
    "mongodb+srv://suditya:Suditya%40123@poodisabjidotcom.jjmenhc.mongodb.net/PoodiSabjiDotCom?retryWrites=true&w=majority&appName=PoodiSabjiDotCom";
}
// console.log(uri);
const client = new MongoClient(
  "mongodb+srv://suditya:Suditya%40123@poodisabjidotcom.jjmenhc.mongodb.net/PoodiSabjiDotCom?retryWrites=true&w=majority&appName=PoodiSabjiDotCom",
  {}
);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

connectDB();

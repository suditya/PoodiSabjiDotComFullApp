"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const DB_NAME = "Poodi-Sabji-dot-com";
// let uri = `mongodb://0.0.0.0:27017/${DB_NAME}`;
// if (process.env.NODE_ENV != "development" || true) {
//   uri =
//     "mongodb+srv://suditya:Suditya%40123@poodisabjidotcom.jjmenhc.mongodb.net/PoodiSabjiDotCom?retryWrites=true&w=majority&appName=PoodiSabjiDotCom";
// }
// console.log(uri);
const client = new mongodb_1.MongoClient("mongodb+srv://suditya:Suditya%40123@poodisabjidotcom.jjmenhc.mongodb.net/PoodiSabjiDotCom?retryWrites=true&w=majority&appName=PoodiSabjiDotCom", {});
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to MongoDB");
        }
        catch (err) {
            console.error(err);
        }
    });
}
connectDB();

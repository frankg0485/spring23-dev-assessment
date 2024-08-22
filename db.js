import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.DATABASE_URI);

async function connect() {
    try {
        await client.connect();
        const mgmtDB = client.db("mgmtDB");
        mgmtDB.createCollection("users");
        mgmtDB.createCollection("animals");
        mgmtDB.createCollection("trainingLogs");
    } catch (e) {
       console.log(e);
    }
}

connect();

export default client;
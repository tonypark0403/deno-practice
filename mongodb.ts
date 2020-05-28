import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { Constants } from './config.ts'
const client = new MongoClient();
client.connectWithUri(Constants.MONGODB_URL);

const db = client.database('notes');

export default db;
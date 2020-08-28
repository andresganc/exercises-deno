import { App } from './src/app';
import "https://deno.land/x/dotenv/load";
import { DatabaseConnection } from "./src/config/db";
const PORT =  Deno.env.get("PORT") || 8080;
const app = new App(PORT);


const dbName = Deno.env.get("DB_NAME") || "deno_demo";
const dbHostUrl = Deno.env.get("DB_HOST_URL") || "mongodb://localhost:27017";
const db = new DatabaseConnection(dbName, dbHostUrl);
db.connect();
app.listen();
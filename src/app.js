import express from "express";
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await connectDatabase();

conexao.on("error", err => console.error(err));
conexao.once("open", () => {
    console.log("Database connected successfully");
})

const app = express();
routes(app);

export default app;

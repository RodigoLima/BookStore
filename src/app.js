 
import express from "express";
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/ErrorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const conexao = await connectDatabase();

conexao.on("error", (err) => console.error(err));
conexao.once("open", () => {
  console.log("Database connected successfully");
});

const app = express();

routes(app);
app.use(notFoundHandler)
app.use(errorHandler)
export default app;

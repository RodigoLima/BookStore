import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:3000/");
});

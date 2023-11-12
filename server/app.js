const express =  require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const apiKey = process.env.API_KEY;

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});

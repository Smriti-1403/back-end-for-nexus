const express = require("express");
const app = express();
const conncetDatabase = require("./db/connect");
const PORT = process.env.PORT || 5000;
const smartContractRoots = require("./routes/smartContracts");

//connecting to server
app.get("/", (req, res) => {
  res.send("Server is Live");
});

//middle ware or to set router
app.use("/api/smartConstracts", smartContractRoots);

const start = async () => {
  try {
    await conncetDatabase();
    app.listen(PORT, () => {
      console.log(`${PORT} Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

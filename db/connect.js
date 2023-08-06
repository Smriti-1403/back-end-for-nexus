const mongoose = require("mongoose");
const { options } = require("../routes/smartContracts");

const uri =
  "mongodb+srv://clickswarnendu123:pHsKM5Rwyr1iVHqs@cluster0.dqfpr5x.mongodb.net/";
//pHsKM5Rwyr1iVHqs
const conncetDatabase = () => {
    console.log("db connected") 
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


module.exports = conncetDatabase;
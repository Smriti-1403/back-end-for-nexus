const Product = require("../models/product");
// const productPage = require("../products.html");

const generateHTML = (data) => {
  return productPage;
};

const getAllSmartContracts = async (req, res) => {
  try {
    const myData = await Product.find(req.query);
    // const modifiedHTML = generateHTML(myData); // Modify this to handle all data
    res.status(200).send(myData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllSmartContractsTesting = async (req, res) => {
  res.status(200).json(myData);
};

module.exports = { getAllSmartContracts, getAllSmartContractsTesting };

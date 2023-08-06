const Product = require("../models/product");
// const productPage = require("../products.html");

const generateHTML = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="smartContract" id="contractContainer">
        <p id="name" >${data[0].name}</p>
        <p id="description">${data[0].desc}</p>
        <p id="code" style="color: white; background-color:black;  filter: blur(5px)">${data[0].code}</p>
        <p id="code">${data[0].price}</p>
        <button><a href="https://www.google.com/">Go to google</a></button>
      </div>
      <script>
      
      </script>
    </body>
  </html>`
};

const getAllSmartContracts = async (req, res) => {
  try {
    const myData = await Product.find(req.query);
    const modifiedHTML = generateHTML(myData); // Modify this to handle all data
    res.status(200).send(modifiedHTML);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllSmartContractsTesting = async (req, res) => {
  res.status(200).json(myData);
};

module.exports = { getAllSmartContracts, getAllSmartContractsTesting };

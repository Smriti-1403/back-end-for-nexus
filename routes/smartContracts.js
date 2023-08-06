const express = require("express");
const router = express.Router();

const {
  getAllSmartContracts,
  getAllSmartContractsTesting,
} = require("../controllers/smartContracts");

//defing roots
router.route("/").get(getAllSmartContracts);
router.route("/testing").get(getAllSmartContractsTesting);

module.exports = router;

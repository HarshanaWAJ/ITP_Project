const express = require("express");
const router = express.Router();
const payment=  require('../model/payment');
const paycontroller = require("../controller/payment-controller");

router.get("/", paycontroller.getAllpayment);//this route will provide all of the payments
router.post("/", paycontroller.addpayment);// add item to the database
router.get("/:id", paycontroller.getById);//print using id
router.put("/:id", paycontroller.updatepayment);//update the invoice
router.delete("/:id", paycontroller.deletepayment); //delete the details of invoice    

module.exports = router;
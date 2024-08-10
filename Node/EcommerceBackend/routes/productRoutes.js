const express=require("express");
const {getProducts,getAllProducts,addProduct,updateProduct,deleteProduct} = require("../controller/productController");
const {sanityMiddleWare} = require("../middleware/sanityOfPayload");

const productRouter=express.Router();

productRouter.route("/:id")
    .patch(updateProduct)
    .delete(deleteProduct)
productRouter.route("/")
    .post(sanityMiddleWare,addProduct)
    .get(getAllProducts)
productRouter.route("/:productid")    
    .get(getProducts)

module.exports={productRouter}
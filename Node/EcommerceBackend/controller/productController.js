
const {ProductModel}=require("../model/productModel") 

const {getResourceById,updateResource,deleteResource,getAllResources,createResource}=require("../utils/resourceFactory");
const getProducts = getResourceById(ProductModel);

const getAllProducts = getAllResources(ProductModel);

const addProduct=createResource(ProductModel);

const updateProduct=updateResource(ProductModel);

const deleteProduct=deleteResource(ProductModel);

module.exports = {
    getAllProducts,
    getProducts,
    updateProduct,
    deleteProduct,
    addProduct
};
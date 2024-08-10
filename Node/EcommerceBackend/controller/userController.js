
const { UserModel } = require("../model/userModel");

const {getResourceById,updateResource,deleteResource,getAllResources,createResource}=require("../utils/resourceFactory");
const getUsers = getResourceById(UserModel);

const getAllUsers = getAllResources(UserModel);

const addUser=createResource(UserModel);

const updateUser=updateResource(UserModel);

const deleteUser=deleteResource(UserModel);

module.exports = {
    getAllUsers,
    getUsers,
    updateUser,
    deleteUser,
    addUser
};
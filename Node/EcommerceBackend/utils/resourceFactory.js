
const createResource= function(modelName){
    return async (req,res)=>{
        try{
            console.log(req.body);
            console.log("entered add product");
            const newData=new modelName(req.body);
            const data=await newData.save();
            if(data)
            {
                res.status(200).json({
                "message": "Data added successfully",
                "data": data
                })
            }
            else{
                res.status(200).json({
                    "message": "Data cannot be added",
                    "data": data
                })
            }
            }
            catch(err){
                console.log("caught");
                res.status(500).json({
                "message": err.message
            })
        }
        }
    
}

const getAllResources= function(modelName){
    return async (req,res)=>{
    try {
        // let { productid } = req.params; 
        // let product = productdb.find((obj) => {
        //     return obj.id == productid;
        // });
        
        let allData=await modelName.find();
      
        // let allproducts=await productModel.findOne(req.body);// gives the first result
         
        if (!allData) {
            console.log("3")
            res.status(400).json({
                message: "Data not present"
            });
        } else {
            console.log("4")
            res.status(200).json({
                message: `Showing all Data`,
                data: allData 
            });
        }
        console.log("5")
    } catch (err) {
        console.log("entered catch data")
        res.status(500).json({
            message: err.message
        });
    }
    }
}

const deleteResource= function(modelName){
    return async (req,res)=>{
        try{
            const {id}=req.params;
            console.log(req.params);
            const deletedData=await modelName.findOneAndDelete({_id:id})
            if(!deletedData){
                res.status(400).json({
                    message: "Data not present" 
                })
            }
            else{
                // productdb.splice(idx,1);
                // fs.writeFileSync("./dev-data.json",JSON.stringify(productdb));
                res.status(200).json({
                    "message": `Deleted data with ${id} successfully`
                })
            }
        }
        catch(err){
            res.status(500).json({
                "message": "Unable to delete Data"
            })
        }
    }
}

const updateResource= function(modelName){
    return async (req,res)=>{
        try{
            const {id}=req.params;
            const dataToBeUpdated=req.body;
            const updatedData= await modelName.findByIdAndUpdate(id,dataToBeUpdated,{returnDocument:"after",upsert:true});//upsert is for if there is not product with product id it will create that product
            if(updatedData){
                res.status(200).json({
                    message:"Data updated succesfully",
                    data: updatedData
                })
            }
            else{
                res.status(500).json({
                    message:"Data can not be updated",
                })
            }
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
    }
}

const getResourceById= function(modelName){
    return async (req,res)=>{
        try {
            console.log("1")
            let { id } = req.params; 
            console.log(id);
            // let product = productdb.find((obj) => {
            //     return obj.id == productid;
            // });
            let data=await modelName.findById(id);
            // delete data.password;// This can also be done but we have done hiding password in prehook of usermodel
            console.log("2")
            if (!data) {
                console.log("3")
                res.status(400).json({
                    message: "data not present"
                });
            } else {
                console.log("4")
                res.status(200).json({
                    message: `Showing data with id ${id}`,
                    "data": data
                });
            }
        } catch (err) {
            console.log("Catch")
            res.status(500).json({
                message: err.message
            });
        }
    }
}

module.exports= {
    getResourceById,
    updateResource,
    deleteResource,
    getAllResources,
    createResource
}
// const createUser=createFactory(UserModel);
// const createProduct=createFactory(ProductModel);

// createUser();
// createProduct();
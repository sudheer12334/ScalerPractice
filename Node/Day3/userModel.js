const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: function(){
            return this.password===this.confirmPassword;
        }
    },
    // createdAt:{
    //     type: Date,
    //     default: Date.now
    // },
    role:{
        type: String,
        default: "user"

    },
},{ timestamps: true})//we can write this instead of writing createdAt


userSchema.pre("save",function(next){
    console.log("prehook called");
    this.confirmPassword= undefined;
    next();
})
const UserModel = mongoose.model("UserModel",userSchema);
module.exports = {
    UserModel,
};
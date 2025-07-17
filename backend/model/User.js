import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    name:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    channel:{type:Array, required:true, default:[]},
});

const User=mongoose.model("User",userSchema);

export default User;
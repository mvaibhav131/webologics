import mongoose from "mongoose";
const Schema=mongoose.Schema;

const personSchema= new Schema({
    name:{type:String, require:true},
    age:{type:Number,require:true},
    email:{type:String,require:true,unique:[true,"email must be unique"]},
});

export default mongoose.model("Person",personSchema);
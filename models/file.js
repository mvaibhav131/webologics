import mongoose from "mongoose";
const Schema=mongoose.Schema;

const fileSchema= new Schema({
    id:{type:String, require:true},
});

export default mongoose.model("File",fileSchema);
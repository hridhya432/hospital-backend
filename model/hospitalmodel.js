const mongoose=require("mongoose")

const hospitalSchema=new mongoose.Schema(
    {
        name:String,
        phoneno:String,
        desease:String,
        address:String,
        

    }
)
module.exports=mongoose.model("hospital",hospitalSchema)

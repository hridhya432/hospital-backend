const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const hospitalrouter=require("./controllers/hospitalrouter")

const app =express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://hridhya432:hridhya432@cluster0.qcjz971.mongodb.net/hospitalDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/hospital",hospitalrouter)

app.listen(3005,()=>{
    console.log("server running")
    
})
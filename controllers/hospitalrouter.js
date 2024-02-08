const express=require("express")
const router=express.Router()
const hospitalmodel = require("../model/hospitalmodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let hospital=new hospitalmodel(data)
    let result=await hospital.save()
    res.json({
        status:"success"
    })

})
router.get("/viewall",async(req,res)=>{
    let data=await hospitalmodel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await hospitalmodel.find(input)
    res.json(data)
})
module.exports=router
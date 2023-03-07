const express=require("express");
const Service = require("../models/service - Copie");



const serviceRouter =express.Router();

//add service
serviceRouter.post("/add",async(req, res)=>{
    try {
        let newservice=new Service(req.body);
        let result=await newservice.save();
        res.send({service:result,msj:"service is added"});

    } catch (error) {
        console.log(error);
        
    }
})

//get all service

serviceRouter.get("/",async(req, res)=>{
    try {
        let result=await Service.find();
        res.send({service:result,msj:"all service"});

    } catch (error) {
        console.log(error);
        
    }
})
//get service by id
serviceRouter.get("/:id",async(req, res)=>{
    try {
        let result=await Service.findById(req.params.id);
        res.send({service:result,msj:"one service"});

    } catch (error) {
        console.log(error);
        
    }
})




//delete service
serviceRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await Service.findByIdAndDelete(req.params.id);
        res.send({msj:"service is delete"});

    } catch (error) {
        console.log(error);
        
    }
})
//update service

serviceRouter.put("/:id",async(req, res)=>{
    try {
        let result=await Service.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({service:"result" ,msj:"service is updated"});

    } catch (error) {
        console.log(error);
        
    }
})
module.exports=serviceRouter;
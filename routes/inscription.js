const express=require("express");
const Inscription = require("../models/inscription");



const inscriptionRouter =express.Router();

//add Inscription
inscriptionRouter.post("/add",async(req, res)=>{
    try {
        let newinscription=new Inscription(req.body);
        let result=await newinscription.save();
        res.send({inscription:result,msj:"parent is added"});

    } catch (error) {
        console.log(error);
        
    }
})

//get all Inscription

inscriptionRouter.get("/",async(req, res)=>{
    try {
        let result=await Inscription.find();
        res.send({inscription:result,msj:"all inscription"});

    } catch (error) {
        console.log(error);
        
    }
})
//get Inscription by id
inscriptionRouter.get("/:id",async(req, res)=>{
    try {
        let result=await Inscription.findById(req.params.id);
        res.send({inscription:result,msj:"one inscription"});

    } catch (error) {
        console.log(error);
        
    }
})




//delete Parent
inscriptionRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await Inscription.findByIdAndDelete(req.params.id);
        res.send({msj:"inscription is delete"});

    } catch (error) {
        console.log(error);
        
    }
})
//update inscription

inscriptionRouter.put("/:id",async(req, res)=>{
    try {
        let result=await Inscription.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({inscription:"result" ,msj:"inscription is updated"});

    } catch (error) {
        console.log(error);
        
    }
})
module.exports=inscriptionRouter;
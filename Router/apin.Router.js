const express = require('express');
const {ApinModel} = require("../Model/apin.Model");


const apiRouter = express.Router();

apiRouter.get("/",async(req,res) =>{
try{
    const query = {};
 
    // Apply filtering by specialization
    if (req.query.specialization) {
      query.specialization = req.query.specialization;
    }

    // Apply searching by doctor name
    if (req.query.search) {
      query.name = new RegExp(req.query.search, 'i');
    }

    // Apply sorting by date (based on the posted date)
    const sort = {};
    if (req.query.sortByDate) {
      sort.date = req.query.sortByDate === 'asc' ? 1 : -1;
    }

    // Apply pagination (4 Cards per page)
    const limit = 4;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const data = await ApinModel.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    res.json(data)
}
catch(e){
    res.send({Error:e.message})
}
})

apiRouter.post("/",async(req,res)=>{
    const payload = req.body
    try{
        const data = new ApinModel(payload)
        await data.save()
        res.send({Message:"Data Sucessfully Added"})
    }
    catch(e){
        res.send({Error:e.message})
    }
})

apiRouter.patch("/:id",async(req,res) => {
    const id = req.params.id;
    const payload = req.body
    try{
       await ApinModel.findByIdAndUpdate({_id:id},payload);
        res.send({Message : "Updated"})
    }
    catch(err){
        res.send({Message:err.message})
    }
})


module.exports= {apiRouter}
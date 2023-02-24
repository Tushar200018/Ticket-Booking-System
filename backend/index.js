const express=require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const {MONGODB_ATLAS_URL} = process.env

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());


mongoose.connect(MONGODB_ATLAS_URL)
.then(()=>console.log("Databse connected Successfully"))
.catch((e)=>console.log(`Error in Databse Connection ${e}`))

const showsSchema = mongoose.Schema({
    name: String,
    occupiedIndices: Object
})

const Show = mongoose.model("show",showsSchema);

app.get("/shows",(req,res)=>{
  Show.find((err,result)=>{
    if(err){
        res.send(Error(err));
    }
    else{
        res.send(result);
    }
  })
})

app.post("/show/:name",(req,res)=>{
    const show = req.params.name;
    const selectedSeats = req.body;
    if(Object.keys(selectedSeats).length==0){
        res.send({msg:"The number of seats selected cannot be equal to 0.", status: "error"});
    }
    else{

        Show.findOne({name:show},(err,found)=>{
            if(err) res.send(Error(err))
            else{
                if(found){
                    const totalSeats = {...found.occupiedIndices,...selectedSeats};
                    Show.findOneAndUpdate({name:show},{occupiedIndices:totalSeats},(err,foundShow)=>{
                        if(err) res.send(Error(err))
                        else{
                            if(foundShow){
                                res.send({msg:"Tickets Booked Successfully", status: "success"});
                            }else{
                                res.send({msg:"Sorry the show is no longer available", status: "error"});
                            }
                        }
                    })
                }
                else{
                    res.send({msg:"Sorry the show is no longer available", status: "error"});
                }
            }
        })

        
    }
})

app.listen(PORT, () => {
  console.log(`Server running`)
})
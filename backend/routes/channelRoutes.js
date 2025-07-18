import express from "express"
import Channel from "../model/Channel"

const router =express.Router();

router.post("/channels",async (req,res)=>{

    const{ChannelName,description, userId}=req.body;

    if(!ChannelName|| !description|| !userId) return res.status(400).send("All fields are required");
try{

    const channel=await Channel.create({

 ChannelName:ChannelName,
    description:description,
    userId:userId

    })

    if(!channel) return res.status(500).json({message:"Channel not created"});
    res.status(200).json(channel);
   
}
catch(error){

    console.log("the error is ",error);
    res.status(500).json({message:"Server during channel creation"});
}

});

router.get("channel/:id",async (req,res)=>{

    try{

        const channel=await Channel.findById(req.params.id).populate("channel","ChannelName","decription");

        if(!channel) return res.status(404).json({message:"Channel not found"});

        res.status(200).json(channel);
    }
catch(err){

    console.log("the error is ",err);
    res.status(404).json("error during channel find");
}
});

router.put("/channels/:id",async(req,res)=>{

const{ChannelName,description}=req.body;
if(!ChannelName|| !description) return res.status(400).json({message:"All fields are required"});

try{

    const editChannel= await Channel.findByIdAndUpdate(req.params.id,{

        channelName:ChannelName,
        description:description
    })

    if(!editChannel) res.status(500).json("Internal server during update");
    res.status(200).json({message:"info updated ", editChannel});
}
catch(err){
    console.log("the error is ",err);

es.status(500).json("Internal server during update");s}

});
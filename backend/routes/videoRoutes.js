import express from "express";
import mongoose from "mongoose";
import Video from "../model/Video";
import { verify } from "./middlewares/auth";

const router = express.Router();

router.post("/videos", verify, async (req, res) => {
  const { title, thumbnailUrl, videoUrl, description, channelId } = req.body;
  const uploader = req.user.userId;
  const uploadDate = Date.now();

  if (!title || !thumbnailUrl || !videoUrl || !description || !channelId)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const newVideo = await Video.create({
      title: title,
      thumbnailUrl: thumbnailUrl,
      videoUrl: videoUrl,
      description: description,
      channelId: channelId,
      uploader: uploader,
      uploadDate: uploadDate,
    });
    if (newVideo)
      return res
        .status(200)
        .json({ message: "Video created ", video: newVideo });
  } catch (error) {
    console.log("error is ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/videos", verify, async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("uploader", "name")
      .populate("channelId");

    if (!videos) return res.status(400).json({ message: "Bad request" });
    res.status(200).json(videos);
  } catch (error) {
    console.log("error is ", error);
    res.status(404).json({ message: "videos not found" });
  }
});

router.get("/videos/:id", verify, async (req, res) => {
  try {
    const specificVideo = await Video.findById(req.params.id);
    if (!specificVideo)
      return res.status(404).json({ message: "Video not available" });

    res.status(200).json(specificVideo);
  } catch (err) {
    console.log("the error is ", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/videos/:id", verify, async (req, res) => {
  const { title, description, thumbnailUrl } = req.body;
  const userId = req.user;
  try {
    const editVideo = await Video.findByIdAndUpdate(
      req.params.id,
      {
        title: title,
        description: description,
        thumbnailUrl: thumbnailUrl,
      },
      {
        new: true,
      }
    );

    if (!editVideo) return res.status(404).json({ message: "video not found" });
    res.status(201).json(editVideo);
  } catch (error) {
    console.log("error ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/videos/:id",async (req,res)=>{

try{
  const deleteVideo=await Video.findByIdAndDelete(req.params.id);

  if(!deleteVideo) return res.status(404).json({message:"Video not found"});
  res.status(204).send();
}
catch(err){

  console.log("the error is ", err);
res.status(404).json({message:"video not found"});
}
});

//search functionality

router.get("videos/search",async (req,res)=>{

  const{title}=req.query;

  if (!title) {
    return res.status(400).json({ message: "Search title is required" });
  }

  try{
    const searchedVideo=await Video.find({
      title:{$regex :title,$options:"i"}
    });

    if(searchedVideo.length===0){
      res.status(404).json({message:"video not found"});
    }

    res.status(200).json({message:"Found", searchedVideo});
  }
  catch(error){
    console.log("the error is ",error);
    res.status(404).json({message:"Video not found"});
  }

});

router.get("videos/category/:category",(req,res)=>{

const{category}=req.params.id;
if(!category) return res.status(400).json({message:"bad request"});

try{

  const category= Video.findById({category});
  if(!category) return res.status(404).json({message:"unable to search"});
  res.status(200).json({message:"Videos are "},category);

}catch(err){
      console.log("the error is ",err);

  res.status(500).json({message:"Unable to search"})
}

})
export default router;

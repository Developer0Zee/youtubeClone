import express from "express";
import Video from "./model/Video.js";
import { verify } from "./middlewares/auth";

const router = express.Router();

router.post("/video", verify, async (req, res) => {
  const { title, thumbnailUrl, videoUrl, description, channelId } = req.body;
  const uploader = req.user.userId;
  const uploadDate = Date.now();

  if (!title || thumbnailUrl || videoUrl || description || channelId)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const newVideo = Video.create({
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

app.get("/video", verify, async (req, res) => {
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

export default router;

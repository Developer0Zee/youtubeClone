import express from "express";
import Comment from "../model/Comment";
import { verify } from "../middlewares/auth";

const router = express.Router();

router.post("/comments", verify, async (req, res) => {
  const { text, videoId } = req.body;
  const userId = req.user;

  if (!text || !videoId) {
    return res.status(400).json({ message: "Text and videoId are required" });
  }
  try {
    const comment = await Comment.create({
      text: text,
      userId: userId,
      videoId: videoId,
      timeStamp: true,
    });

    if (!comment)
      return res.status(404).json({ message: "comment not available" });
    res.status(201).json({ message: "Comment added", comment });
  } catch (err) {
    console.log("the error is ", err);
    res.status(500).json({ message: "Server error while adding comment" });
  }
});

router.get("/comments/:videoId", async (req, res) => {
  const { videoId } = req.params;

  try {
    const allComment = await Comment.find({ videoId })
      .populate("userId", "name")
      .sort({ timeStamp: -1 });
    if (!allComment || allComment.length === 0) {
      if (!allComment) return res.status(404).json(" comment unavailable");
    }
    res.status(200).json(allComment);
  } catch (err) {
    console.log("The error is ", err);
    res.status(500).json({ message: "Server error while fetching comments" });
  }
});

router.delete("/comments/:id", verify,async (req, res) => {
  const { commentId } = req.params.id;
  try {
    const deleteComment = Comment.findById(commentId);
    if (!deleteComment)
      return res.status(404).json({ message: "Comment not found" });

    if (Comment.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete comment" });
    }
    await Comment.findByIdAndDelete(commentId);
    res.status(204).send();
  } catch (err) {
    console.log("The error is ", err);
    res.status(500).json({ message: "Server error while deleting comment" });
  }
});

export default router;

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  timeStamp: { type: Date, default:Date.Now},
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: "Video", required: true }

});

const Comment= mongoose.model("Comment",commentSchema);

export default Comment;
import mongoose from "mongoose";
import Channel from "./Channel";

const videoSchema=new mongoose.Schema({

    title:{type:String,required: true},
    thumbnailUrl:{type:String, required: true},
    videoUrl:{type:String, required:true},
    description:{type:String, required:true},
    channelId:{type: mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    },

    uploader:{type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    views:{type:Number, required:true ,default:0},
    dislikes:{type:Number, required:true ,default:0},
    uploadDate:{type:Date, default:Date.now},
    comments:[{type:mongoose.Schema.ObjectId.Types,
        ref:"Comment"
    }]
});

const Video = mongoose.model("Video",videoSchema);

export default Video;
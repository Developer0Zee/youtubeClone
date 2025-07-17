import mongoose from "mongoose";

const channelSchema= new mongoose.Schema({

    channelName:{type:String, required: true},
    userId:{ type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },

    subscriber:{type:Number, default:0},
    description:{type:String, required:true},
    videos:[{type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]

});

const Channel= mongoose.model("Channel",channelSchema);

export default Channel;
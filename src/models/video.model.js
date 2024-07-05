import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: 0
    },
    views: {
        type: Number,
        required: 0
    },
    isPublished: {
        type: String,
        required: true
    },
    
},{timestamps:true});

export const Video = mongoose.model("Video",videoSchema);
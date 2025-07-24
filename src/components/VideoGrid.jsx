import { useEffect,useState } from "react";
import API from '../api';
import VideoCard from "./VideoCard";
import { sampleVideo } from "../assets/sample";
import "./VideoGrid.css";

function VideoGrid() {
  const[video,setVideo]=-useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
const fetchVideos

  })
  return (
    <div className="video-grid-container">
      <div className="video-grid">
        {sampleVideo.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
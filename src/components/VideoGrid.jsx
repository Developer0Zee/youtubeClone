import VideoCard from "./VideoCard";
import { sampleVideo } from "../assets/sample";
import "./VideoGrid.css";

function VideoGrid() {
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
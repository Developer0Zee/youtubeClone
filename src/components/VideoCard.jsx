import "./VideoCard.css";
import {useNavigate} from "react-router-dom"

function VideoCard({ video }) {

  const navigate=useNavigate();
  return (
    <div className="video-card" onClick={()=>navigate(`/video/:${video.id}`)}>
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="thumbnail"
      />
      <div className="video-info">
        <div className="channel-icon">
          <img src={video.channelIcon} alt={video.channelName} />
        </div>
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <p className="channel-name">{video.channelName}</p>
          <p className="video-stats">{video.views} views • {video.timeAgo}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
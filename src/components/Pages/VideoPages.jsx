import { useParams } from "react-router-dom";
import "./VideoPages.css"

function VideoPage() {
  const { id } = useParams();

  return (
    <div className="video-page">
      <div className="video-player">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="Video Player"
          allowFullScreen
        />
      </div>

      <div className="video-info">
        <h2>Awesome Video Title Here</h2>

        <div className="video-meta">
          <div className="channel-info">
            <img src="https://via.placeholder.com/40" alt="Channel Avatar" />
            <div>
              <p><strong>Channel Name</strong></p>
              <p>1.2M subscribers</p>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div>123K views • 2 days ago</div>
        </div>

        <div className="description-box">
          <p>
            This is the video description. It includes details, hashtags, links, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;

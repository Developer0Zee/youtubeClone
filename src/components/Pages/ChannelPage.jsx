import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import './Channel.css';

function ChannelPage() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const channelRes = await API.get(`/channel/${id}`);
        const videosRes = await API.get('/videos', {
          params: { channelId: id }
        });
        setChannel(channelRes.data);
        setVideos(videosRes.data);
      } catch (error) {
        console.error("Failed to fetch channel data:", error);
      }
    };
    fetchChannelData();
  }, [id]);

  if (!channel) return <div>Loading channel...</div>;
  return (
    <div className="channelPageContainer">
      <img src={channel.banner} className="channelBanner" alt="banner" />

      <div className="channelHeader">
        <div className="channelInfo">
          <img
            src={channel.avatar}
            alt="avatar"
            className="channelAvatar"
          />
          <div className="channelMeta">
            <h2>{channel.name}</h2>
            <p>{channel.subscribers} subscribers</p>
          </div>
        </div>
        <button className="subscribeBtn">Subscribe</button>
      </div>

      <h3 className="videoSectionTitle">Videos</h3>
      <div className="channelVideos">
        {channel.videos.map((video) => (
          <div
            key={video._id}
            className="channelVideoCard"
            onClick={() => (window.location.href = `/video/${video._id}`)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <p className="videoTitle">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChannelPage;

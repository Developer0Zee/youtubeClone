import { useParams } from "react-router-dom";
import "./Channel.css"; 

const dummyChannel = {
  id: "channel123",
  name: "CodeWithZee",
  avatar: "https://via.placeholder.com/80",
  subscribers: "450K",
  banner: "https://via.placeholder.com/1200x300",
  videos: [
    {
      _id: "abc1",
      title: "Intro to React",
      thumbnail: "https://via.placeholder.com/320x180",
    },
    {
      _id: "abc2",
      title: "MongoDB in 15 mins",
      thumbnail: "https://via.placeholder.com/320x180",
    },
  ],
};

function ChannelPage() {
  const { id } = useParams();
  const channel = dummyChannel;

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

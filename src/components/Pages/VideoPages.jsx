import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import './VideoPages.css';

function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const [videoRes, commentsRes] = await Promise.all([
          API.get(`/videos/${id}`),
          API.get(`/comments/${id}`)
        ]);
        setVideo(videoRes.data);
        setComments(commentsRes.data);
      } catch (error) {
        console.error("Failed to fetch video data:", error);
      }
    };
    fetchVideoData();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/comments', {
        text: newComment,
        videoId: id
      });
      setComments([response.data, ...comments]);
      setNewComment('');
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  if (!video) return <div>Loading video...</div>;

  return (
    <div className="video-page">
      {/* ... existing JSX ... */}
      <div className="comments-section">
        <h3>Comments</h3>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button type="submit">Post</button>
        </form>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment._id} className="comment">
              <p><strong>{comment.userId?.name}</strong>: {comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
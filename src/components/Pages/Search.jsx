import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../api';
import VideoCard from '../components/VideoCard';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await API.get('/videos/search', {
          params: { title: query }
        });
        setResults(response.data);
      } catch (error) {
        console.error("Search failed:", error);
      }
    };
    if (query) fetchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="video-grid">
        {results.map(video => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
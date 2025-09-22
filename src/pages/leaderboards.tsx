import { useEffect, useState } from 'react';
import Leaderboard from '../components/Leaderboard';
import { fetchLeaderboards } from '../lib/lichessApi';

const LeaderboardsPage = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeaderboards = async () => {
      try {
        const data = await fetchLeaderboards();
        setLeaderboards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getLeaderboards();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Leaderboards</h1>
      <Leaderboard data={leaderboards} />
    </div>
  );
};

export default LeaderboardsPage;
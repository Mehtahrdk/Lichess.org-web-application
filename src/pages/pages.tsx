// src/pages/profile.tsx
import { useState } from 'react';
import { getUserProfile } from '../lib/lichessApi';

type UserProfileData = {
  username: string;
  url: string;
  perfs: {
    blitz: { rating: number };
    rapid: { rating: number };
  };
};

export default function ProfilePage() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setError('');
    setProfile(null);
    setLoading(true);
    try {
      const data = await getUserProfile(username);
      setProfile(data);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Search Lichess User</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profile && (
        <div style={{ background: '#2a2a2a', marginTop: '2rem', padding: '1rem', borderRadius: '4px', display: 'inline-block' }}>
          <h2><a href={profile.url}>{profile.username}</a></h2>
          <p>Blitz Rating: {profile.perfs.blitz.rating}</p>
          <p>Rapid Rating: {profile.perfs.rapid.rating}</p>
        </div>
      )}
    </div>
  );
}
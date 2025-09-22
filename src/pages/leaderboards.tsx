// src/pages/leaderboards.tsx
import { getLeaderboard } from '../lib/lichessApi'; // <-- The correct function name is getLeaderboard

type Player = {
  id: string;
  username: string;
  title?: string;
  perfs: { blitz: { rating: number } };
};

type LeaderboardProps = {
  players: Player[];
  error?: string;
};

export default function LeaderboardPage({ players, error }: LeaderboardProps) {
  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Top 10 Blitz Players</h1>
      <ol>
        {players.map((player, index) => (
          <li key={player.id} style={{ background: '#2a2a2a', margin: '0.5rem 0', padding: '1rem', borderRadius: '4px' }}>
            <span>{index + 1}. </span>
            {player.title && <strong style={{ color: '#b58801' }}>{player.title} </strong>}
            {player.username} ({player.perfs.blitz.rating})
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const players = await getLeaderboard();
    return { props: { players } };
  } catch (err: any) {
    return { props: { players: [], error: err.message } };
  }
}
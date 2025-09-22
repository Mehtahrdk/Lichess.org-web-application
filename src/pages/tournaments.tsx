// src/pages/tournaments.tsx
import { getTournaments } from '../lib/lichessApi';

type Tournament = {
  id: string;
  fullName: string;
};

type TournamentsProps = {
  tournaments: Tournament[];
  error?: string;
};

export default function TournamentsPage({ tournaments, error }: TournamentsProps) {
  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Ongoing Tournaments</h1>
      <ul>
        {tournaments.length > 0 ? (
          tournaments.map(t => (
            <li key={t.id} style={{ background: '#2a2a2a', margin: '0.5rem 0', padding: '1rem', borderRadius: '4px' }}>
              <a href={`https://lichess.org/tournament/${t.id}`} target="_blank" rel="noopener noreferrer">
                {t.fullName}
              </a>
            </li>
          ))
        ) : (
          <p>No ongoing tournaments found.</p>
        )}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const data = await getTournaments();
    return { props: { tournaments: data.started || [] } };
  } catch (err: any) {
    return { props: { tournaments: [], error: err.message } };
  }
}
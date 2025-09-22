import React, { useEffect, useState } from 'react';
import { fetchTournaments } from '../lib/lichessApi';
import { Tournament } from '../types';

const TournamentList: React.FC = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getTournaments = async () => {
            try {
                const data = await fetchTournaments();
                setTournaments(data);
            } catch (err) {
                setError('Failed to fetch tournaments');
            } finally {
                setLoading(false);
            }
        };

        getTournaments();
    }, []);

    if (loading) {
        return <div>Loading tournaments...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Ongoing Tournaments</h2>
            <ul>
                {tournaments.map((tournament) => (
                    <li key={tournament.id}>
                        <h3>{tournament.name}</h3>
                        <p>Type: {tournament.format}</p>
                        <p>Players: {tournament.playerCount}</p>
                        <p>Start Time: {new Date(tournament.startsAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TournamentList;
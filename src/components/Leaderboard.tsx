import React, { useEffect, useState } from 'react';
import { fetchLeaderboards } from '../lib/lichessApi';
import { LeaderboardEntry } from '../types';

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLeaderboards = async () => {
            try {
                const data = await fetchLeaderboards();
                setLeaderboard(data);
            } catch (err) {
                setError('Failed to fetch leaderboards');
            } finally {
                setLoading(false);
            }
        };

        getLeaderboards();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Leaderboards</h1>
            <ul>
                {leaderboard.map((entry) => (
                    <li key={entry.username}>
                        {entry.username}: {entry.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
import React, { useEffect, useState } from 'react';
import TournamentList from '../components/TournamentList';
import { fetchTournaments } from '../lib/lichessApi';

const TournamentsPage = () => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTournaments = async () => {
            try {
                const data = await fetchTournaments();
                setTournaments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getTournaments();
    }, []);

    if (loading) return <div>Loading tournaments...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Ongoing Tournaments</h1>
            <TournamentList tournaments={tournaments} />
        </div>
    );
};

export default TournamentsPage;
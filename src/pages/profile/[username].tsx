import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserProfile from '../../components/UserProfile';
import { fetchUserProfile } from '../../lib/lichessApi';

const ProfilePage = () => {
    const router = useRouter();
    const { username } = router.query;
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (username) {
            const getUserProfile = async () => {
                try {
                    const data = await fetchUserProfile(username);
                    setUserData(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            getUserProfile();
        }
    }, [username]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userData) return <div>User not found</div>;

    return <UserProfile user={userData} />;
};

export default ProfilePage;
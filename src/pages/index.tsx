import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Lichess Next.js App</h1>
            <p>This application allows you to explore user profiles, leaderboards, and tournaments from Lichess.org.</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/leaderboards">View Leaderboards</Link>
                    </li>
                    <li>
                        <Link href="/tournaments">View Tournaments</Link>
                    </li>
                    <li>
                        <Link href="/profile/[username]">View User Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
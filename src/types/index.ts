export interface UserProfile {
    username: string;
    bio: string;
    games: number;
    ratings: {
        blitz: number;
        rapid: number;
        classical: number;
    };
    profileImage: string;
}

export interface LeaderboardEntry {
    username: string;
    rating: number;
}

export interface Tournament {
    id: string;
    name: string;
    url: string;
    startsAt: number;
    status: string;
    players: number;
}
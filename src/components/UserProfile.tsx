import React from 'react';

interface UserProfileProps {
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

const UserProfile: React.FC<UserProfileProps> = ({ username, bio, games, ratings, profileImage }) => {
  return (
    <div className="user-profile">
      <img src={profileImage} alt={`${username}'s profile`} className="profile-image" />
      <h2>{username}</h2>
      <p>{bio}</p>
      <p>Games Played: {games}</p>
      <h3>Ratings</h3>
      <ul>
        <li>Blitz: {ratings.blitz}</li>
        <li>Rapid: {ratings.rapid}</li>
        <li>Classical: {ratings.classical}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
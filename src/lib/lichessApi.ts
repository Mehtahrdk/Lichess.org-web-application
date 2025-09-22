// src/lib/lichessApi.ts

const API_URL = 'https://lichess.org/api';

// The "export" keyword is essential. It makes the function available to other files.
export async function getUserProfile(username: string) {
  const response = await fetch(`${API_URL}/user/${username}`);
  if (!response.ok) {
    if (response.status === 404) throw new Error('User not found');
    throw new Error('Failed to fetch user data');
  }
  return await response.json();
}

// Make sure this "export" is here.
export async function getLeaderboard() {
  const response = await fetch(`${API_URL}/player/top/10/blitz`);
  if (!response.ok) throw new Error('Failed to fetch leaderboard');
  const data = await response.json();
  return data.users;
}

// And make sure this "export" is here.
export async function getTournaments() {
  const response = await fetch(`${API_URL}/tournament`);
  if (!response.ok) throw new Error('Failed to fetch tournaments');
  return await response.json();
}
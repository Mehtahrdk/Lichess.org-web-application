# Lichess Next.js App

This is a Next.js web application that interacts with the Lichess.org API to display user profiles, leaderboards, and tournaments.

## Features

- **User Profiles**: View detailed information about Lichess users by navigating to their profile page using their username.
- **Leaderboards**: Access the top players on Lichess.org and see their ratings.
- **Tournaments**: Get information about ongoing tournaments on Lichess.org.

## Project Structure

```
lichess-nextjs-app
├── src
│   ├── pages
│   │   ├── index.tsx          # Homepage with links to other routes
│   │   ├── profile
│   │   │   └── [username].tsx # User profile page
│   │   ├── leaderboards.tsx   # Leaderboard page
│   │   └── tournaments.tsx     # Tournaments page
│   ├── components
│   │   ├── UserProfile.tsx    # Component for displaying user profile
│   │   ├── Leaderboard.tsx     # Component for displaying leaderboard
│   │   └── TournamentList.tsx   # Component for displaying tournaments
│   ├── lib
│   │   └── lichessApi.ts      # API interaction functions
│   └── types
│       └── index.ts           # TypeScript interfaces
├── public                      # Static assets
├── package.json                # NPM configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd lichess-nextjs-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- To view a user profile, navigate to `/profile/[username]`, replacing `[username]` with the actual Lichess username.
- Access the leaderboards at `/leaderboards`.
- Check ongoing tournaments at `/tournaments`.

## License

This project is licensed under the MIT License.
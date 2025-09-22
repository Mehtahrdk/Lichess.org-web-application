// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
// Make sure you have a globals.css file for basic styling
// import '../styles/globals.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <style jsx global>{`
        body {
          background-color: #121212;
          color: #e0e0e0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        .main-content {
          padding: 1rem 2rem;
        }
        a {
          color: #00aaff;
          text-decoration: none;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default MyApp;
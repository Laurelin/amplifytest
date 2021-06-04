import { useEffect } from 'react';
import Navbar from '../components/navbar';

export default function Landing() {
  useEffect(() => {
    document.title = 'Landing';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 dark:bg-black transition duration-700">
      <Navbar />
      <h1 className="text-5xl text-blue-700 dark:text-indigo-500 transition duration-500">
        React+Tailwind+Amplify+GraphQL
      </h1>
    </div>
  );
}

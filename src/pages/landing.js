import { useEffect } from 'react';
import Navbar from '../components/navbar';
import useDarkMode from '../hooks/useDarkMode';

export default function Landing() {
  useEffect(() => {
    document.title = 'Landing';
  }, []);
  useDarkMode();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 dark:bg-black transition duration-700">
      <Navbar />
      <h1 className="text-5xl text-blue-700 dark:text-blue-500 transition duration-500">
        Dark Mode Toggle Tailwind+React
      </h1>
    </div>
  );
}

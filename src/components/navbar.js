import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import * as ROUTES from '../constants/routes';

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="fixed top-0 bg-blue-100 dark:bg-gray-900 w-full p-5 shadow-md transition duration-500">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <button
            type="button"
            onClick={() => setTheme(colorTheme)}
            className="flex items-center justify-center outline-none w-10 h-10 bg-indigo-500 rounded-full shadow-md cursor-pointer"
          >
            {colorTheme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white dark:text-black transition duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          <div className="text-center flex items-center align-items font-bold text-lg">
            <Link
              to={ROUTES.CONFERENCE}
              aria-label="Conferences"
              className="bg-indigo-500 rounded-full p-2 text-white dark:text-black transition duration-500 shadow-md"
            >
              Conferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

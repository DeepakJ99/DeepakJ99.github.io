// src/pages/NotFoundPage.tsx

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
    <h1 className="text-4xl sm:text-6xl font-bold mb-4">404</h1>
    <p className="text-lg sm:text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
    <Link
        to="/"
        className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
        Go back home
    </Link>
    </div>

  );
}

import { FaHome, FaMoon, FaReadme, FaSun, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Breadcrumbs from "./Breadcrumb";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <header className="w-full border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 bg-stone-50 dark:bg-zinc-800 sticky top-0 z-50 dark:border-zinc-700">
            <div className="flex flex-col items-end space-y-2">
                <nav className="flex space-x-4 sm:space-x-6 text-sm font-medium text-gray-700 dark:text-white items-center text-lg sm:text-sm">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            "transform transition-transform duration-100 hover:scale-120 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <FaHome />
                    </NavLink>
                    <NavLink
                        to="/articles"
                        className={({ isActive }) =>
                            "transform transition-transform duration-100 hover:scale-120 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <FaReadme />
                    </NavLink>
                    {/* <NavLink
                        to="/fun-projects"
                        className={({ isActive }) =>
                            "transform transition-transform duration-100 hover:scale-120 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <FaHammer />
                    </NavLink> */}
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            "transform transition-transform duration-100 hover:scale-120 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <FaUser />
                    </NavLink>
                    <button onClick={() => setDarkMode(!darkMode)} className="inline-flex items-center transform transition-transform duration-100 hover:scale-120">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </nav>
                <Breadcrumbs />
            </div>
        </header>

    );
}

import { FaHome, FaMoon, FaSun} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Breadcrumbs from "./Breadcrumb";
import { FaUser } from "react-icons/fa6";
import { IoReader } from "react-icons/io5";   
export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <header className="w-full border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 bg-stone-50 dark:bg-zinc-800 sticky top-0 z-50 dark:border-zinc-700">
            <div className="flex flex-col items-end space-y-2">
                <nav className="flex text-sm font-medium text-gray-700 dark:text-white items-center text-lg sm:text-sm">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            "transform transition-transform duration-100 hover:scale-120 p-4 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <FaHome className="text-xl sm:text-lg"/>
                    </NavLink>
                    <NavLink
                        to="/articles"
                        className={({ isActive }) =>
                            "transform transition-transform duration-100 hover:scale-120 p-4 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <IoReader className="text-xl sm:text-lg"/>
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
                            "transform transition-transform duration-100 hover:scale-120 p-4 " +
                            (isActive ? "text-blue-500" : "")
                        }
                    >
                        <FaUser className="text-xl sm:text-lg" />
                    </NavLink>
                    <button onClick={() => setDarkMode(!darkMode)} className="inline-flex items-center transform transition-transform duration-100 text-xl sm:text-lg hover:scale-120 cursor-pointer p-4 ">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </nav>
                <Breadcrumbs />
            </div>
        </header>

    );
}

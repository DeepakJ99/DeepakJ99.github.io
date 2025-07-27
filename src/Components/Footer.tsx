import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t text-sm text-gray-500 flex flex-col items-center gap-2 border-gray-200 dark:border-zinc-700 px-4 sm:px-0 text-center">
      <span className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Deepak</span>
      <div className="flex gap-6 text-lg">
        <a href="https://twitter.com/thelitdeepak" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com/in/deepak-jakhu" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/DeepakJ99" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  );
}

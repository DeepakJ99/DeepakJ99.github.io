import React from "react";
import { Link } from "react-router-dom";
import LikesAndViews from "./LikesAndViews";
import Tags from "./Tags";
import MarkdownRenderer from "./MarkdownRenderer";

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  likes: number;
  views: number;
  setSearchTerm: (term: string) => void;
  tags: []
}

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  excerpt,
  author,
  date,
  slug,
  likes,
  views,
  setSearchTerm,
  tags,
}) => {
  return (
    <Link
      to={`/articles/${slug}`}
      className="relative block rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 dark:border-zinc-700 border border-stone-100 overflow-hidden"
    >
      <LikesAndViews likes={likes} views={views} />
      <Tags tags={tags} setSearchTerm={setSearchTerm} />
      <div className="relative mt-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 relative z-10">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base relative z-10">
          <MarkdownRenderer content={excerpt} />
        </p>

        {/* White overlay that fades upward */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40 rounded-b-lg z-20" />
      </div>
    
      <div className="text-xs sm:text-sm text-gray-500 mt-4">
        By <span className="font-medium">{author}</span> on {date}
      </div>
    </Link>
  );
};



export default ArticleCard;

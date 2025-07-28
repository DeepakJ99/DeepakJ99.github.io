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

const ArticleCard: React.FC<ArticleProps> = ({ title, excerpt, author, date, slug, likes, views, setSearchTerm, tags }) => {
  return (
    <Link
      to={`/articles/${slug}`}
      className="relative block rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 dark:border-zinc-700 border border-stone-100"
    >
      <LikesAndViews likes={likes} views={views} />
      <Tags tags = {tags} setSearchTerm = {setSearchTerm} />
      <h2 className="text-lg mt-4 sm:text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
        <MarkdownRenderer content={excerpt} />
      </p>
      <div className="text-xs sm:text-sm text-gray-500">
        By <span className="font-medium">{author}</span> on {date}
      </div>
      
    </Link>
  );
};

export default ArticleCard;

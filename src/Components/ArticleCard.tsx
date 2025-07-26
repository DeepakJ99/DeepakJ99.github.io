import React from "react";

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, excerpt, author, date, slug }) => {
  return (
    <a
      href={`/articles/${slug}`}
      className="block bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      <div className="text-xs text-gray-500">
        By <span className="font-medium">{author}</span> on {new Date(date).toLocaleDateString()}
      </div>
    </a>
  );
};

export default ArticleCard;

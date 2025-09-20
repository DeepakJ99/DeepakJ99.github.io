import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard";
import API from "../api";
import SkeletonCard from "../Components/SkeletonCard";
interface Article {
  title : string;
  content : string;
  created_at : Date;
  likes: number;
  comments : number;
  author_username : string;
  slug : string;
  views: number;
  tags: []
}

const Feed: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fn = async () => {
      try {
        const res = await API.get("/articles");
        setArticles((prev) => [...prev, ...res.data]);  // ✅ return updated array
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    };

    fn(); // don't forget to call the async function
    }, []);

    useEffect(() => {
    const fn = async () => {
      try {
        setLoading(true);
        const res = await API.get("/articles/search", {
          params: { query: searchTerm }
        });
        setArticles(res.data); // assuming response is already list[ArticleOut]
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) fn();
  }, [searchTerm]);

  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
    {/* Search Tab */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center sm:text-left">
          Latest Articles
        </h1>
        <input
          type="text"
          placeholder="Search articles... use #tag-name to search with tags"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {loading
      ? Array.from({ length: 3 }).map((_, idx) => <SkeletonCard key={idx} />)
      : <div className="space-y-4 sm:space-y-6">
          {articles.map((article, idx) => (
            <ArticleCard
              key={idx}
              title={article.title}
              excerpt={article.content}
              date={new Date(article.created_at).toLocaleDateString()}
              slug={article.slug}
              author={article.author_username}
              likes={article.likes}
              views={article.views}
              tags = {article.tags}
              setSearchTerm = {setSearchTerm}
            />
          ))}
      </div>}
    </div>
    </>
  );
};

export default Feed;

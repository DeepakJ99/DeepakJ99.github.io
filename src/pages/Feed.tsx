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
  views: number
}

const Feed: React.FC = () => {
  const [loading, setLoading] = useState(true);

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
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
  <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
    Latest Articles
  </h1>
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
          />
        ))}
      </div>}
</div>

  );
};

export default Feed;

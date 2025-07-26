import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard";
import API from "../api";
import Breadcrumbs from "../Components/Breadcrumb";
interface Article {
  title : string;
  content : string;
  created_at : Date;
  likes: number;
  comments : number;
  author : string;
  slug : string
}

const Feed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  useEffect(() => {
    const fn = async () => {
      try {
        const res = await API.get("/articles");
        setArticles((prev) => [...prev, ...res.data]);  // ✅ return updated array
      } catch (e) {
        console.log(e);
      }
    };

    fn(); // don't forget to call the async function
    }, []);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Breadcrumbs/>
      <h1 className="text-4xl font-bold text-center mb-8">Latest Articles</h1>
      <div className="space-y-6">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} 
          title= {article.title}
          excerpt= {article.content}
          date= {new Date(article.created_at).toLocaleDateString(
          "en-US", 
          {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }
          )}
          slug = {article.slug}
          author= {article.author}
           />
        ))}
      </div>
    </div>
  );
};

export default Feed;

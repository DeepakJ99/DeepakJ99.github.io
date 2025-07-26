import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LikeButton from "../Components/LikeButton";
import CommentBox from "../Components/Comment";
import API from "../api";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import Breadcrumbs from "../Components/Breadcrumb";

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  useEffect(() => {
    const a = async () => {
      try{
        const res = await API.get(`articles/${slug}`)
        console.log(res.data)
        setArticle(res.data)
      }
      catch(e){
        console.log(e)
      }
    }
    a();
  }, [slug]);

  if (!article) {
    return <div className="p-4 text-center">Article not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Breadcrumbs/>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {article.author_username} on {new Date(article.created_at).toLocaleDateString(
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
      </p>
      <MarkdownRenderer content={article.content} />
        <LikeButton slug={slug!}/>
        <CommentBox slug={slug!} />
    </div>
  );
}

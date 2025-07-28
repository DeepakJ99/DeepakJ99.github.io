import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LikeButton from "../Components/LikeButton";
import CommentBox from "../Components/Comment";
import API from "../api";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import SkeletonCard from "../Components/SkeletonCard";
import LikesAndViews from "../Components/LikesAndViews";
import Tags from "../Components/Tags";

export default function ArticlePage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true)
  const [article, setArticle] = useState<any>(null);
  useEffect(() => {
    const a = async () => {
      try{
        const res = await API.get(`articles/${slug}`)
        setArticle(res.data)
        setLoading(false)
      }
      catch(e){
        console.log(e)
      }
    }
    a();
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 relative">
      {
        loading ? <SkeletonCard/> : 
        <>
          <LikesAndViews likes={article.likes} views={article.views} />
          <Tags tags = {article.tags} />
          <h1 className="text-2xl sm:text-3xl mt-5 sm:mt-7 font-bold mb-2 dark:text-stone-50 text-zinc-800">
            {article.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mb-4 sm:mb-6">
            By {article.author_username} on {new Date(article.created_at).toLocaleDateString()}
          </p>
          <MarkdownRenderer content={article.content} />
          <LikeButton slug={slug!} />
          <CommentBox slug={slug!} />
        </>
      }
    </div>

  );
}

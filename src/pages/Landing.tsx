import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

type ArticleResponse = {
  title: string;
  slug: string
};

export default function LandingPage() {
  const [articleResponse, setArticleResponse] = useState<ArticleResponse | null>(null);
  const navigate = useNavigate()
  useEffect(() => {
    const fn = async () =>{
        try{
            const res = await API.get("/daily")
            if(res.status == 200){
                setArticleResponse(res.data)
            }
        }catch(e){
            console.log(e)
        }
    }
    fn()
  }, []);
  const handleClick = () =>{
    navigate(`articles/${articleResponse?.slug}`)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50 dark:bg-zinc-800 dark:text-stone-50 text-zinc-800 px-4 sm:px-6">
    {articleResponse ? (
      <>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center max-w-xl sm:max-w-2xl">
          {articleResponse.title}
        </h1>
        <button
          className="bg-black text-white mt-6 sm:mt-10 px-4 sm:px-6 py-2 rounded-full text-sm font-medium 
                    transition-transform transform hover:scale-105 hover:shadow-lg 
                    hover:bg-gray-800 duration-200"
          onClick={handleClick}
        >
          Read More
        </button>
      </>
    ) : (
      <Loader />
    )}
  </div>

);

}

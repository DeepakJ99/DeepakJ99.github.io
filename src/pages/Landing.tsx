import { useEffect, useState } from "react";
import API from "../api";

type ArticleResponse = {
  title: string;
  slug: string
};

export default function LandingPage() {
  const [ArticleResponse, setArticleResponse] = useState<ArticleResponse>(null);

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center max-w-2xl">
        {ArticleResponse ? ArticleResponse.title : "LOADING"}
      </h1>
    </div>
  );
}

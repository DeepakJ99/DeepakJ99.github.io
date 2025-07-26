// components/LikeButton.tsx
import React, { useEffect, useState } from "react";
import API from "../api";

interface Props {
  slug: string;
}

const LikeButton: React.FC<Props> = ({ slug }) => {
  const [likes, setLikes] = useState<number>(0);

  const fetchLikes = async () => {
    try{
      const res = await API.get(`/articles/${slug}/likesCount`);
      setLikes(res.data.count)
    }catch(e){
      console.log(e)
    }
    
  };

  useEffect(() => {
    fetchLikes();
  }, [slug]);

  const handleLike = async () => {
    try{
      const res = await API.post(`/articles/${slug}/like`)
      if(res.status == 200){
        fetchLikes();
      }
    }
    catch(e){
      console.log(e)
    }
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-100"
    >
      ❤️ {likes}
    </button>
  );
};

export default LikeButton;

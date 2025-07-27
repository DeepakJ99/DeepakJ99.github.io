// components/LikeButton.tsx
import React, { useEffect, useState } from "react";
import API from "../api";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Props {
  slug: string;
}

const LikeButton: React.FC<Props> = ({ slug }) => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const handleLike = async () => {
     if (!user) {
      return navigate("/login", { state: { from: location.pathname } });
     }
    try{
      const res = await API.post(`/articles/${slug}/like`)
      if(res.status == 200){
        
      }
    }
    catch(e){
      console.log(e)
    }
  };

    return (
    <span className="flex items-center gap-4 border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 w-fit text-base sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
      <button
        onClick={handleLike}
        className="flex items-center gap-1 hover:text-blue-600 duration-100 transition-colors dark:text-stone-500"
      >
        <FaThumbsUp />
      </button>
    </span>
  );

};

export default LikeButton;

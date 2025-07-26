// components/CommentBox.tsx
import React, { useState, useEffect } from "react";
import API from "../api";

interface Comment {
  id: number;
  content: string;
  author_username: string;
  created_at: string;
}

interface Props {
  slug: string;
}

const CommentBox: React.FC<Props> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const fetchComments = async() => {
    try{
      const res = await API.get(`/articles/${slug}/comments`)
      setComments(res.data)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    fetchComments()
  }, [slug]);

  const submitComment = async () => {
    console.log("clicked")
      try{
        await API.post(`/articles/${slug}/comment`, {
          "content" : newComment
        })
        fetchComments()
      }catch(e){
        console.log(e)
      }
  };

  return (
    <div className="mt-6 space-y-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={submitComment}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Post Comment
      </button>

      <div className="mt-4">
        {comments.map((c) => (
          <div key={c.id} className="border-t pt-2">
            <p className="text-sm text-gray-800">{c.content}</p>
            <p className="text-xs text-gray-500">
              by {c.author_username} • {new Date(c.created_at).toLocaleString("en-US", 
          {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;

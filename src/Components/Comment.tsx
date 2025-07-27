// components/CommentBox.tsx
import React, { useState, useEffect } from "react";
import API from "../api";
import PostedComment from "./PostedComment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const fetchComments = async () => {
    try {
      const res = await API.get(`/articles/${slug}/comments`);
      setComments(res.data);
    } catch (e) {
      setComments([
        {
          id: 1,
          content: "This is a really insightful article. Thanks for sharing!",
          author_username: "alex_dev",
          created_at: "2025-07-25T10:23:00Z",
        },
        {
          id: 2,
          content: "I had the same thought while reading this. Great minds think alike!",
          author_username: "code_wanderer",
          created_at: "2025-07-25T11:05:45Z",
        },
        {
          id: 3,
          content: "Can you elaborate more on the last section? I found it a bit confusing.",
          author_username: "tech_scribe",
          created_at: "2025-07-25T12:00:00Z",
        },
        {
          id: 4,
          content: "Loved the way you structured the argument. Subscribed!",
          author_username: "byte_dancer",
          created_at: "2025-07-25T13:17:30Z",
        },
        {
          id: 5,
          content: "🔥🔥🔥 That ending was unexpected. Brilliant work!",
          author_username: "night_reader",
          created_at: "2025-07-25T14:42:10Z",
        }
      ]);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [slug]);

  const submitComment = async () => {
    if (!user) {
      return navigate("/login", { state: { from: location.pathname } });
    }
    try {
      await API.post(`/articles/${slug}/comment`, {
        content: newComment,
      });
      fetchComments();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-6 space-y-4 px-2 sm:px-0">
      <textarea
        className="w-full p-2 text-sm border border-gray-300 rounded resize-none"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={submitComment}
        className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-800 w-full sm:w-auto"
      >
        Post Comment
      </button>

      <div className="mt-4 space-y-3">
        {comments.map((c) => (
          <PostedComment
            key={c.id}
            id={c.id}
            content={c.content}
            author_username={c.author_username}
            created_at={c.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;

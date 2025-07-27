import { useState } from "react";
import API from "../api";


export default function AdminArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await API.post("/articles", { title, content });
    alert("Article created!");
    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
    <h1 className="text-xl sm:text-2xl font-bold mb-4">Create Article</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        />
        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={5}
        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        />
        <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm sm:text-base">
        Submit
        </button>
    </form>
    </div>

  );
}

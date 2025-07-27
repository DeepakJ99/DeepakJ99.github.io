import { useState } from "react";
import axios from "axios";

export default function AdminProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([{ title: "", link: "" }]);

  const handleAddTag = () => {
    setTags([...tags, { title: "", link: "" }]);
  };

  const handleChangeTag = (i: number, key: string, value: string) => {
    const newTags = [...tags];
    newTags[i][key as "title" | "link"] = value;
    setTags(newTags);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/admin/create-project", {
      title,
      description,
      link,
      tags,
    });
    alert("Project created!");
    setTitle("");
    setDescription("");
    setLink("");
    setTags([{ title: "", link: "" }]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
    <h1 className="text-xl sm:text-2xl font-bold mb-4">Create Project</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        />
        <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project Description"
        rows={3}
        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        />
        <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Project Link"
        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        />

        <div>
        <h3 className="text-sm sm:text-md font-medium">Tags</h3>
        {tags.map((tag, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
                type="text"
                placeholder="Tag Title"
                value={tag.title}
                onChange={(e) => handleChangeTag(idx, "title", e.target.value)}
                className="w-full sm:w-1/2 px-2 py-1 border rounded text-sm sm:text-base"
            />
            <input
                type="url"
                placeholder="Tag Link"
                value={tag.link}
                onChange={(e) => handleChangeTag(idx, "link", e.target.value)}
                className="w-full sm:w-1/2 px-2 py-1 border rounded text-sm sm:text-base"
            />
            </div>
        ))}
        <button
            type="button"
            onClick={handleAddTag}
            className="mt-2 text-sm text-blue-600 hover:underline"
        >
            + Add Tag
        </button>
        </div>

        <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm sm:text-base">
        Submit Project
        </button>
    </form>
    </div>

  );
}

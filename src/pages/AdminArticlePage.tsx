// src/pages/AdminArticlePage.tsx

import { useState, useRef, useEffect } from "react";
import hljs from 'highlight.js';
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import API from "../api";


// Define the modules configuration (without Quill dependency outside the component)
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean'] 
  ],
  // We include the syntax configuration here
  // syntax: {
  //   highlight: (text: string) => hljs.highlightAuto(text).value, 
  // },
};

export default function AdminArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); 
  const [tagsInput, setTagsInput] = useState("");
  
  // 💡 Use a ref to access the ReactQuill component
  const quillRef = useRef<ReactQuill | null>(null);

  // 💡 Use useEffect to register the syntax module once the component is mounted
  useEffect(() => {
    if (quillRef.current) {
      // Access the internal Quill instance
      const editor = quillRef.current.getEditor();
      
      if (editor && editor.constructor) {
        // Access the static Quill constructor from the instance
        const Quill = editor.constructor as any;

        // Only register if it hasn't been done to avoid errors
        if (Quill && !Quill.imports['modules/syntax']) {
          // This line is what enables the pre-highlighting that saves classes to the DB
          Quill.register('modules/syntax', null, true);
        }
      }
    }
  }, []); // Run only on mount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    // The content state already holds the HTML, including any pre-highlighted classes
    await API.post("/articles", { title, content, tags });

    alert("Article created!");
    setTitle("");
    setContent("");
    setTagsInput("");
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
        
        {/* Quill Editor */}
        <ReactQuill
          ref={quillRef} // 💡 Attach the ref
          value={content}
          onChange={setContent}
          className="bg-white rounded"
          theme="snow"
          modules={modules} // Pass the modules here
        />

        <input
          type="text"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="Tags (comma-separated)"
          className="w-full px-3 py-2 border rounded text-sm sm:text-base"
        />
        <button type="submit" className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm sm:text-base">
          Submit
        </button>
      </form>
    </div>
  );
}
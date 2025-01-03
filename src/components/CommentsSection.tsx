"use client";

import { useState } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState([
    { name: "Selena Gomez", text: "This blog always knows what I need!" },
    { name: "Hailey Bieber", text: "Wow, I need to try this ASAP!" },
  ]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      setComments([...comments, { name, text: newComment }]);
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-[#5E3A87] font-playfair mb-4">Comments</h2>
      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-[#EAEAEA] text-[#333333] p-2 rounded">
            <p className="font-bold text-[#5E3A87]">{comment.name}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Your name"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-[#ac7272] hover:bg-[#c28888] text-white px-4 py-2 rounded"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

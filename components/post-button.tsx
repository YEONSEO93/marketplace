"use client";

import { useState } from "react";

export default function SimplePostButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePostSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      setTitle("");
      setDescription("");
      setIsFormOpen(false);
    }

    setLoading(false);
  };

  return (
    <div className="mb-5">
      <button
        className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        {isFormOpen ? "Cancel" : "Create Post"}
      </button>

      {isFormOpen && (
        <div className="mt-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="p-2 border rounded w-full mb-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            className="p-2 border rounded w-full mb-2"
          />
          <button
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handlePostSubmit}
            disabled={loading}
          >
            {loading ? "Posting..." : "Submit Post"}
          </button>
        </div>
      )}
    </div>
  );
}




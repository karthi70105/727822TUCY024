import React, { useState } from "react";

const RealTimeFeed = () => {
  // Initial posts (static data)
  const [posts, setPosts] = useState([
    { id: 1, content: "Excited about learning React!", timestamp: "2 mins ago" },
    { id: 2, content: "Just finished a JavaScript project!", timestamp: "5 mins ago" },
    { id: 3, content: "AI is changing web development!", timestamp: "10 mins ago" },
  ]);

  const [newPost, setNewPost] = useState("");

  // Handle adding a new post
  const addPost = () => {
    if (newPost.trim() === "") return;

    const newEntry = {
      id: posts.length + 1,
      content: newPost,
      timestamp: "Just now",
    };

    setPosts([newEntry, ...posts]); // Newest post appears at the top
    setNewPost(""); // Clear input
  };

  return (
    <div className="container">
      <h2 className="heading">Real-Time Feed</h2>

      <textarea
        className="postInput"
        placeholder="Write a new post..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />

      <button className="postButton" onClick={addPost}>
        Add Post
      </button>

      <ul className="feedList">
        {posts.map((post) => (
          <li key={post.id} className="feedItem">
            <p className="postContent">{post.content}</p>
            <span className="timestamp">{post.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeFeed;

import React, { useState } from "react";

const TrendingPosts = () => {
  // Static posts data
  const posts = [
    { id: 1, title: "React vs Vue: Which is Better?", commentCount: 120 },
    { id: 2, title: "Understanding JavaScript Closures", commentCount: 95 },
    { id: 3, title: "CSS Grid vs Flexbox", commentCount: 80 },
    { id: 4, title: "AI in Web Development", commentCount: 75 },
    { id: 5, title: "Top 10 Programming Languages in 2025", commentCount: 65 },
    { id: 6, title: "How to Optimize Web Performance", commentCount: 60 },
    { id: 7, title: "Best UI Design Practices", commentCount: 55 },
    { id: 8, title: "Cybersecurity in the Digital Age", commentCount: 50 },
    { id: 9, title: "Building Scalable Web Apps", commentCount: 45 },
    { id: 10, title: "State Management in React", commentCount: 40 },
  ];

  const [search, setSearch] = useState("");

  // Filter posts based on search input
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="heading">Trending Posts</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchInput"
      />

      <ul className="postList">
        {filteredPosts.map((post) => (
          <li key={post.id} className="postItem">
            <span className="postTitle">{post.title}</span> -{" "}
            <span className="commentCount">{post.commentCount} comments</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;

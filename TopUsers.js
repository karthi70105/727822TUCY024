import React, { useState } from "react";

const TopUsers = () => {
  // Static user data (no API calls)
  const users = [
    { id: 1, name: "Alice Johnson", postCount: 45 },
    { id: 2, name: "Bob Smith", postCount: 30 },
    { id: 3, name: "Charlie Brown", postCount: 25 },
    { id: 4, name: "David Lee", postCount: 20 },
    { id: 5, name: "Emma Watson", postCount: 15 },
  ];

  const [search, setSearch] = useState("");

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="heading">Top Users</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchInput"
      />

      <ul className="userList">
        {filteredUsers.map((user) => (
          <li key={user.id} className="userItem">
            <span className="userName">{user.name}</span> -{" "}
            <span className="postCount">{user.postCount} posts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;

import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubProjects = ({ username }) => {
  // State to hold the repositories
  const [repos, setRepos] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);
  // State to hold search query
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the function to fetch repositories
    fetchRepos();
  }, [username]); // Dependency array with username

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error}</p>;

  // Filtered repositories based on search query
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-10 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        GitHub Repositories for {username}
      </h2>
      <input
        type="text"
        placeholder="Search Repositories"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border rounded-lg w-full"
      />
      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.id} className="mb-4 p-4 border rounded-lg shadow-md">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-700 mt-2">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProjects;

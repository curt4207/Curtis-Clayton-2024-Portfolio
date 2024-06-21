import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const GitHubProjects = ({username}) => {
  // State to hold the repositories

  const [repos, setRepos] = useState([]);
  // State to handle loading state

  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when component mounts

  // Function to fetch GitHub repositories
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

  // Render the repositories
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">GitHub Repositories for {username}</h2>
      <ul>
        {repos.map((repo) => (
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

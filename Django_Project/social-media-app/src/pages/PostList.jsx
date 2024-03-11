import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/post/");
          setPosts(response.data); 
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
  
      fetchData();
    }, []);


  return (
<div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center">
          <img
            src={post.author.avatar}
            alt="Avatar"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <div className="font-semibold">{post.author.username}</div>
            <div className="text-gray-700">{post.body}</div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10z"
                  clipRule="evenodd"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 001.414 0l1.414-1.414A1 1 0 0112.414 4H16a1 1 0 011 1v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  clipRule="evenodd"
                />
              </svg>
              Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

import React, { useState, useRef } from 'react';
import axios from 'axios';

const Post = () => {
  const [content, setContent] = useState([null]);
  const contentRef = useRef(null);

  const contentHandler = async () => {
    const data = contentRef.current.value;

    try {
      const token = localStorage.getItem('yourAuthTokenKey');

      const response = await axios.post('http://127.0.0.1:8000/api/post/', {
        content: data
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log('Data sent to backend:', response.data);

      setContent(prevContent => [...prevContent, response.data.content]);
      contentRef.current.value = "";
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Write a Post</h2>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            ref={contentRef}
            id="content"
            name="content"
            rows="4"
            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm h-10"
            placeholder="Write your post..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={contentHandler}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;

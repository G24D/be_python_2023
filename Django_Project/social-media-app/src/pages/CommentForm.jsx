import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwMzU2MDg2LCJpYXQiOjE3MTAzNTU3ODYsImp0aSI6Ijk2MzZkZGU4ZTRmZjQwZDU4ZTI2M2E3ODdiZWMwYjk4IiwidXNlcl9pZCI6MTB9.E5hA8-QdnIJtF7VmPnEBtFUoKiL3yaYY5Z_ZT7DrrMM';  // Replace with your actual authentication token
    axios.defaults.headers.common['Authorization'] = `Token ${authToken}`;


    try {
      const response = await axios.post(
        `http://localhost:8000/api/post/${postId}/comment/`,
        { body: 'comment' },
        // You may need to include authentication headers if required
      );

      onCommentSubmit(response.data); // Pass the new comment data to the parent component
      setComment(''); // Clear the comment input field
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <label>Your Comment:</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;

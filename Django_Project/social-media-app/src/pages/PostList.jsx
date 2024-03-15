import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosService from "../helpers/axios";
// import CommentForm from "./CommentForm";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState('');
  const [commentClickedMap, setCommentClickedMap] = useState({})


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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/post/");
        const initialCommentClickedMap = response.data.reduce((acc, post) => {
          acc[post.id] = false;
          return acc;
        }, {});
        setCommentClickedMap(initialCommentClickedMap);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);


  const difDate = (createdDate) => {
    const currentDate = new Date();
    const differenceInMs = currentDate.getTime() - createdDate.getTime();
    const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
    return hours;
  };

  const handleLike = async (postId) => {
    console.log("ID", postId);
    try {
      if (isClicked) {
        await axiosService.post(`/post/${postId}/remove_like/`);
      } else {
        await axiosService.post(`/post/${postId}/like/`);
      }

      const response = await axiosService.get("http://localhost:8000/api/post/");
      setPosts(response.data);
      setIsClicked(!isClicked);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId) => {
    console.log('ID', postId);
    const commentObj =  {
      author: postId,
      body: 'dasdasdas',
      post: postId,
    }
    setComments(commentObj)

    try {
      await axiosService.post(`/post/${postId}/comment/`,  { body: commentObj });
      

    //   const newCommentId = (comments[postId] ? comments[postId].length : 0) + 1;
    //   const newCommentBody = commentText;

    //   setComments((prevComments) => ({
    //     ...prevComments,
    //     [postId]: [...(prevComments[postId] || []), { id: newCommentId, body: newCommentBody }],
    //   }));
          
      setCommentText('');
      
    } catch (err) {
      console.log(err);
    }
  };

  const openComment = (postId) => {
    console.log('ID', postId);
    setCommentClickedMap((prevMap) => ({
      ...prevMap,
      [postId]: !prevMap[postId],
    }));
  };

  return (
    <div className="container mx-auto">
      <button onClick={()=> {
        console.log(comments)
      }}>COMMENTS</button>
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      {posts.map((post, index) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-8 text-xl">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt="Avatar"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold">{post.author.username}</div>
              <div>{difDate(new Date(post.created))} hours ago</div>
            </div>
          </div>

          <div>
            <div className="text-gray-700 my-10">{post.body}</div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 bg-gray-300`}
              onClick={() => {
                handleLike(post.id);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700">
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.2694 16.265L20.9749 12.1852C21.1511 11.1662 20.3675 10.2342 19.3345 10.2342H14.1534C13.6399 10.2342 13.2489 9.77328 13.332 9.26598L13.9947 5.22142C14.1024 4.56435 14.0716 3.892 13.9044 3.24752C13.7659 2.71364 13.354 2.28495 12.8123 2.11093L12.6673 2.06435C12.3399 1.95918 11.9826 1.98365 11.6739 2.13239C11.3342 2.29611 11.0856 2.59473 10.9935 2.94989L10.5178 4.78374C10.3664 5.36723 10.146 5.93045 9.8617 6.46262C9.44634 7.24017 8.80416 7.86246 8.13663 8.43769L6.69789 9.67749C6.29223 10.0271 6.07919 10.5506 6.12535 11.0844L6.93752 20.4771C7.01201 21.3386 7.73231 22 8.59609 22H13.2447C16.726 22 19.697 19.5744 20.2694 16.265Z" fill="#1C274C"></path>
                  <path opacity="0.5" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#1C274C"></path>
                </g>
              </svg>
              <span className="mx-2">{post.likes_count}</span>
              Like
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800" onClick={(e) => {
              e.preventDefault();
              openComment(post.id);
            }}>
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
            {commentClickedMap[post.id] ? <div className="my-4">
              <form onSubmit={(e)=> {
                e.preventDefault();
                handleComment(post.id, commentText);
              }}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                  Your Comment:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  id="comment"
                  placeholder="Write your comment here..."
                  value={commentText}
                  onChange={(e)=> {
                    setCommentText(e.target.value);
                  }}
                /> 
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Comment
                </button>
              </form>
              
            </div> : null}
            <div>
            {comments[post.id] && comments[post.id].map((comment) => (
          <div key={comment.id}>{comment.body}</div>
        ))}
            </div>
          </div>
              
          {/* <CommentForm postId={post.id} onCommentSubmit={handleCommentSubmit} /> */}
        </div>
      ))}

    </div>
  );
};

export default PostList;

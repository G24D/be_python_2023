import React from 'react'

const Post = () => {


    const [comments, setComments] = useState([
        "This is the first comment.",
        "This is the second comment.",
        "This is the third comment."
      ]);
    return (
        <div className="container mx-auto mt-8">
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800">My Awesome Post</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis velit justo.</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      );
    }

export default Post

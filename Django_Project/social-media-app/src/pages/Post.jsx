import React, { useState, useRef } from "react";
import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";



const Post = () => {
  const [content, setContent] = useState([null]);
  const contentRef = useRef(null);

  const user = getUser()

  const contentHandler = async () => {
    const data = {
      author: user.id,
      body: contentRef.current.value,
    }

    axiosService
      .post("/post/", data)
      .then((d) => {
        console.log("1", d.data.body)
        setContent(d.data.body);
        
      })
      .catch((error) => {
        console.error(error)
      });
      
    contentRef.current.value = "";

  };

  return (
    <div className="container mx-auto my-8 max-w-[400px]">
      <div className="mx-auto bg-white shadow-md rounded-md p-6 max-w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Write a Post</h2>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
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
};


export default Post;
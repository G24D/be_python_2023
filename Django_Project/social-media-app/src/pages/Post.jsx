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
    <div className="my-8 w-[600px] ">
      <div className="bg-white shadow-md rounded-md min-h-[360px] mx-10">
        <h2 className="text-xl font-semibold mb-4 p-3 border-b-2">Write a Post</h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
          >
          </label>
          <textarea
            ref={contentRef}
            id="content"
            name="content"
            rows="4"
            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block p-3 w-full sm:text-sm h-48 placeholder:mx-4"
            placeholder="Write your post..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-4"
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
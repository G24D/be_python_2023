import React, { useState, useEffect } from "react";
import { useUserActions } from "../hooks/user.actions";
import { FaAngleDown } from "react-icons/fa";
import { getUser } from "../hooks/user.actions";
import  Post from "./Post";
import axios from "axios";
import PostList from "./PostList";
import Userlist from "./Userlist";


function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const userActions = useUserActions();
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    userActions.logout()
    console.log("Logging out...");
  };

  useEffect(() => {
    // Fetch posts from your API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/post/");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []); // Run once when the component mounts


  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const profileData = await getUser();
        setUserProfile(profileData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    }

    fetchUserProfile();

    return () => { };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>Error loading user profile.</div>;
  }

  return (
    <div className="mx-auto w-[1200px] bg-slate-200">
      <nav className="bg-amber-500 mx-auto rounded-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center justify-between h-16 gap-x-[900px]">
            <div>
              <div className="text-4xl"><a href="#" className="no-underline text-white">Postagram</a></div>
            </div>
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <img src={userProfile.avatar} alt="" />

              <div className="relative inline-block text-left">
                <div>
                  <FaAngleDown
                    type="button"
                    onClick={toggleDropdown}
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm7-5a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </FaAngleDown>
                </div>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <button
                        onClick={() => console.log("View Profile")}
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                        role="menuitem"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                        role="menuitem"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <p className="text-2xl w-64 mx-auto">Hello! {userProfile.first_name} </p>

      <div className="flex">
        <Post />
        <Userlist />
      </div>
      
      <PostList />


      </div>

  );
}

export default Home;

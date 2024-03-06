import React, { useState, useEffect } from "react";
import { useUserActions } from "../hooks/user.actions";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import getUser from '../hooks/user.actions'

function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const userActions = useUserActions();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    userActions.logout()
    console.log("Logging out...");
  };

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const profileData = await getUser();
        console.log(profileData)
        setUserProfile(profileData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    }

    fetchUserProfile();

    return () => {};
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>Error loading user profile.</div>;
  }

  return (
    <div className="w-[1400px] mx-auto">
      <nav className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={"/"}>
              <div>Postagram</div>
            </Link>
            <div>
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
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          View Profile
                        </button>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
      <p className="text-4xl">Hello! {userProfile.first_name}</p>
      <p className="text-4xl">Hello! {userProfile.avatar}</p>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import axiosService from '../helpers/axios';

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosService.get("/user/")
      .then((res)=> {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className='max-w-md mx-auto mt-8'>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img
              src={user.avatar}
              alt="Avatar"
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold">{user.username}</div>
              <div className="text-gray-600">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Userlist;

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const AdminLogIn = () => {
     const [inputValue, setInputValue] = useState();
     const value = "admin";
     const navigate = useNavigate();
     function adminValue(e) {
       e.preventDefault();
       setInputValue(e.target.value);
     }
     function submitHandle() {
       if (value === inputValue) {
         navigate("/userData");
       } else {
         alert("incorrect value");
       }
     }
     function userRegister(){
        navigate("/register");
     }
  return (
    <div>
      <h1
        onClick={userRegister}
        className="w-full text-center bg-slate-900 text-white my-2 py-2 cursor-pointer"
      >
        {" "}
        user register{" "}
      </h1>
      <div className=" flex items-center justify-center h-screen ">
        <div className={`bg-white  p-8 rounded-lg shadow-md w-96 `}>
          <h1 className="text-2xl font-semibold mb-6">Admin Sign In</h1>
          <form onSubmit={submitHandle}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={adminValue}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={adminValue}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogIn
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    existingUsers.push(formData);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    alert("Registration successful!");
    navigate("/");
  };
function adminLogIn(){
  navigate('/adminLogin')
}
  return (
    <>
        <h1 onClick={adminLogIn} className="w-full text-center bg-slate-900 text-white my-2 py-2 cursor-pointer"> admin log in </h1>
      <div className=" flex items-center justify-center h-[70vh]">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-6">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
            <Link to="/">
              {" "}
              <p className="text-center">Sign In</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = ({formData,setFormData}) => {

const navigate = useNavigate()
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSignIn = (e) => {
  e.preventDefault();
  const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  const foundUser = storedUsers.find(
    (user) =>
      user.email === formData.email && user.password === formData.password
  );

  if (foundUser) {
    alert("Sign-in successful!");
    navigate("/dashboard");
    
  } else {
    alert("Incorrect email or password. Please try again.");
  }
};


  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
        <form onSubmit={handleSignIn}>
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
            Sign In
          </button>
          <Link to="/register">
            {" "}
            <p className="text-center">Register</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

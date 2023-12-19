import React from 'react'
import { Link } from 'react-router-dom';

const UserData = () => {
     const totalUser =
       JSON.parse(localStorage.getItem("registeredUsers")) || [];
       console.log(totalUser,'total user');
  return (
    <div>
      <div className="overflow-x-auto">
        <Link to="/register">
          <button className='w-full bg-blue-500 text-center rounded-lg my-6 text-white py-2'>back </button>
        </Link>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">password</th>
            </tr>
          </thead>
          {totalUser.map((item) => (
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.password}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default UserData
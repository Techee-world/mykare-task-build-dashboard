import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ displayForm }) => {
  const [inputValue , setInputValue] = useState()
  const value = "admin";
  const  navigate = useNavigate()
  function adminValue(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  function submitHandle(){
    if(value === inputValue){
      navigate("/userData");
    }else{
      alert('incorrect value')
    }
  }
  return (
    <div className="">
      <main className="md:ml-36 pt-2 max-h-screen overflow-auto">
        <div className="px-6 py-2">
          <div className="max-w-4xl mx-auto">
            <div className=" rounded-3xl md:p-8 mb-5">
              <h1 className="text-2xl font-bold mb-4 uppercase">welcome !</h1>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

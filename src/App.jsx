import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashPage from "./page/DashPage";
import SignIn from "./component/Sign-in";
import Register from "./component/Register";
import UserData from "./component/UserData";
import AdminLogIn from "./component/AdminLogIn";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData, "tis is email data");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SignIn formData={formData} setFormData={setFormData} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashPage newData={formData} />} />
          <Route path="/userData" element={<UserData />} />
          <Route path="/adminLogIn" element={<AdminLogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
// import Admin from './component/Admin'
import Form from "./component/Form";
import Ewallet from "./component/Ewallet";
import Customer from "./component/Customer";
// import Addmoney from './component/Addmoney'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/registration" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ewallet" element={<Ewallet />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

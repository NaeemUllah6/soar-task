import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/sidebar.jsx";
import Settings from "./pages/settings.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Header from "./layout/header.jsx";
import './index.css'


const App = () => {
  return (

    <div className="bg-[#EFF3F9]">
      <Router>
        <div className="py-5 z-40 ps-[20px] bg-white fixed top-0 right-0 w-full lg:w-[calc(100%-250px)] border-b-2 border-[#E6EFF5]">
          <Header headerHeading />
        </div>
        <div className="flex justify-start gap-2 bg-white lg:bg-transparent ">
          {/* Sidebar */}
          <div className=" z-50 max-w-[250px] custom-scrollbar overflow-auto lg:border-r-2 h-[100%] fixed ">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className=" w-full lg:w-[calc(100%-250px)] px-[18px] md:px-[26px] mt-[90px] md:mt-[120px] lg:px-[36px]  lg:mt-[130px]  lg:ms-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<div>Transactions Page</div>} />
              <Route path="/accounts" element={<div>Accounts Page</div>} />
              <Route path="/investments" element={<div>Investments Page</div>} />
              <Route path="/credit-cards" element={<div>Credit Cards Page</div>} />
              <Route path="/loans" element={<div>Loans Page</div>} />
              <Route path="/services" element={<div>Services Page</div>} />
              <Route path="/privileges" element={<div>Privileges Page</div>} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

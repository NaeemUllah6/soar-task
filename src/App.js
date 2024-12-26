import React from "react";
import Sidebar from "./layout/sidebar.jsx";
import Header from "./layout/header.jsx";
import Settings from "./pages/settings.jsx";
import Dashboard from "./pages/dashboard.jsx";
import PageNotFound from "./pages/not-found.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const Routerss = [
    { path: "/", element: <Dashboard /> },
    { path: "/transactions", element: <PageNotFound /> },
    { path: "/accounts", element: <PageNotFound /> },
    { path: "/investments", element: <PageNotFound /> },
    { path: "/credit-cards", element: <PageNotFound /> },
    { path: "/loans", element: <PageNotFound /> },
    { path: "/services", element: <PageNotFound /> },
    { path: "/my-privileges", element: <PageNotFound /> },
    { path: "/settings", element: <Settings /> },
  ];

  return (
    <Router>
      <div className="bg-white lg:bg-[#EFF3F9]">
        {/* Header */}
        <div className="py-5 z-40 ps-[20px] bg-white fixed top-0 right-0 w-full lg:w-[calc(100%-250px)] border-b-2 border-[#E6EFF5]">
          <Header headerHeading="Your Header Title" />
        </div>

        <div className="flex justify-start gap-2 bg-white lg:bg-transparent">
          {/* Sidebar */}
          <div className="z-50 max-w-[250px] custom-scrollbar overflow-auto lg:border-r-2 h-[100%] fixed">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:w-[calc(100%-250px)] lg:ms-auto">
            <div className="w-full px-[18px] md:px-[26px] mt-[90px] md:mt-[120px] lg:px-[36px] lg:mt-[130px]">
              {/* Define Routes */}
              <Routes>
                {Routerss.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;


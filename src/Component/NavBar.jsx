import React, { useState } from "react";
import {  Menu, X } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ isLoggedIn = false, username = "User" }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">

       
        <div className="flex items-center gap-2 font-semibold text-gray-900">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 flex items-center justify-center shadow-md shadow-slate-300/50">
          <Sparkles size={20} color="white" />
        </div>

          {isLoggedIn && (
          <Link
            to="/home"
            className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200">
            Home
          </Link>
        )}

        </div>

        <div className="hidden md:flex items-center gap-6">

          {!isLoggedIn ? (
            <>
            <Link to ="/explore"
            className="px-4 py-1.5 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium transition duration-200 hover:bg-black hover:text-white">
              How it Works
            </Link>
              
            <Link 
                to="/login"
                className="px-4 py-1.5 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium transition duration-200 hover:bg-black hover:text-white"
              >
                Log In
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-700">{username}</span>
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition duration-200"
              >
                Log Out
              </button>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

 
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200">
          <div className="flex flex-col items-center py-4 space-y-4">
            {!isLoggedIn ? (
              <>
              <Link to ="/explore"
            className="px-4 py-1.5 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium transition duration-200 hover:bg-black hover:text-white">
              How it Works
            </Link>
              <Link
                to="/login"
                className="px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              </>
            ) : (
              <>
                <span className="text-gray-700">{username}</span>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition duration-200"
                >
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

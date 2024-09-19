import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-indigo-600"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">Uptime Monitor</h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick={toggleSidebar}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          {/* Search Input */}
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>

          {/* Links */}
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-700 text-white">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-700 text-white">
            <i className="bi bi-speedometer2"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Metric</span>
          </div>

          <div className="my-4 bg-gray-600 h-[1px]"></div>

          {/* Chatbox Dropdown */}
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-700 text-white"
            onClick={toggleDropdown}
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
              <span className={`text-sm ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} id="arrow">
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>

          {/* Dropdown Submenu */}
          {isDropdownOpen && (
            <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
              <h1 className="cursor-pointer p-2 hover:bg-indigo-700 rounded-md mt-1">Social</h1>
              <h1 className="cursor-pointer p-2 hover:bg-indigo-700 rounded-md mt-1">Personal</h1>
              <h1 className="cursor-pointer p-2 hover:bg-indigo-700 rounded-md mt-1">Friends</h1>
            </div>
          )}

          {/* Logout */}
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-700 text-white">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

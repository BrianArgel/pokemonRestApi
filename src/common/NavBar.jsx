import React from "react";
import { FiLogOut } from "react-icons/fi";
import { logout } from "@/utils/logout";

export const NavBar = () => {

  /**
   * Logs the user out and reloads the current window to clear the session.
   */
  
  const handleLogout = () => {
    logout();
    window.location.reload();
  }

  return (
    <nav className="bg-green-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold  italic">PokeMundial</div>
          <div>
            <button
              className="hover:text-green-300 transition duration-300 ease-in-out flex items-center"
              onClick={handleLogout}
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


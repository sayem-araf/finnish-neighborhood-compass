
import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <MapPin size={24} className="text-finland-blue" />
          <span className="font-bold text-xl">Naapuristo Kompassi</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-finland-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/finder"
                className="text-gray-600 hover:text-finland-blue transition-colors"
              >
                Neighborhood Finder
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-finland-blue transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

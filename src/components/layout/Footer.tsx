
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-finland-snow border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Neighborhood Compass</h3>
            <p className="text-sm text-gray-600 max-w-md">
              Helping you find the perfect neighborhood in Finland based on environmental 
              factors and your personal preferences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-finland-blue transition-colors"
                  >
                    Data Sources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-finland-blue transition-colors"
                  >
                    Methodology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-finland-blue transition-colors"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-finland-blue transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-finland-blue transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Finnish Neighborhood Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

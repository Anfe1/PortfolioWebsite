import { Link } from "react-router-dom";
import { useState } from "react";

import resume from "../documents/Andy_Fernandez_Resume.docx.pdf";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="header z-50 bg-teal-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <button
          onClick={handleClick}
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm bg-teal-700 rounded-lg md:hidden hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <Link className="text-3xl " to="#home">
          Andy Fernandez
        </Link>

        <button
          className=" bg-teal-400 hover:bg-teal-900 rounded-full px-4 py-1  border-teal-800 border-4"
          role="link"
          onClick={() => openInNewTab(resume)}
        >
          Resume
        </button>
      </div>
      <div className={isExpanded ? "active md:hidden" : "hidden"}>
        <ul>
          <li className="p-4">
            <Link to="#home" className="hover:underline text-lg">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link to="#honors" className="hover:underline text-lg">
              Skills
            </Link>
          </li>
          <li className="p-4">
            <Link to="#certs" className="hover:underline text-lg">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

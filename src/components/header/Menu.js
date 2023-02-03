import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li className="p-4">
        <Link to="#home" className="hover:underline">
          Home
        </Link>
      </li>
      <li className="p-4">
        <Link to="#honors" className="hover:underline">
          Skills
        </Link>
      </li>
      <li className="p-4">
        <Link to="#certs" className="hover:underline">
          Projects
        </Link>
      </li>
    </ul>
  );
}

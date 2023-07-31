import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="flex flex-col sidebar h-full bg-slate-700 text-slate-100">
      <li className="nav-item py-2 m-2 text-xl" id="dashboard">
        <Link to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item  py-2 m-2 text-xl" id="profile">
        <Link to="/profile">
          <i className="fas fa-fw fa-user"></i>
          <span>My Profile</span>
        </Link>
      </li>
      <li className="nav-item  py-2 m-2 text-xl" id="product">
        <Link to="/myproducts">
          <i className="fa fa-plus-square" aria-hidden="true"></i>
          <span>My Products</span>
        </Link>
      </li>
      {/* You can uncomment the following li items if needed */}
      {/* 
  <li className="nav-item">
    <a className="nav-link" href="https://demoscad.net/demoscad/portal/user/Assignment">
      <i className="fa fa-tasks" aria-hidden="true"></i>
      <span>Assignment</span>
    </a>
  </li>
  */}
      <li className="nav-item  py-2 m-2 text-xl" id="project">
        <Link to="/project"
        >
          <i className="fas fa-fw fa-table"></i>
          <span>Upload Project</span>
        </Link>
      </li>
      <li className="nav-item  py-2 m-2 text-xl" id="my_projects">
        <Link to="/myprojects"
        >
          <i className="fas fa-fw fa-table"></i>
          <span>My Projects</span>
        </Link>
      </li>
      <li className="nav-item  py-2 m-2 text-xl" id="password">
        <Link to="/changepassword"
        >
          <i className="fas fa-fw fa-table"></i>
          <span>Change Password</span>
        </Link>
      </li>
      <li className="nav-item  py-2 m-2 text-xl" id="logout">
        <Link to="/logout"
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Log Out</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;

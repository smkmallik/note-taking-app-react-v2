import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "active-link md-pd aside-heading  "
      : "inactive-link md-pd aside-heading  ";
  };

  return (
    <>
      <div className='sidebar md-margin'>
        <NavLink to='/homePage' className={activeStyle}>
          Home
        </NavLink>
        <NavLink to='/labels' className={activeStyle}>
          Labels
        </NavLink>
        <NavLink to='/archive' className={activeStyle}>
          Archive
        </NavLink>
        <NavLink to='/trash' className={activeStyle}>
          Trash
        </NavLink>
        <button className='md-pd '>Create New Note</button>
      </div>
    </>
  );
};
export { Sidebar };

import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../StateProvider";
import Avatar from "@mui/material/Avatar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import './sidebar.css'

function Sidebar() {

    const navigate = useNavigate();
    const { user, logoutUser } = useUserContext();

  return (
    <div className="dashboard_left">
      <div className="dashboard_leftHeader">
        <Avatar onClick={() => navigate("/setting")}>
          {user.displayName.charAt(0)}
        </Avatar>
        <h1>{user.displayName}</h1>
      </div>
      <div className="dashboard_leftSection">
        <ul>
          <Link to="/">
            <li>
              <HomeOutlinedIcon />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <AccountCircleOutlinedIcon />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/todo">
            <li>
              <CalendarMonthOutlinedIcon />
              <span>To-do List</span>
            </li>
          </Link>
          <Link to="/setting">
            <li>
              <SettingsOutlinedIcon />
              <span>Setting</span>
            </li>
          </Link>
        </ul>
      </div>
      <IconButton className="signout" onClick={logoutUser}>
        <LogoutIcon style={{ fontSize: "32px" }} />
      </IconButton>
    </div>
  );
}

export default Sidebar
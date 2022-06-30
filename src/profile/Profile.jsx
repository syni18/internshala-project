import React from "react";
import { useUserContext } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { IconButton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Sidebar from "../dashboard/Sidebar";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <Sidebar/>
        <div className="dashboard_body">
          <div className="profile_header">
            <h1>Profile</h1>
            <IconButton
              style={{ marginRight: "65px" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ManageAccountsOutlinedIcon style={{ fontSize: "32px" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px  2px 8px rgba(0,0,0,0.32))",
                  mt: 1.0,
                  p: 0.3,
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "left", vertical: "top" }}
            >
              <MenuItem onClick={()=>navigate('/forget')}>Forget Password</MenuItem>
            </Menu>
          </div>
          <div className="profile_section">
            <p>
              Name
              <i>{user.displayName}</i>
            </p>
            <p>
              Email
              <i>{user.email}</i>
            </p>
            <p>
              Password
              <i>********</i>
            </p>
            <p>
              Job
              <i>web develpoer</i>
            </p>
          </div>
          <div className="profile_footer">
            <h2>Social Media</h2>
            <div className="profile_account">
              <IconButton href="https://www.linkedin.com/in/saini-18/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/syni18">
                <GitHubIcon />
              </IconButton>
              <IconButton href="mail.google.com">
                <AlternateEmailIcon />
              </IconButton>
              <IconButton href="mail.google.com">
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

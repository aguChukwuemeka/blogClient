import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { VscAccount } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaRegRegistered } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { GoSignIn, GoSignOut } from "react-icons/go";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let registered = true;
  let signIn = true;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IconContext.Provider value={{ className: "shared-class", size: 24 }}>
          <VscAccount />
        </IconContext.Provider>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {registered ? (
          <>
            {signIn && (
              <MenuItem onClick={handleClose} as={Link} to="/profile">
                <ImProfile className="mr-2" />
                Profile
              </MenuItem>
            )}
            {signIn && (
              <MenuItem onClick={handleClose} as={Link} to="/account">
                <RiAccountPinBoxLine className="mr-2" />
                My account
              </MenuItem>
            )}
            {!signIn ? (
              <MenuItem onClick={handleClose} as={Link} to="/signin">
                <GoSignIn className="mr-2" />
                Sign in
              </MenuItem>
            ) : (
              <MenuItem onClick={handleClose} as={Link} to="/logout">
                <GoSignOut className="mr-2" />
                Sign out
              </MenuItem>
            )}
          </>
        ) : (
          <MenuItem as={Link} to="/registered">
            <SiGnuprivacyguard className="mr-2" />
            <FaRegRegistered className="mr-2" />
            Sign up
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
// FaRegisteredButton;
// FaRegRegistered;

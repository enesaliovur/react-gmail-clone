import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineTwoToneIcon from "@material-ui/icons/HelpOutlineTwoTone";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Postlarda arayın" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineTwoToneIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

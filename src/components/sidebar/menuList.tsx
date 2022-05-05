import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import ColorModeContext from "../../context/colorModeContext";

const MenuListIcon = (props: { name: string }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return props.name === "dashboard" ? (
    <DashboardIcon />
  ) : props.name === "profile" ? (
    <AccountBoxIcon />
  ) : props.name === "paletteMode" ? (
    theme.palette.mode === "dark" ? (
      <Brightness7Icon onClick={colorMode.toggleColorMode} />
    ) : (
      <Brightness4Icon onClick={colorMode.toggleColorMode} />
    )
  ) : (
    <></>
  );
};

const MenuList = (props: { open: boolean }) => {
  const theme = useTheme();

  const menuList = [
    { name: "dashboard", title: "ダッシュボード" },
    { name: "profile", title: "プロフィール" },
    { name: "paletteMode", title: theme.palette.mode + " mode" },
  ];

  return (
    <>
      {menuList.map((menu, index) => (
        <ListItemButton
          key={index}
          sx={{
            minHeight: 48,
            justifyContent: props.open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <MenuListIcon name={menu.name} />
          </ListItemIcon>
          <ListItemText
            primary={menu.title}
            sx={{ opacity: props.open ? 1 : 0 }}
          />
        </ListItemButton>
      ))}
    </>
  );
};

export default MenuList;
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CoffeeIcon from "@mui/icons-material/Coffee";
import React from "react";

type MenuItem = {
  name: string;
  url: string;
  icon: React.ReactNode;
};
const menuList: MenuItem[] = [
  { name: "ページ１", url: "/page1", icon: <BeachAccessIcon /> },
  { name: "ページ２", url: "/page2", icon: <CoffeeIcon /> },
];

const drawerWidth = 240;

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuList.map(({ name, url, icon }: MenuItem) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <Link href={url} underline="none" color="inherit">
                  {name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;

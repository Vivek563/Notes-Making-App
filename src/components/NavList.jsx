import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const NavList = ({ open }) => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <LightbulbOutlinedIcon color="primary" />,
      route: "/",
    },
    {
      id: 2,
      name: "Starred",
      icon: <StarOutlineOutlinedIcon color="primary" />,
      route: "/starred",
    },
    {
      id: 3,
      name: "Archived",
      icon: <ArchiveOutlinedIcon color="primary" />,
      route: "/archived",
    },
    {
      id: 4,
      name: "Trash",
      icon: <DeleteOutlinedIcon color="primary" />,
      route: "/trashed",
    },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
          <Link
            to={list.route}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                primary={list.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;

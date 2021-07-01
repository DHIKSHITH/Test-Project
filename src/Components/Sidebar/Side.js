import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchBar from "material-ui-search-bar";

import { CardComponent } from "../Card/CardComponent";
import { SmallCard } from "../Card/SmallCard";
import { TableComponent } from "../Table/Table";
import { MediumCard } from "../Card/MediumCard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#0F0F64",
    color: "white"
  },
  content: {
    // flexGrow: 1,
    height: "100vh",
    width: "100%",
    padding: theme.spacing(12),
    backgroundColor: "#0F0F64",
    color: "white"
  }
}));

export const Side = (props) => {
  const [view, setView] = React.useState("dashboard");
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["DashBoard", "Table", "Chat"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              if (index === 0) {
                setView("dashboard");
              } else if (index === 1) {
                setView("table");
              } else {
                setView("cards");
              }
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon style={{ fill: "white" }} />
              ) : (
                <MailIcon style={{ fill: "white" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon style={{ fill: "white" }} />
              ) : (
                <MailIcon style={{ fill: "white" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        // color="transparent"
        style={{ backgroundColor: "#00003E" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <form className={classes.root} noValidate autoComplete="off">
            <SearchBar
              value=""
              placeholder="Search"
              style={{ backgroundColor: "#2A2A8A", color: "white" }}
            />
          </form>
          <Button color="inherit">Mega Menu</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        {view === "dashboard" ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CardComponent />
            <div
              style={{
                height: "30%",
                display: "flex",
                width: "100%",
                justifyContent: "space-around"
              }}
            >
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        ) : view === "table" ? (
          <TableComponent />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "25rem"
            }}
          >
            <MediumCard heading="Social Source" />
            <MediumCard heading="Activity" />
            <MediumCard heading="Top Cities" />
          </div>
        )}
      </div>
    </div>
  );
};

Side.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

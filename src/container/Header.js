import React from "react";
import Logo from "../image/interview.svg";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  actionButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <IconButton>
          <img
            src={Logo}
            alt="Interview Logo"
            style={{
              width: "36px",
              height: "36px",
              // borderRadius: "24px",
            }}
          ></img>
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit">
          Faking Interview
        </Typography>
        <div className={classes.actionButton}>
          <Button color="primary" variant="outlined" disableElevation={true}>
            Register
          </Button>
          <Button color="primary" variant="contained" disableElevation={true}>
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

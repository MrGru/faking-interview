import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    borderRadius: 24,
    alignSelf: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.root}
      elevation={1}
      square={false}
    >
      <InputBase
        className={classes.input}
        placeholder="Search Question"
        inputProps={{ "aria-label": "search question" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

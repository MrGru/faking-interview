import React from "react";
import "./App.css";
import mock from "./mock";
import Card from "./component/Card";
import Header from "./container/Header";
import Footer from "./container/Footer";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import Logo from "./image/interview.svg";
import SearchBar from "./component/SearchBar";
import Menu from "./component/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "16px",
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

function App() {
  console.log("render App");
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid container spacing={1} className={classes.root}>
        <Grid
          item
          container
          xs={6}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Container
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" style={{ alignSelf: "center" }}>
              Question and Answer in the Interview
            </Typography>
            <Typography variant="subtitle2">
              You know everything, you do everything, but you cannot decrible
              anything đây là nội dung dài, Cần cập nhật thêm
            </Typography>
          </Container>
        </Grid>
        <Grid container item xs={6} justify="center">
          <img
            src={Logo}
            alt="Interview Logo"
            style={{
              width: "128px",
              height: "128px",
              // borderRadius: "24px",
            }}
          ></img>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </div>
      <Container
        style={{ flexDirection: "row", display: "flex", padding: "16px" }}
        spacing={1}
      >
        {mock.menu.map((item, index) => {
          return <Menu key={index} item={item} />;
        })}
      </Container>

      <div className="row">
        <div className="leftcolumn">
          {mock.data.map((value, index) => {
            return <Card key={index} index={index} value={value} />;
          })}
        </div>
        <div className="rightcolumn">
          <p>abac</p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    background: "#f8fbfd;",
  },
  wrapper: {
    margin: "auto",
    width: "60%",
  },
  block: {
    padding: "10px",
    width: "100%",
    "& h3": {
      fontSize: "13px",
      color: "#374048",
    },
    "& p": {
      fontSize: "12px",
      color: "#737c85",
    },
  },
  content: {
    margin: "auto",
    maxWidth: "700px",
    paddingLeft: "20px",
    paddingRight: "20px",
    "& ul": {
      margin: 0,
      padding: 10,
      "& li": {
        padding: 10,
        paddingLeft: "50px",
        textAlign: "left",
        listStyleType: "circle",
        listStylePosition: "inside",
      },
    },
  },
}));

export default function TextList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="title">
          <strong>
            <h3>ENTRY</h3>
          </strong>
          <p className="subtitle">エントリー</p>
        </Typography>
        <Grid container spacing={1}>
          {props.data.items.map((item, index) => {
            return (
              <Grid item xs={6}>
                <div className={classes.block}>
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}

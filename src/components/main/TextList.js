import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Heading from "./Heading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    background: "#f8fbfd;",
  },
  wrapper: {
    margin: "auto",
    width: "70%",
  },
  block: {
    paddingTop: "30px",
    paddingBottom:"60px",
    width: "100%",

    "& h3": {
      textAlign:"left",
      paddingLeft:"18px",
      fontSize: "18px",
      color: "#374048",
    },
    "& p": {
      paddingTop: "15px",
      fontSize: "14px",
      color: "#737c85",
      textAlign:"left",
    },
  },
  reason: {
    position: "relative",
    fontSize: "18px",
    textAlign: "left",
    color:"#374048",
  },
  
  
}));

export default function TextList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <Heading data={props.data} />
        <Grid container spacing={1}>
          {props.data.items.map((item, index) => {
            return (
              <Grid item xs={12} sm={6}>
                <div className={classes.block}>
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>

        <Grid item xs={12}className ={classes.foot}>
          <p className={classes.reason}>{props.data.reason}</p>
        </Grid>
      </div>
    </section>
  );
}


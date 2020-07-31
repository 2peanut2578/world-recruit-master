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
    padding: "5px 5px 5px 5px",
    width: "100%",
    textAlign: "justify",
    "& p": {
      fontSize: "14px",
      color: "#737c85",
    },
  },
  subtitle: {
    position: "relative",
    fontSize: "12px",
    padding: "-20px 0 50px 0",
    color: `rgba(0,0,0,0.6)`,
    "&:after": {
      content: `' '`,
      position: "absolute",
      bottom: -5,
      left: "30%",
      width: "40%",
      height: "1px",
      background: "#A0A6AF",
    },
  },
  reason: {
    position: "relative",
    fontSize: "15px",
    textAlign: "justify",
    color: `rgba(0,0,0,0.6)`,
  },
  content:{
    padding: "10px",
  },
}));

export default function TextList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="title">
          <strong>
            <h3>{props.data.title}</h3>
          </strong>
          <p className={classes.subtitle}>{props.data.subtitle}</p>
        </Typography>
        <Grid container spacing={1} className={classes.content}>
          {props.data.items.map((item, index) => {
            return (
              <Grid item xs={6}>
                <div className={classes.block}>                  
                  <p>{item.para}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <Grid justify="center" item xs={12} sm={12}>
          <Typography variant="body1">
            <p className={classes.reason}>{props.data.reason}</p>
          </Typography>
        </Grid>
      </div>
    </section>
  );
}

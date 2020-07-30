import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableInfo from "./Table";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import SingleLineGridList from "./ImageList";

function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    maxWidth: '100%',
    backgroundSize: "cover",
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1200,
  },
  p: {
    margin: "auto",
  },
}));

export default function Image(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
          <strong>
            <h2>{props.data.title}</h2>
          </strong>
          <hr width="100%" align="center" />
        </Grid >
      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
            <img
              className={classes.image}
              src={getImgPath(props.data.src)}
              alt={props.data.alt}
            />
        </Grid>
        <Grid item xs ={6}>
          <p className={classes.p}>{props.data.text}</p>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>  
          <TableInfo />
        </Grid>
        <Grid item xs={6}>  
        <img
              className={classes.image}
              src={getImgPath(props.data.src)}
              alt={props.data.alt}
            />
        </Grid>
      </Grid>     
    </div>
  );
}

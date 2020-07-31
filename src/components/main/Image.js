import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableInfo from "./Table";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Heading from "./Heading";

function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "50px auto",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1200,
  },
  text: {
    marginBottom: "20px",
    textAlign: "justify",
    lineHeight: "1.8",
    paddingLeft: "10px",
  },
}));

export default function Image(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Heading data={props.data} />
      <TableInfo />
      <Grid container>
        <Grid
          justify="center"
          item
          xs={12}
          sm={6}
          style={{ margin: "0px 0 50px 0" }}
        >
          <img
            className={classes.image}
            src={getImgPath(props.data.src)}
            alt={props.data.alt}
          />
        </Grid>

        <Grid justify="center" item xs={12} sm={6}>
          {props.data.paragraphs.map((paragraph, index) => (
            <Typography className={classes.text} variant="body1" key={index}>
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

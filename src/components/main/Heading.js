import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "10px",
    "& h3": {
      fontSize: "2em",
      boderBottom: "1px solid yellow",
    },
    "& p": {
      fontSize: "1.1em",
    },
  },
}));

export default function Heading(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant="title">
          <h3>{props.data.heading}</h3>
          <p className="subtitle">{props.data.subHeading}</p>
        </Typography>
      </div>
    </React.Fragment>
  );
}

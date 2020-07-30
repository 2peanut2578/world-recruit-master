import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"5px",
    },
    content:{
      margin: "auto",
      maxWidth: "700px",
      paddingLeft: "20px",
      paddingRight: "20px",
      '& ul': {
        margin: 0,
        padding: 10,
      '& li': {
        padding: 10,
        paddingLeft: "50px",
        textAlign: "left",
        listStyleType: "circle",
        listStylePosition: "inside",
      }}
    },
    heading:{
      fontSize:"20px",
      paddingTop:"0px",
      paddingBottom:"0px",
      '&:hover': {
        backgroundColor: "#fff",
        fontSize:"40px",
    },
    },
    reason:{
      fontStyle:"italic"
    }
}));

export default function TextList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <span classes={classes.heading}>
              {props.data.heading}</span>
            <ul>
              {props.data.items.map((item, index)=>{
                return <li key={index} className={classes.li}>{item.para}</li>
              })}
            </ul>
            <p className={classes.reason}>{props.data.reason}</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 30px"
  },
  width: {
    maxWidth: 345,
    margin: "0 30px",
  },
  media: {
    height: 200,    
    maxHeight: "150px",
  },
  text: {
    textAlign: 'left',
    fontWeight: "bold",
    marginLeft: "-10px",
    fontSize: "12px",
    height: 120,
  }
}));
export default function ViewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <h2>{props.data.heading}</h2>
      <Grid container spacing={3}>
      {props.data.paragraphs.map((para, index) => {
              return (
        <Grid item sm={4} key={index}>
        <Card className={classes.width}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={getImgPath(para.image.src)}
          title={para.image.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {para.person}
          </Typography>
          <Typography 
          className={classes.text}
          variant="body2" color="textSecondary" 
          component="p"
          children
          >
          {para.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
    );
            })}
      </Grid>
    </div>
  );
}
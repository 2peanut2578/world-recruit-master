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
    maxWidth: 500,
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
  },

   subtitle: {
    position: "relative",
    fontSize: "12px",
    padding: "-20px 0 50px 0",
    color: `rgba(0,0,0,0.6)`,
    '&:after': {
      content: `' '`,
      position: "absolute",
      bottom: -5,
      left: "40%",
      width: "20%",
      height: "1.2px",
      background: "#A0A6AF",
  },
  }
}));
export default function ViewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
              <Typography variant="title">
          <strong><h3>{props.data.title}</h3></strong>
          <p className= {classes.subtitle}>{props.data.subtitle}</p>
        </Typography>
      
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
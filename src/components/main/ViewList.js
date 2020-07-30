import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  width: {
    maxWidth: 345,
    margin: "0 30px",
  },
  media: {
    height: 160,
    padding: theme.spacing(2),
    textAlign: 'center',
    maxHeight: "150px",
  },
  scroll:{
    height: 110,
    overflow: "auto"
  }
}));

export default function ViewList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <h3>{props.data.heading}</h3>
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
          <Typography variant="body2" color="textSecondary" 
          component="p" className={classes.scroll}>
          {para.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          Share
        </Button>
        <Button size="small" color="primary">
          View More
        </Button>
      </CardActions>
    </Card>
    
        </Grid>
    );
            })}
          
      </Grid>
    </div>
  );
}




import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
<<<<<<< HEAD
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
=======
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
>>>>>>> 0d9bee332d5354e4166638e95abe11f7071c3606
import Typography from '@material-ui/core/Typography';
function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}

<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 30px"
=======

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
>>>>>>> 0d9bee332d5354e4166638e95abe11f7071c3606
  },
  width: {
    maxWidth: 345,
    margin: "0 30px",
  },
  media: {
<<<<<<< HEAD
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
=======
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

>>>>>>> 0d9bee332d5354e4166638e95abe11f7071c3606
export default function ViewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
<<<<<<< HEAD
       <h2>{props.data.heading}</h2>
      <Grid container spacing={3}>
=======
       <h3>{props.data.heading}</h3>
      <Grid container spacing={3}>
     
>>>>>>> 0d9bee332d5354e4166638e95abe11f7071c3606
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
<<<<<<< HEAD
          <Typography 
          className={classes.text}
          variant="body2" color="textSecondary" 
          component="p"
          children
          >
=======
          <Typography variant="body2" color="textSecondary" 
          component="p" className={classes.scroll}>
>>>>>>> 0d9bee332d5354e4166638e95abe11f7071c3606
          {para.text}
          </Typography>
        </CardContent>
      </CardActionArea>
<<<<<<< HEAD
    </Card>
        </Grid>
    );
            })}
      </Grid>
    </div>
  );
}
=======
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



>>>>>>> 0d9bee332d5354e4166638e95abe11f7071c3606

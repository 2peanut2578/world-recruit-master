import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import { HomeOutlined, DetailsOutlined, GroupWorkOutlined, RecordVoiceOverOutlined, BusinessCenterOutlined, MenuOpenRounded} from '@material-ui/icons';

import Background from "../../img/background.png"
import Logo from "../../img/logo.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgImg: {
    backgroundImage: `url(${Background})`,
    maxWidth: '100%',
    backgroundSize: "cover",
    paddingBottom: "45%",
    position: "relative",
  },
  container: {
    position: "absolute",
    maxWidth: '100%',
    backgroundColor: `rgba(0,0,0,0.2)`,
  },
  topNav: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      overflow: "hidden",
      display: 'flex',
    },
    '& a': {
      position: "relative",
      padding: "14px 20px",
      color: "#fff",
      textDecoration: "none",
      fontSize: "20px",
      '&::before': {
          content: `' '`,
          position: "absolute",
          bottom: "15px",
          left: "20px",
          width: "70%",
          height: "10px",
          background: "#388CFB",
          zIndex: "-1",
          transform: `scaleX(0)`,
          transformOrigin: "left",
          transition: `transform 0.5s`,
      },
      '&:hover::before' : {
        transform: `scaleX(1)`,
      },
    }
  },
  logo: {
    display: 'block',
    margin: "10px",
    maxWidth: '100%',
    maxHeight: '100%',
    
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toggle: {
    color: "#fff",
    fontSize: "50px",
  },
  sidebar: {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "auto",
      border: "none",
      '& ul': {
          margin: 0,
          padding: 0,
        '& li': {
          textAlign: "center",
          listStyleType: "none",
          '& a': {
              position: "relative",
              color: "#fff",
              fontSize: "28px",
              textDecoration: "none",
              margin: "50px 0px",
              display: "block",
              textShadow: `0 2px 5px rgba(0,0,0,.5)`,
              '&::before': {
                  content: `' '`,
                  position: "absolute",
                  bottom: "5px",
                  left: "-10px",
                  width: "100%",
                  height: "10px",
                  background: "#ffeb3b",
                  zIndex: "-1",
                  transform: `scaleX(0)`,
                  transformOrigin: "left",
                  transition: `transform 0.5s`,
              },
              '&:hover::before' : {
                  transform: `scaleX(1)`,
              }
          }
        }
      },
      [theme.breakpoints.up('sm')]: {
        display: "none",
      },
  },
  dialog: {
    [theme.breakpoints.up('sm')]: {
      display: "none",
    },
  },
  icon: {
    margin: "-4px 5px -4px 0px"
  }
}));

function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar 
            position="sticky"
            color = "transparent"
      >
        <Grid container className={classes.container}>
            <Grid item xs container justify="flex-start" alignItems="center">
              <ButtonBase>
                <img className={classes.logo} alt="complex" src={Logo} />
              </ButtonBase>
            </Grid>
            <Grid item xs={9} container direction="row" justify="flex-end" alignItems="center" className={classes.topNav}>
                <a href="#home"><HomeOutlined className={classes.icon}/>Home</a>
                <a href="#corporate"><GroupWorkOutlined className={classes.icon} />Corporate</a>
                <a href="#about"><DetailsOutlined className={classes.icon} />About</a>
                <a href="#interview"><RecordVoiceOverOutlined className={classes.icon} />Interview</a>
                <a href="#entry"><BusinessCenterOutlined className={classes.icon} />Entry</a>
            </Grid>
            <Grid item xs className={classes.menuButton}>
                <IconButton
                    edge = "end"
                    selected={open}
                    onChange={() => {
                        setOpen(!open);
                    }}
                >
                    <MenuOpenRounded  className= {classes.toggle} />
                </IconButton>
            
                <Grid container>
                    <Grid item xs>
                        <Menu 
                            width={ '50%' } 
                            right 
                            disableCloseOnEsc 
                            disableOverlayClick
                            isOpen={open}  
                            onStateChange={() => { setOpen(!open);}} 
                            className={classes.dialog}
                        >
                            <div className={classes.sidebar}>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#corporate">Corporate</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#interview">Interview</a></li>
                                    <li><a href="#entry">Entry</a></li>
                                </ul>
                            </div>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </AppBar>
      <div className={classes.bgImg}></div>
    </React.Fragment>
  );
}
export default Header

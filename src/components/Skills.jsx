import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
    padding: '1rem',
  },
  cardContainer: {
    maxWidth: 450,
    margin: '0.2rem auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    '&:hover': {
      msTransform: 'scale(1.2)',
      webkitTransform: 'scale(1.2)',
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      // transform: 'translateZ(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s',
    },
  },
  projectName: {
    color: 'tomato',
    fontSize: '20px',
  },
  language: {
    background: 'white',
    margin: '1.5rem auto',
    borderRadius: '0.5rem ',
    padding: '1.5rem',
  },
  languageView: {
    display: 'flex',
    color: 'tomato',
  },
});

const skills = [
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'python',
    logo:
      'data:image/jpeg;base64,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',
  },
  
  {
    title: 'Bootstrap',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  // msql
  {
    title: 'MySQL',
    logo:
      'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

  {
    title: 'C++',
    logo:
      'data:image/png;base64,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',
  },

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  
  {
    title: 'VS Code',
    logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },

  
  {
    title: 'Linux',
    logo:
      'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png',
  },
  
  {
    title: 'ML',
    logo: 'data:image/png;base64,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',
  },
];
function Skills() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          MY SKILLS
        </Typography>
        <div className={classes.language}>
          <Grid container justify="center">
            {skills.map((skill, i) => (
              <Grid item xs={12} sm={8} md={4} key={i}>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        <span className={classes.languageView}>
                          <Avatar
                            src={skill.logo}
                            style={{ marginRight: '10px' }}
                          />
                          {skill.title}
                        </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default Skills;

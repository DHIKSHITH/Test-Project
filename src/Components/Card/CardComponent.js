import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 18
  },
  Heading: {
    fontSize: 18,
    color: "#F1F1F1"
  },
  pos: {
    marginBottom: 12,
    color: "white"
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  }
}));

export const CardComponent = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      // variant="outlined"
      style={{ backgroundColor: "#2A2A8A", color: "white" }}
    >
      <div style={{ height: 120, backgroundColor: "#5050B0", display: "flex" }}>
        <div
          style={{
            position: "relative",
            top: "30%",
            left: "10px",
            color: "#BFBFFD"
          }}
        >
          <Typography
            className={classes.title}
            // color="textSecondary"
            gutterBottom
          >
            Welcome Back
          </Typography>
          <Typography variant="body2" component="p">
            State DashBoard
          </Typography>
        </div>
        <div></div>
      </div>
      <CardContent>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
            className={classes.large}
            style={{ top: "-29px" }}
          />
          {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}

          <div
            style={{
              display: "flex",
              position: "relative",
              left: "30px",
              justifyContent: "space-around",
              width: "100%",
              top: "-25px"
            }}
          >
            <Typography className={classes.pos} color="textSecondary">
              125
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              200
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              left: "30px",
              justifyContent: "space-around",
              width: "100%",
              top: "-25px"
            }}
          >
            <Typography variant="h9" className={classes.Heading} component="h3">
              Projects
            </Typography>
            <Typography variant="h9" className={classes.Heading} component="h3">
              Revenue
            </Typography>
          </div>
        </div>
      </CardContent>
      {/* <CardActions> */}
      <CardContent>
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary">
            View Profile
          </Button>
        </div>
      </CardContent>
      {/* </CardActions> */}
    </Card>
  );
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 160
    // minHeight: 100
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    color: "white"
  },
  pos: {
    marginBottom: 12
  }
});

export const SmallCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: "#2A2A8A", color: "white" }}
    >
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Orders
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              255
            </Typography>
          </div>
          <div>Image</div>
        </div>
      </CardContent>
    </Card>
  );
};

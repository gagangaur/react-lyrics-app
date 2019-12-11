import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    maxHeight: "50%"
  }
});

export default function Track(props) {
  const classes = useStyles();
  const { track } = props;
  return (
    <Fragment>
      <Grid item xs={12} sm={6}>
        <div style={{}}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {track.album_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {track.artist_name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="secondary">
                Share
              </Button>{" "}
              <Link to="/search" style={{ textDecoration: "none" }}>
                <Button size="large" color="secondary">
                  Show Lyrics
                </Button>{" "}
              </Link>
            </CardActions>
          </Card>
        </div>
      </Grid>
    </Fragment>
  );
}

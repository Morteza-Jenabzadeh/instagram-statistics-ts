import React from "react";
import Icon from "../../assets/icon.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./header.style";

const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.headerWrapper}>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <a href="/">
              <img src={Icon} alt="icon" className={classes.icon} />
            </a>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.btnLogin}>
              LOGIn
            </Button>
            <Button variant="contained" className={classes.btnTryFree}>
              TRYforFree
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Header;

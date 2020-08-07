import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./footer.style";

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.footerWrapper}
    >
      <span>m.jenabzadeh@gmail.com</span>
    </Grid>
  );
};

export default Footer;

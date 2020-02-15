




import React from "react";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";

interface IProp {
    url: string;
    comment: string;
    like: string;
}
const Card: React.FC<IProp> = (props) => {
    const { url, comment, like } = props;
    const classes = useStyles();

    return (
        <Grid container item xs={2} alignItems="center" direction="column" justify="space-between" className={classes.card}>
            <img src={url} alt="url" width="175px" height="220px" className={classes.img} />
            <Grid container className={classes.likeWrapper} >
                <Grid item xs container direction="column" alignItems="center">
                    <span>
                        comments
                    </span>
                    <strong>
                        {comment}
                    </strong>
                </Grid>
                <div className={classes.vl}></div>

                <Grid item xs container direction="column" alignItems="center">
                    <span>
                        likes
                </span>
                    <strong>
                        {like}
                    </strong>
                </Grid>
            </Grid>
            <Grid container className={classes.box} >
                <Grid container item xs={8} alignItems="center" >
                    <span>
                        Engagement rate
                </span>
                </Grid>
                <Grid container item xs alignItems="center">
                    <span>
                        5.5%
                </span>
                </Grid>
            </Grid>
        </Grid >
    )
}
export default Card;
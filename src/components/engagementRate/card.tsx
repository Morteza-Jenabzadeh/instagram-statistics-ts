
import React from "react";
import { useStyles } from "./engagement.style";
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
        // <Grid container direction="row" justify="center" className={classes.lastPostWrapper}>

        <Grid container item xs={2} alignItems="center" direction="column"
            justify="space-around" className={classes.card}>
            <img src={url} alt="url" width="200px" height="250px" className={classes.img} />
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

        </Grid >
        // </Grid>
    )
}
export default Card;
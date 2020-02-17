
import React from "react";
import { useStyles } from "./engagement.style";
import Grid from "@material-ui/core/Grid";
import ImageLoader from 'react-load-image';
import Spinner from "../spinnerLoader";

interface IProp {
    url: string;
    comment: string;
    like: string;
}

const Card: React.FC<IProp> = (props) => {
    const { url, comment, like } = props;

    const classes = useStyles();

    return (


        <Grid container item xs={2} alignItems="center" direction="column"
            justify="space-around" className={classes.card}>

            <ImageLoader
                src={url} alt="profileApi" className={classes.img}
            >
                <img />
                <div>Error!</div>
                <Spinner />
            </ImageLoader>
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

    )
}
export default Card;
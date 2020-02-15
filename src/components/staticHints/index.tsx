import React from 'react';
import "./style.css"
import Grid from "@material-ui/core/Grid";


const StaticHints = () => {
    return (
        <Grid container direction="column" alignContent="center"  >
            <h1 className="top-title">Tips to Improve Your Engagement Rate </h1>
            {/* <h1>Rate</h1> */}
            <ul className="UI-list">
                <li >
                    Use more hashtags
            </li>
                <li>
                    Bio can be improved
            </li>
                <li>
                    Longer Captions
            </li>
                <li>
                    Regular stories (Use stickers to engage followers)
            </li>
                <li>
                    High quality pictures
            </li>
                <li>
                    Relevant hashtags (maximum 8 hashtags)
            </li>
                <li>
                    Tag relevant people in the posts
        Check your insights to know which time is the best
            </li>

            </ul>
        </Grid>
    )
}
export default StaticHints;
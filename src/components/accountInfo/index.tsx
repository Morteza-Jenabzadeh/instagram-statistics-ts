import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./accountInfo.style";



interface IProps {
    post: { [key: string]: any };
    following: { [key: string]: any };
    followers: { [key: string]: any };
}
const AccountInfo: React.FC<IProps> = (props) => {
    const { post, following, followers } = props;
    const classes = useStyles();
    if (!post || !following || !followers) {
        return (<></>)
    }
    const followers_cnt = followers && followers.count;
    const post_cnt = post && post.count;
    const following_cnt = following && following.count;
    return (
        <Grid container className={classes.AccountInfoWrapper}>
            <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.separator}>
                <span>Followers</span>
                <strong>{followers_cnt}</strong>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" item xs={2} className={classes.middleSeparator}>
                <span>Following</span>
                <strong>{following_cnt}</strong>

            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.separator}>
                <span>Posts</span>
                <strong>{post_cnt}</strong>

            </Grid>
        </Grid>
    )


}
export default AccountInfo;
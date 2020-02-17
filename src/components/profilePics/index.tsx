
import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./profilePics.style";
import StaticHints from "../staticHints";
import ImageLoader from 'react-load-image';
import image from "../../assets/spinner.gif"
interface IProp {
    dataSource: { [key: string]: any },
    profileApi: string;
    name: string;
    userName: string;

}

function Preloader() {
    return <img src={image} />;
}
const Bio: React.FC<IProp> = (props) => {
    const { profileApi, name, userName, dataSource } = props;
    const classes = useStyles();
    if (!profileApi || !name || !userName) {
        return (<></>)
    }
    const edges = dataSource && dataSource.edges;
    return (
        <>
            <Grid container direction="column" alignItems="center" className={classes.wrapper}>
                <Grid container className={classes.backGroundWrapper} justify="center">

                    {edges.slice(0, 3).map((item: any, index: number) => (
                        <img key={index} src={item.node.display_url} alt="profileApi" className={classes.backgroundPic} />
                    ))}

                </Grid>


                <ImageLoader
                    src={profileApi} alt="profileApi" className={classes.mainPic}
                >
                    <img />
                    <div>Error!</div>
                    <Preloader />
                </ImageLoader>
                {/* <img src={profileApi} alt="profileApi" className={classes.mainPic} /> */}
                <h2 style={{ marginTop: "100px" }}>{name}</h2>
                <span style={{ marginTop: "0px" }}>@{userName}</span>
            </Grid>
            <Grid container className={classes.info}>
                <Grid container direction="column" alignItems="center" justify="center" item xs className={classes.separator}>
                    <span >
                        Engagement rate
                    </span>
                    <strong >
                        3.15 %
                </strong>
                </Grid>
                <Grid container justify="center" direction="column" alignItems="center" item xs className={classes.separator}>
                    <span>
                        Engagement rate
                </span>
                    <strong >
                        3.15 %
                </strong>
                </Grid>

            </Grid>
            <StaticHints />
        </>
    )
}
export default Bio;
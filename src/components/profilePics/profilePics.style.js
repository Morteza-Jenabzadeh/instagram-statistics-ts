
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    mainPic: {
        maxWidth: "328px",
        maxheight: "328px",
        borderRadius: "24px",
        background: "linear-gradient(to top, #37c0c9, #fff)",
        padding: "5px",
        zIndex: 2,
        position: "absolute",
        top: '256px'
    },
    wrapper: {
        position: "relative",
        height: "700px",
        '& h2': {
            fontWeight: "bold",
            color: '#626262'
        },
        '& span': {
            color: '#626262'
        }
    },
    backGroundWrapper: {
        background: 'linear-gradient(111.93deg, #1e415a 1.51%, #33638d 100%)',
        opacity: 0.8,

    },
    backgroundPic: {
        maxWidth: "400px",
        minHeight: "150px",
        maxheight: "328px",
        opacity: 0.1,
    },
    info: {
        background: "linear-gradient(89.8deg, #57cdcf .02%, #6be7c0 99.93%)",
        height: "100px",
        marginTop: "10px"
    },
    separator: {
        borderRight: "1px white solid",
        fontWeight: "500",
        '& span': {
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: "21px",
            color: "white"
        },
        '& strong': {
            fontWeight: '500',
            fontSize: '28px',
            lineHeight: "33px",
            color: "white"
        },
    }
}));
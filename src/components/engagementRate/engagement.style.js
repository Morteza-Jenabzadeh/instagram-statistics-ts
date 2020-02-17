
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    lastPostWrapper: {
        // background: "linear-gradient(142.6deg, #74ead5 0%, #abb7e4 98.17%)",
        // height: "510px",
        // padding: "20px",
        // margin: "30px"
    },
    engagementWrapper: {
        marginTop: "60px",
        // height: "100px",
        // background: "linear-gradient(104.05deg, #1f415a -1.62%, #33628c 100%)"
    },
    img: {
        // padding: "10px",
        background: "white",
        '& img': {

            height: "250px",
            maxWidth: "200px !important",
            maxHeight: "250px !important",
            width: "250px",
        },

    },
    headTitle: {

        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "21px",
        color: "#32618a",

    },
    card: {
        background: "white",

        border: "1px white solid",
        // borderRadius: "5px",
        height: "310px",
        minWidth: "230px"

    },
    likeWrapper: {
        ' & span': {
            color: "#a7a9ac",
            fontWeight: "300",
            fontSize: "14px",
            lineHeight: "17px"

        },
        ' & strong': {

            color: "#626262",
            fontWeight: "300",
            fontSize: "14px",
            lineHeight: "17px"
        }
    },
    vl: {
        borderLeft: "2px  #a7a9ac solid",
        height: "40px",
    },


}));
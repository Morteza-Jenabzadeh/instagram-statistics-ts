
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

    lastPostWrapper: {
        background: "linear-gradient(142.6deg, #74ead5 0%, #abb7e4 98.17%)",
        height: "510px",
        padding: "20px",
        // margin: "30px"
    },
    img: {
        // padding: "10px",
        background: "white",

    },
    card: {
        background: "white",
        border: "5px white solid",
        borderRadius: "5px",
        height: "375px",
        padding: "10px",
        margin: "30px"
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

    box: {

        height: "60px",
        width: "175px",
        border: "1px solid #677899",
        '& span': {
            fontWeight: "500",
            fontSize: "16px",
            color: "#32618a",
            textAlign: 'center',
            lineHeight: "19px"
        }
    }



}));

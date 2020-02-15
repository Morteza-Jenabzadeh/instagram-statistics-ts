import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

    searchBoxWrapper: {
        background: "linear-gradient(300.08deg, #acb6e5 -1.29%, #74ebd5 100%),linear-gradient(92.26deg, #1a3040 .28%, #275177 100%)",
        height: "220px"
    },
    btnWrapper: {
        position: 'relative'
    },
    buttonProgress: {
        // color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    box: {
        backgroundColor: "white !important",
        borderRadius: "5px",
        width: "546px",
        display: "flex",

        '& div': {
            backgroundColor: "white !important",

        }
        // height: "51px"
    },
    searchBtn: {
        background: "linear-gradient(87.07deg, #ff985f .3%, #ffd15b 99.55%),linear-gradient(97.65deg, #57cdcf .28%, #6ce9c0 100%)",
        width: "487px",
        height: "51px",
        borderRadius: "10px",
        // marginTop: "20px"
    },
    title: {
        color: "white",
        fontWeight: "500",
        fontSize: "40px",
        lineHeight: "26px"
    }

}));


import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    btnTryFree: {
        background: "linear-gradient(270deg, #FF5065 39.07%, #FF807A 99.79%, #FF9081 120.98%)",
        width: "120px",
        height: "39px"

    },
    btnLogin: {
        marginRight: "16px",
        width: "120px",
        height: "39px",
        background: "linear-gradient(90deg, #05F1C7 0%, #00DDA2 100%)"
    },
    headerWrapper: {
        // marginRight: "16px",
        width: "100%",
        height: "120px",
        background: "linear-gradient(95.58deg, #1e4159 -.9%, #34648e 100%),linear-gradient(101.44deg, #57cdcf .28%, #6ce9c0 100%)"
    },
    icon: {
        width: "200px",
        height: "90px",
        paddingTop: "10px",
        // marginLeft: "30px",
    }
}));
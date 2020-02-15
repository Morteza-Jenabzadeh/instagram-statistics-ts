
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

    footerWrapper: {

        position: "fixed",
        bottom: "0",
        height: "50px",
        background: "#32618a",
        marginTop: "360px",
        ' & span': {
            fontSize: "14px",
            lineHeight: "16px",
            color: "#b9b9b9"
        }
    },

}));
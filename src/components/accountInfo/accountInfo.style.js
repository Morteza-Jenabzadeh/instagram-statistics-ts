
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    AccountInfoWrapper: {
        marginTop: "60px",
        height: "100px",
        background: "linear-gradient(104.05deg, #1f415a -1.62%, #33628c 100%)",
        ' & strong': {
            fontSize: "16px",
            color: '#fff',
            lineHeight: "19px",
            fontWeight: "500",
            paddingTop: "10px",
            fontStyle: "normal"
        }
    },
    middleSeparator: {
        borderRight: "1px white solid",
        borderLeft: "1px white solid",
        color: "#c0c0c0"
    },
    separator: {

        color: "#c0c0c0"
    }
}));
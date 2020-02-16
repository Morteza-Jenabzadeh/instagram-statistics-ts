import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface IProps {
    open: boolean;
    handleClose: (event?: React.SyntheticEvent, reason?: string) => void
}
const SnackBar: React.FC<IProps> = (props) => {
    const { open, handleClose } = props;
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }} >
            <Alert onClose={handleClose} severity="error">
                This account is private!
        </Alert>
        </Snackbar>
    )
}

export default SnackBar;
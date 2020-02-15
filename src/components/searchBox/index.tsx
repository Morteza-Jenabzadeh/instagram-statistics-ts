

import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./searchBox.style";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
    title: string;
    submit: (text: string) => void;
    placeholder: string;
    loading: boolean;

}

const SearchBox: React.FC<IProps> = (Props) => {
    const { title, submit, placeholder, loading = true } = Props;
    const [query, setQuery] = useState();

    const classes = useStyles();

    return (
        <Grid container justify="space-around" className={classes.searchBoxWrapper} direction="column"
            alignItems="center">
            <h1 className={classes.title}>{title}</h1>
            <TextField placeholder={placeholder} variant="filled" className={classes.box}
                onChange={(event) => setQuery(event.target.value)} />
            <div className={classes.btnWrapper}>
                <Button
                    variant="contained"
                    onClick={() => submit(query)}
                    className={classes.searchBtn}
                    disabled={loading}
                >Show Statistics
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        </Grid>
    )
}

export default SearchBox;
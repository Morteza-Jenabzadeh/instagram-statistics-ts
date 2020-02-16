

import React, { useState, useRef } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./searchBox.style";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
interface IProps {
    title: string;
    submit: (text: string) => void;
    placeholder: string;
    loading: boolean;

}
interface IUsers {
    [key: string]: any
}
const SearchBox: React.FC<IProps> = (Props) => {
    const { title, submit, placeholder, loading = true } = Props;
    const [query, setQuery] = useState();
    const SearchRef = useRef<HTMLInputElement>(null);

    const [userList, setUserList] = useState<IUsers[]>([{ username: "mori" }]);
    const classes = useStyles();
    const onChange2 = async (event: any, value: any) => {

        setQuery(value);
    }
    const onChange = async (event: any) => {
        const value = event.target.value;

        if (value.length > 3) {
            const data: any = await axios.get(`https://www.instagram.com/web/search/topsearch/?query=${value}`)
            setUserList(data?.data?.users);

        }
    }

    return (
        <Grid container justify="space-around" className={classes.searchBoxWrapper} direction="column"
            alignItems="center">
            <h1 className={classes.title}>{title}</h1>
            {/* <TextField placeholder={placeholder} variant="filled" className={classes.box}
                onChange={(event) => setQuery(event.target.value)} /> */}

            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                // style={{ width: "300px" }}
                className={classes.box}
                onChange={onChange2}
                options={userList?.map(option => option?.user?.username)}
                renderInput={params => (
                    <TextField
                        ref={SearchRef}
                        onChange={onChange}
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
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
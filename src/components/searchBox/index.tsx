

import React, { useState, useRef } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./searchBox.style";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';

interface IProps {
    title: string;
    submit: (text: string) => void;
    placeholder: string;
    loading: boolean;

}
interface IUsers {
    position: number,
    user?: { [key: string]: any },
    username: string,
    profile_pic?: string
}
const SearchBox: React.FC<IProps> = (Props) => {
    const { title, submit, placeholder, loading = true } = Props;
    const [query, setQuery] = useState();
    const [loading2, setLoading] = useState(false);
    const [userList, setUserList] = useState<IUsers[]>([]);
    const classes = useStyles();
    const onChange2 = async (event: any, value: any) => {
        setQuery(value.username);
    }
    const onChange = async (event: any) => {
        const value = event.target.value;
        if (value.length > 3) {
            setLoading(true);
            const data: any = await axios.get(`https://www.instagram.com/web/search/topsearch/?query=${value}`)
            const modified = data?.data?.users.map((item: any) => {
                return (Object.assign({},
                    { position: item.position },
                    { username: item.user.username },
                    { profile_pic: item.user.profile_pic_url }
                ))
            })
            setUserList(modified);
            setLoading(false);
        }
    }

    return (
        <Grid container justify="space-around" className={classes.searchBoxWrapper} direction="column"
            alignItems="center">
            <h1 className={classes.title}>{title}</h1>
            <Autocomplete
                id="country-select-demo"
                onChange={onChange2}
                loading={loading2}
                disableClearable
                style={{ width: 600 }}
                options={userList}
                getOptionLabel={option => option?.username}
                renderOption={option => (
                    <React.Fragment>
                        <Avatar src={option.profile_pic} />
                        <div style={{ paddingLeft: '10px' }}>
                            {option?.username}
                        </div>

                    </React.Fragment>
                )}
                renderInput={params => (
                    <TextField
                        onChange={onChange}
                        {...params}
                        placeholder={placeholder}
                        variant="outlined"
                        fullWidth
                        inputProps={{
                            ...params.inputProps,
                            type: 'search',
                        }}
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
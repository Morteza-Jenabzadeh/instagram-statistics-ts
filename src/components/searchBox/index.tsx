

import React, { useState, useRef } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./searchBox.style";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    const [loading2, setloading] = useState(false);

    const [userList, setUserList] = useState<IUsers[]>([

        // { position: 0, username: "morteza" },
        // { position: 1, username: "mori" },
        // { position: 2, username: "morteza34" },


    ]);
    const classes = useStyles();
    const onChange2 = async (event: any, value: any) => {

        setQuery(value.username);
    }
    const onChange = async (event: any) => {
        const value = event.target.value;
        if (value.length > 3) {
            setloading(true);
            const data: any = await axios.get(`https://www.instagram.com/web/search/topsearch/?query=${value}`)

            const modified = data?.data?.users.map((item: any) => {
                return (Object.assign({},
                    { position: item.position },
                    { username: item.user.username },
                    { profile_pic: item.user.profile_pic_url }
                ))

            })
            setUserList(modified);
            setloading(false);
        }
    }

    return (
        <Grid container justify="space-around" className={classes.searchBoxWrapper} direction="column"
            alignItems="center">
            <h1 className={classes.title}>{title}</h1>
            {/* <TextField placeholder={placeholder} variant="filled" className={classes.box}
                onChange={(event) => setQuery(event.target.value)} /> */}
            <Autocomplete
                id="country-select-demo"
                onChange={onChange2}
                loading={loading2}
                disableClearable
                style={{ width: 800 }}
                options={userList}
                getOptionLabel={option => option?.username}
                renderOption={option => (
                    <React.Fragment>
                        <Avatar src={option.profile_pic} />
                        {option?.username}
                    </React.Fragment>
                )}
                renderInput={params => (
                    <TextField
                        onChange={onChange}
                        {...params}
                        label="Choose a country"
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
interface CountryType {
    code: string;
    label: string;
    phone: string;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    { code: 'AU', label: 'Australia', phone: '61', suggested: true },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
    { code: 'BB', label: 'Barbados', phone: '1-246' }
]

export default SearchBox;
import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import vendors from './vendors'

export default function MultilineTextFields() {

    const [currency, setCurrency] = React.useState(localStorage.getItem('issuer_endpoint') || vendors[0].value);

    const handleChange = (event) => {
        localStorage.setItem('issuer_endpoint', event.target.value)
        setCurrency(event.target.value);
    };

    return (

        <TextField
            id="outlined-select-currency"
            select
            label="Credential Issuer"
            value={currency}
            onChange={handleChange}
            fullWidth
            variant="outlined"
        >
            {vendors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>


    );
}

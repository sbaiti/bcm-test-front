/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types';
import data from '../../../assets/data/airports.json'
import { getAeroport } from '../../../shared/utility'

const filter = createFilterOptions();

const FreeSoloCreateOption = ({ label, name, value, onchange }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    return (
        <FormControl component="fieldset" >
            <label className="mt-3 mr-2 mb-0 ml-2 font-weight-bold text-uppercase text-primary">
                {label} <span className="text-danger"> * </span>
            </label>
            <Autocomplete
                value={value !== "" ? getAeroport(value) : selectedValue}
                onChange={(e, newValue) => {
                    setSelectedValue(newValue)
                    onchange(e, name, newValue);
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    return filtered;
                }}
                id="free-solo-with-text-demo"
                options={data.data}
                getOptionLabel={(option) => {
                    return option.name;
                }}
                renderOption={(option) => option.name}
                style={{ width: 400 }}
                freeSolo
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={name}
                    />
                )}
            />
        </FormControl>
    );
}

FreeSoloCreateOption.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired
}

export default FreeSoloCreateOption;
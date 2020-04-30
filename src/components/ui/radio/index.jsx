import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Grid } from '@material-ui/core'

const RadioField = (props) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = event => {
        const { onchange, list } = props

        const chosen = list.find(
            i =>
                parseInt(i.value) === parseInt(event.target.value) ||
                i.value === event.target.value
        )
        onchange(event)
        setSelectedValue(chosen.value);
    }

    const {
        label,
        list,
        chosenItem,
        name,
        className
    } = props

    return (
        <FormControl component="fieldset" className={className}>
            <label className="mt-3 mr-2 mb-0 ml-2 font-weight-bold text-uppercase text-primary">
                {label} <span className="text-danger"> * </span>
            </label>
            <RadioGroup
                aria-label="position"
                name={name}
                value={selectedValue.toString() || chosenItem.toString()}
                onChange={e => handleChange(e)}
                row
                style={{ width: 400 }}
                className={`mt-1 pl-3 pr-3`}
            >
                <Grid item xs={6} sm={6}>
                    <FormControlLabel
                        value={list[0].value.toString()}
                        control={<Radio color="primary" />}
                        label={list[0].label}
                        labelPlacement="end"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <FormControlLabel
                        value={list[1].value.toString()}
                        control={<Radio color="primary" />}
                        label={list[1].label}
                        labelPlacement="end"
                    />
                </Grid>
            </RadioGroup>
        </FormControl>
    )
}

RadioField.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    chosenItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    list: PropTypes.array.isRequired,
    onchange: PropTypes.func.isRequired,
    className: PropTypes.string,
}

RadioField.defaultProps = {
    label: '',
    chosenItem: '',
    className: 'col-12 col-lg-6',
}

export default RadioField

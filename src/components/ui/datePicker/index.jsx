import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types'


const MaterialUIPickers = ({ name, label, onchange, value }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date(value));

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onchange(date, name)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
                <FormControl component="fieldset" >
                    <label className="mt-3 mr-2 mb-0 ml-2 font-weight-bold text-uppercase text-primary">
                        {label} <span className="text-danger"> * </span>
                    </label>
                    <KeyboardDatePicker
                        disableToolbar
                        style={{ width: 400 }}
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="date-picker-inline"
                        value={selectedDate}
                        name={name}
                        onChange={handleDateChange}
                        autoOk={true}
                        disablePast={true}
                    />
                </FormControl>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

MaterialUIPickers.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    name: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired
}

export default MaterialUIPickers;
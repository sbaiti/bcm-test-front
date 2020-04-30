import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import InputText from '../../../components/ui/autoCompete'
import DateField from '../../../components/ui/datePicker'
import RadioField from '../../../components/ui/radio'
import { setListInputs } from './setListInputs';
import { generateKey } from '../../../shared/utility'

const Form = (props) => {
    const {
        fieldChangedHandler, payload, handleChangeAeroport, disabled
        , handleDateChange
    } = props;
    let tripTypeList = [];
    try {
        tripTypeList = [
            {
                label: "Aller simple",
                value: "OW"
            },
            {
                label: "Aller Retour",
                value: "R"
            }
        ]
    }
    catch (error) {
        console.log(error)
        return
    }
    return setListInputs(tripTypeList, disabled).map(el => el && (
        <Grid
            item
            xs={el.xs}
            sm={el.sm}
            key={generateKey()}
            container
            direction="row"
            justify={el.justify}
            alignItems={el.alignItems}
            style={{ padding: '0em 2em 0em 2em' }}
        >
            {el.isRadio ? (
                <RadioField
                    onchange={e => {
                        fieldChangedHandler(e, el.name)
                    }}
                    name={el.name}
                    label={el.label}
                    list={el.list}
                    chosenItem={payload[el.name]}
                />
            )
                : el.isDate ? (
                    <DateField
                        onchange={handleDateChange}
                        name={el.name}
                        label={el.label}
                        value={payload[el.name]}
                    />
                )
                    : (
                        <InputText
                            onchange={(e, name, aeroport) =>
                                handleChangeAeroport(e, name, aeroport)
                            }
                            name={el.name}
                            label={el.label}
                            value={payload[el.name]}
                        />
                    )}
        </Grid>
    )

    )
};

Form.propTypes = {
    fieldChangedHandler: PropTypes.func.isRequired,
    payload: PropTypes.object.isRequired,
    handleChangeAeroport: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleDateChange: PropTypes.func.isRequired
};

export default Form;
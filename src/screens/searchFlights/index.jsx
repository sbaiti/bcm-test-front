import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import Form from '../../components/fligths/search/Form'
import voyage from '../../assets/image/voyage.jpg'
import ButtonComponent from '../../components/ui/button'
import getFlightsActions from '../../redux/flights/searchFlights/index'
import SweetAlertCmp from '../../components/ui/alert'
import { verifDataBeforRequest, generateKey } from '../../shared/utility'

const WrapBgImage = styled.div`
    padding: 30px;
    display: inline-block;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 150%;
    padding-top:9%;
    width: 100%;
    min-height:100vh;
`
const WrapBgColor = styled.div`
    background-image: radial-gradient(circle, white, #e8e8e8, #e6e6e6);
    width: 100%;
    min-height:100vh;
`

class SearchFligths extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            error: false,
            listFlights: props.listFlights
        }
        this.payload = {
            return_date: format(new Date(), 'yyyy-MM-dd'),
            departure_date: format(new Date(), 'yyyy-MM-dd'),
            arrival_airport: '',
            departure_airport: '',
            tripType: ''
        }
    }
    /* life cycle */

    /* Functions */

    fieldChangedHandler = ({ target: { name, value } }) => {
        if (value !== '')
            this.payload[name] = value;
        else
            delete this.payload[name];
        if (value === 'R')
            this.setState({ disabled: false })
        else {
            this.payload.return_date = '';
            this.setState({ disabled: true })
        }
    }

    handleChangeAeroport = (e, name, aeroport) => {
        if (aeroport)
            this.payload[name] = aeroport.iata;
        else
            delete this.payload[name]
    }

    handleDateChange = (date, name) => {
        var d = format(new Date(date), 'yyyy-MM-dd')
        this.payload[name] = d;
    }

    SearchFligthsFn = () => {
        const { getFlightsReq, history } = this.props;
        const t = (verifDataBeforRequest(this.payload));
        if (t[1])
            this.setState({
                error: true,
                msgError: t[1]
            })
        else {
            this.setState({ error: false, msgError: '' },
                () => {
                    getFlightsReq(this.payload);
                    history.push('/result-search-flights')
                })

        }
    }

    render() {
        const { disabled, error, msgError } = this.state;
        return (
            <WrapBgColor key={generateKey()} bg={voyage}>
                <WrapBgImage key={generateKey()} bg={voyage}>
                    <FormGroup style={{ background: '#e6e6e670' }}>
                        <div className="centerDiv">
                            <Grid container>
                                <Form
                                    payload={this.payload}
                                    disabled={disabled}
                                    fieldChangedHandler={this.fieldChangedHandler}
                                    handleChangeAeroport={this.handleChangeAeroport}
                                    handleDateChange={this.handleDateChange}
                                />
                            </Grid>
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: 20
                                }}
                            >
                                <ButtonComponent
                                    color="primary"
                                    type="contained"
                                    size="medium"
                                    label="Search Flights"
                                    clicked={this.SearchFligthsFn}
                                />
                            </div>
                        </div>
                    </FormGroup>
                    {error &&
                        <SweetAlertCmp
                            show={error}
                            message={msgError}
                            toggleShow={() => this.setState({ error: false })}
                        />}
                </WrapBgImage>
            </WrapBgColor>
        );
    }
}

SearchFligths.propTypes = {
    flights: PropTypes.object,
    history: PropTypes.object.isRequired,
    getFlightsReq: PropTypes.func.isRequired
}

SearchFligths.defaultProps = {
    flights: {}
}
function mapStateToProps({ flights }) {
    return {
        listFlights: flights.searchFlights
    };
}

const mapDispatchToProps = dispatch => ({
    getFlightsReq: payload =>
        dispatch(getFlightsActions.getFlightsRequest(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFligths);
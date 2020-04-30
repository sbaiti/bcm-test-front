import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import ParamsSearched from '../../components/fligths/result/ParamsSearched'
import { generateKey } from '../../shared/utility'
import voyage from '../../assets/image/voyage.jpg'
import Resultat from '../../components/fligths/result/resultat';


const Wrap = styled.div`
    padding: 1em;
    display: inline-block;
    width: 100%;
    min-height:100vh;
    background-image: url(${props => props.bg});
    background-size:cover;
`

const index = ({ history }) => {
    return (
        <Wrap key={generateKey()} bg={voyage}>
            <ParamsSearched />
            <Resultat />
        </Wrap>
    );
};

index.propTypes = {
    history: PropTypes.object.isRequired
};

export default index;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from '../../ui/button/index'
import { history } from "../../../store";

const useStyles = makeStyles({
    root: {
        fontStyle: "italic",
        top: "50%",
        left: "50%",
        position: "absolute",
        margin: 0,
        textAlign: "center",
        transform: 'translate(-50%,-50%)'
    },
});

const NoDataInResult = () => {
    const classes = useStyles();
    return (
        <div style={{ position: "relative", width: '100%', height: "90vh" }}>
            <div className={classes.root}>
                <Typography variant="h4" color="error" gutterBottom>
                    Aucune vol est trouvée !
            </Typography>
                <ButtonComponent
                    color="primary"
                    type="contained"
                    size="medium"
                    label="Retour !"
                    clicked={() => history.goBack()}
                />
            </div>
        </div>
    );
};

export default NoDataInResult;
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import Map from '../Map'
const DetailsRoute = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.back}>
                    <ArrowBackIosIcon fontSize="small" />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to='/list-routes'>Volver</Link>
                </div>
                <Typography variant="h3" color="initial">Listado de Rutas</Typography>
            </div>
            <div className={classes.map}>
                <Map />
            </div>
            <div className={classes.card}>
                <Card style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Desde: Dirección 1
                        </Typography>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hasta: Dirección 2
                            <span>Fecha: 18/10/2019</span>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(10),
    },
    back: {
        display: 'flex',
        alignItems: 'center',
    },
    map: {
        overflow: 'hidden',
        paddingButtom: '400px',
        position: 'relative',
        height: '250px',

    },
    card: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    direction: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2)
    },
}))

export default DetailsRoute;
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ListRoutes = ({ dateIn, dateOut }) => {
    const classes = useStyles()


    console.log('dateIn ----->', dateIn)
    return (
        <div className={classes.root} >
            <div className={classes.header}>
                <div className={classes.back}>
                    <ArrowBackIosIcon fontSize="small" />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to='/'>Volver</Link>
                </div>
                <Typography variant="h3" color="initial">Listado de Rutas</Typography>
            </div>
            <div className={classes.card}>
                <Card style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Desde: Dirección 1
                            <Link style={{ textDecoration: 'none', color: '#000' }} to='/details-route'><VisibilityIcon /></Link>
                        </Typography>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hasta: Dirección 2
                            <span>Fecha: 18/10/2019</span>
                        </Typography>
                    </CardContent>
                </Card >
                <Card style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Desde: Dirección 1
                            <VisibilityIcon />
                        </Typography>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hasta: Dirección 2
                            <span>Fecha: 18/10/2019</span>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Desde: Dirección 1
                            <VisibilityIcon />
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
    card: {
        marginTop: theme.spacing(10),
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

export default ListRoutes;
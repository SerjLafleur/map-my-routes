import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useParams } from 'react-router-dom';
import Map from '../Map'
const DetailsRoute = () => {

    const classes = useStyles()
    const { id } = useParams()
    console.log(id)

    const [ruta, setRuta] = useState([])

    useEffect(() => {
        let accounts = [
            { id: "1", start: "Lucena", end: "Rute", date: "2021-09-10" },
            { id: "4", start: "Sevilla", end: "Cádiz", date: "2021-10-11" },
            { id: "5", start: "El Rubio", end: "Puente Genil", date: "2021-10-13" },
            { id: "6", start: "Peñiscola", end: "Lucena", date: "2021-10-20" },
            { id: "2", start: "Zuheros", end: "Málaga", date: "2021-11-09" },
            { id: "3", start: "Cabra", end: "Córdoba", date: "2021-12-16" }
        ];
        setRuta(accounts)
    }, [])

    if (ruta.length === 0) return (<div>Cargando...</div>)

    console.log(ruta)

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
                            Desde: Lucena
                        </Typography>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hasta: Llanos de San Juan
                            <span>Fecha: 2021-09-10</span>
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
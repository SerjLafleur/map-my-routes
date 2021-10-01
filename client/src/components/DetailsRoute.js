/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Card, CardContent } from '@mui/material'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Map from './Map'
const DetailsRoute = () => {

    const classes = useStyles()
    const { _id } = useParams()
    const [ruta, setRuta] = useState([])

    useEffect(() => {
        getRoutesId()
        // axios
        //     .get(`http://localhost:4000/api/routes/${id}`)
        //     .then((res) => {
        //         setRuta(res.data)
        //     })
    }, [])

    const getRoutesId = async () => {

        await axios
            .get(`http://localhost:4000/api/routes/${_id}`)
            .then((res) => {

                setRuta(res.data)
            })

    }

    if (ruta.length === 0) return (<div>Cargando...</div>)

    const { desde, hasta } = ruta

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
                <Map desde={desde} hasta={hasta} />
            </div>
            <div className={classes.card}>
                <Card style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Desde: {ruta.start}
                        </Typography>
                        <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hasta: {ruta.end}
                            <span>Fecha: {ruta.date}</span>
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
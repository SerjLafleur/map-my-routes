import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ListRoutes = ({ dateIn, dateOut }) => {
    const classes = useStyles()
    const [rutas, setRutas] = useState([])

    useEffect(() => {

        let accounts = [
            { id: "1", start: "Lucena", end: "Rute", date: "2021-09-10" },
            { id: "4", start: "Sevilla", end: "Cádiz", date: "2021-10-11" },
            { id: "5", start: "El Rubio", end: "Puente Genil", date: "2021-10-13" },
            { id: "6", start: "Peñiscola", end: "Lucena", date: "2021-10-20" },
            { id: "2", start: "Zuheros", end: "Málaga", date: "2021-11-09" },
            { id: "3", start: "Cabra", end: "Córdoba", date: "2021-12-16" }
        ];

        let busca = accounts.filter(n => n.date > dateIn && n.date < dateOut)
        setRutas(busca)
    }, [dateIn, dateOut])



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
                {
                    rutas.map(item => {
                        return (
                            <Card key={item.id} style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                                <CardContent>
                                    <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Desde: {item.start}
                                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/details-route/${item.id}`}><VisibilityIcon /></Link>
                                    </Typography>
                                    <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Hasta: {item.end}
                                        <span>Fecha: {item.date}</span>
                                    </Typography>
                                </CardContent>
                            </Card >
                        )
                    })
                }
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
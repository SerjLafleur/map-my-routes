import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ListRoutes = ({ dateIn, dateOut }) => {
    const classes = useStyles()
    const [rutas, setRutas] = useState([])

    useEffect(() => {
        getRoutes()
        // axios
        //     .get('http://localhost:4000/api/routes/')
        //     .then((res) => {
        //         const { data } = res

        //         let dataFilter = data.filter(n => n.date > dateIn && n.date < dateOut)
        //         setRutas(dataFilter)
        //     })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getRoutes = async () => {
        await axios
            .get('http://localhost:4000/api/routes/')
            .then((res) => {
                const { data } = res
                console.log(res.data)
                let dataFilter = data.filter(n => n.date > dateIn && n.date < dateOut)
                setRutas(dataFilter)
            })
    }

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
                            <Card key={item._id} style={{ margin: '10px' }} sx={{ minWidth: 300 }}>
                                <CardContent>
                                    <Typography className={classes.direction} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Desde: {item.start}
                                        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/details-route/${item._id}`}><VisibilityIcon /></Link>
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
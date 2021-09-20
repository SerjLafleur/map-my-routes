import React from 'react'
import { Button, Input, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'


const SelectRoutes = () => {

    const classes = useStyles()
    const history = useHistory()

    const handleClick = () => {
        history.push('/list-routes')
    }
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h3" color="initial">Seleccionar Rutas</Typography>
            </div>
            <div className={classes.date}>
                <div className={classes.desde}>
                    <Typography
                        variant="h5"
                        color="initial">
                        Seleccionar fecha desde:
                    </Typography>
                    <Input type='date' />
                </div>
                <div className={classes.hasta}>
                    <Typography
                        variant="h5"
                        color="initial">
                        Seleccionar fechas hasta:
                    </Typography>
                    <Input type='date' />
                </div>
            </div>
            <div className={classes.button}>
                <Button onClick={handleClick} variant="contained" >Ver rutas</Button>
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
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(10),
    },
    date: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    desde: {
        marginBottom: theme.spacing(5),
        ' & Input': {
            marginTop: theme.spacing(4)
        }
    },
    hasta: {
        marginBottom: theme.spacing(5),
        ' & Input': {
            marginTop: theme.spacing(4)
        }

    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(10)

    }
}))

export default SelectRoutes;
const express = require('express')
const router = express.Router()

const Routes = require('../models/routes.model')

//Endpoints
router.get('/', (req, res) => {

    Routes.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/:_id', (req, res) => {

    Routes.findById(req.params._id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router
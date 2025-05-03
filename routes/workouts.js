const express = require('express');
const Workout = require('./../models/workoutModel')
const {createworkout, getworkouts , getworkoutbyid , deleteworkout , updateworkout} = require('./../controllers/workoutController')

const router = express.Router();
router.post('/' ,createworkout )
router.get('/' , getworkouts)
router.get('/:id' , getworkoutbyid)
router.delete('/:id' , deleteworkout)
router.patch('/:id' , updateworkout)

module.exports = router; 
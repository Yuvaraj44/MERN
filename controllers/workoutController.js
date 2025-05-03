const  mongoose  = require('mongoose');
const Workout = require('./../models/workoutModel')


const createworkout =  async (req, res) =>{
    const {title , reps, load} = req.body;
    try{
        const workout = await Workout.create({title , reps, load});
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

    const getworkouts = async (req , res) =>{
        const workouts = await Workout.find({}).sort({createdAt : -1});
        res.status(200).json(workouts)
        if(!workouts){
            return res.status(404).json({error:error.message})
        }
    }

const getworkoutbyid = async (req , res) =>{
   const {id} =req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such orkout"})
   }
   const workout = await Workout.findById(id);
   if(!workout){
    return res.status(404).json({error:error.message})
   }
   res.status(200).json(workout)
}

const deleteworkout = async (req, res) =>{
    const {id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:error.message})
    }
    const workout = await Workout.findByIdAndDelete({_id : id});
    if(!workout){
        return res.status(404).json({error:error.message})
    }
    res.status(200).json(workout) 
}

const updateworkout = async (req, res) =>{
    const {id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:error.message})
    }
    const workout = await Workout.findOneAndUpdate({_id : id},
        {   ...req.body}     
    );
    if(!workout){
        return res.status(404).json({error:error.message})
    }
    res.status(200).json(workout) 
}

module.exports = {createworkout ,getworkouts , getworkoutbyid , deleteworkout , updateworkout}
const mongoose = require('mongoose');
const task = require('../model/task');

const addTask = async(req,res,next)=>{
    try {

    const newTask = new task(req.body);
    await newTask.save();

    res.status(201).json({
        message : "Task added successfully"
    });
    } catch (error) {
    console.log("Error :", error);
    }
}
const getTask = async(req,res,next)=>{
    try {

    const { title, description, duedate, status, priority } = req.query;

    const filter = {};

    if(priority){
        filter.priority = priority;
    }
    const tasks = await task.find(filter);
    res.status(200).json(tasks)
    } catch (error) {
        console.log("Error :", error);
    } 
}

const getTaskById = async(req,res,next)=>{
    try {
    const singleTask = await task.findById(req.params.id);
    res.status(200).json(singleTask);
    } catch (error) {
        console.log("Error :", error);
    }
}
const updateTask = async(req,res,next)=>{
    try {
    const update = await task.findByIdAndUpdate(req.params.id , req.body , {new : true});
    res.status(200).json({
        message : "Task updated successfully!", update});
    } catch (error) {
        console.log("Error :", error);
    } 
}
const deleteTask = async(req,res,next)=>{
    try {
    await task.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message : "Task deleted successfully!"}
    );

    } catch (error) {
        console.log("Error :", error);
    } 
}

module.exports = { addTask, getTask, getTaskById,updateTask,deleteTask }


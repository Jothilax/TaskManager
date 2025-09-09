const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    dueDate : {
        type : Date,
        require : true
    }, 
    status : {
        type : String,
        require : true
    }, 
    priority : {
        type : String,
        require : true
    }
},{ timestamps: true }

);

module.exports =  mongoose.model("task", taskSchema);
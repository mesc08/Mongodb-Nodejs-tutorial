const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MyProject",{ useNewUrlParser: true ,useUnifiedTopology: true },(error)=>{
	if(!error)
	{
		console.log("Success Connected");
	}
	else{
		console.log("error connecting to database");
	}
});

const Course =  require("./course.model")
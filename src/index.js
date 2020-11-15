const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

const studentData=require("./InitialData");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

app.get('/api/student', (req, res)=>{
    res.send(studentData);
})

app.get('/api/student/:id', (req, res)=>{
    const id=req.params.id;
    const student=studentData.find((student)=>student.id===parseInt(id));
    if(!student){
        res.sendStatus(404);
        return;
    }
    res.send(student);
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   
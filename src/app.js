const express = require('express');
const tasksRouter = require('./tasks/tasks.router').router;

const app = express()


app.use(express.json())
app.use("hola", (req, res ) => {
  res.json({message: "Peticion con use", method: req.method});
})

// Aqui se encuentran las rutas de mis tareas
app.use('/api/v1', tasksRouter)





app.listen(5000, ()=>{
    console.log('Server running at http://localhost:5000')
  })
  
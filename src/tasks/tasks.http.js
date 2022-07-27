const { getAlltasks, createTasks, getTasksById, editTasks, deleteTasks } = require("./taskscontrollers")

const getAll = (req, res) => {  // Pasamos el Require y Response
    const data = getAlltasks(); // Data obtiene todos las tareas
    res.status(200).json({
      items: data.length,
      response: data
    });
}

// Obtener un usuario en especifico
const getById = (req, res) => {
    const id = Number(req.params.id)

    if (id) {
        const data = getTasksById(id)
          if(data.id){
              res.status(200).json(data)
          }else  {
            res.status(400).json({message: 'invalid ID'})
          }
    }else {
        res.status(400).json({message: 'Id es no a number'})
    }
}


// Delete 
const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if(typeof id === 'number'){
      const deleted = deleteTasks(id)
      if(deleted){
        res.status(400).json({message: ' Try with another ID'})
      }else {
        res.status(204).json()
      }
    }else {
      res.status(400).json({message: ' invalid ID '})
    }
}

const create = (req, res) => {
  const data = req.body
  if(data.name && data.description && data.status){
    const response = createTasks (data)
    res.status(201).json({message: ' Task has been created' } )
  }else {
    res.status(400).json({message: ' invalid Arguments'})
  }
}

const update = (req, res) => {
  const id = Number(req.params.id)
  const data = req.body
  if(data.name && data.description && data.status){
    const response = editTasks (id, data)
    res.status(201).json({message: ' Task updated'})
  }else {
    res.status(400).json({message: ' invalid Arguments'})
  }


}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
}

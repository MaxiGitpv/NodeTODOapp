const baseDatos = [
    {
      id: 1, 
      name: "Proveedores",
      description: 'Se requiere llamar a la lista de proveedores',
      status: "activa",
        
    },
    {
      id: 2, 
      name: "Evaluacion",
      description: 'Analisis detallado de cada productos ',
      status: "inactiva",
      
  
    },
    {
      id: 3, 
      name: "contratacion",
      description: 'Llevar a cabo la contratacion de cada proveedor',
      status: "activa",
  
    }
  ]

//  obtener todas las tareas
const getAlltasks = () => {
    return baseDatos
}

//  obtener una tarea especifico
const getTasksById = (id) => {
    const filteredDB = baseDatos.filter((tasks) => tasks.id === id)
    return filteredDB[0]
}

//  Crear una nueva tarea
const createTasks = (tasksObj) => {
    if (baseDatos.length === 0) {
        const newUser = {
            id: 1,
            name: tasksObj.name,
            description: tasksObj.description,
            status: tasksObj.status,
        }
        baseDatos.push(newUser)
        return newUser
    } 
    const newUser = {
        id: baseDatos[baseDatos.length -1].id +1,
        name: tasksObj.name,
        description: tasksObj.description,
        status: tasksObj.status,
    };
    baseDatos.push(newUser)
}

// Delete 
const deleteTasks = (id) => {
    const index = baseDatos.findIndex((item) => item.id === id);
    if (index !== -1) {
        baseDatos.splice(index, 1)
        return false
    }
}
// Modificar un usuario

const editTasks = (id, data) => {
    const index = baseDatos.findIndex((item) => item.id === id);
    if (index !== -1){
        baseDatos[index] = data
        return baseDatos[index]
    }else{
        createTasks(data)
        return baseDatos.at(-1)
    }
        
}   



// Exportar las funciones

module.exports = {
    getAlltasks,
    createTasks,
    getTasksById,
    editTasks,
    deleteTasks
}

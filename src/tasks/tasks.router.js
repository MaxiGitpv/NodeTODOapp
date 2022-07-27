const router = require('express').Router();
const httptasks = require('./tasks.http');


router.route('/tasks')
    .get(httptasks.getAll)
    .post(httptasks.create)

router.route('/tasks/:id')
    .get(httptasks.getById)
    .put(httptasks.update)
    .delete(httptasks.deleteById) 



module.exports = {
        router
}   
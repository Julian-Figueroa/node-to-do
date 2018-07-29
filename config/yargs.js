const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente a la tarea'
    }
}


const argv = require('yargs')
    .command('actualizar', 'Actualiza la tarea por hacer', opts)
    .command('crear', 'Crea una nueva tarea', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;


module.exports = {
    argv
}
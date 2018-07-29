//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log('Tarea ', tarea);
        
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado ) {
            
            console.log('Tarea: ', tarea.descripcion );
            console.log('Estado: ', tarea.completado );
            
        }

        break;

    case 'actualizar':
        
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizado: ', actualizado);

        break;

    case 'borrar':
        
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Borrado: ', borrado);

        break;

    default:
        break;
}
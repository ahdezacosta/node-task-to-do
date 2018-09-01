const argv = require('./config/yargs').argv
var colors = require('colors');

const porHacer = require('./to-do/por-hacer');
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        porHacer.getListado().forEach(tarea => {
            console.log('==========================='.green);
            console.log(`Tarea: ${ tarea.descripcion }`);
            console.log(`Completado: ${ tarea.completado }`);
            console.log('==========================='.green);
        });
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion);
        if (actualizado) {
            console.log(`Actualizada la tarea ${ argv.descripcion}`);
        } else {
            console.log(`No se actualizo la tarea ${ argv.descripcion}`);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log(`Borrada la tarea ${ argv.descripcion}`);
        } else {
            console.log(`No se Borro la tarea ${ argv.descripcion}`);
        }
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
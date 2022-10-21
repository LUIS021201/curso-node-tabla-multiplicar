const { describe } = require('yargs');

const argv = require('yargs')
    .option({
        'b': {

            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'

        },
        'l': {

            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en la consola'

        },
        'h': {

            alias: 'hasta',
            type: 'number',
            describe: 'Es hasta donde llega la tabla de multiplicar'

        }
    }).check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número';
        }
        if (isNaN(argv.hasta) && argv.h != undefined) {
            throw 'El argumento h/hasta tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;
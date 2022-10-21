const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    let contenido = '';


    let salida = '=================\n';
    salida += `  Tabla del ${base.toString()}`;
    salida += '\n=================\n';
    contenido = salida;
    for (let i = 1; i < hasta + 1; i++) {
        salida += `${base} ${'x'.green} ${i} ${'='.green} ${(base*i).toString().brightMagenta}\n`;
        contenido += `${base} x ${i} = ${base*i}\n`;
    }
    if (listar) {
        console.log(salida);
    }


    nombreArchivo = `salida/tabla-${base}-a-${hasta}.txt`;
    try {
        fs.writeFileSync(nombreArchivo, contenido);
        return nombreArchivo;
    } catch (error) {
        throw (error);
    }
}

module.exports = {
    crearArchivo
}
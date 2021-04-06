const crearObjeto = function(tiempo, tipo){
    return {
        time: tiempo,
        type: tipo
    }
}

const obtenerObjetosDesdeArray = function(str){

    let particion = str.split('</li>');

    for (let index = 0; index < particion.length; index++) {
        
        particion[index] = particion[index].replace('\n  ','');
        let segundos = particion[index].substring(14,20).replace('"','').replace('"','');
        segundos = segundos.substring(segundos.length - 2);
        let minutosASeg = parseFloat(particion[index].substring(14,20).replace('"','').replace('"',''))*60;
        let video = particion[index].substring(20,35).replace('>','').replace('"','');
        let tiempo = parseInt(segundos) + parseInt(minutosASeg);
        particion[index] = crearObjeto(tiempo,video);
    }

    particion.pop();
    return particion;
}

let objetos = obtenerObjetosDesdeArray(str);

let filtro = elem => elem.type == "Redux Video";

const totalSegundos = function(arr){
    let filtroPorTipo = arr.filter(filtro);
    let tiempo = 0;

    filtroPorTipo.forEach(element => {
        tiempo += element.time;
    });

    return tiempo;
}

console.log(totalSegundos(objetos))
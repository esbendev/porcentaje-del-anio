// esta funcion devuelve la cantidad de días en el año
// se fija si es un año bisiesto
function cuantosDiasTieneEsteAnio(anio) {
    return ((anio % 4 === 0 && anio % 100 > 0) || anio % 400 == 0) ? 366 : 365;
}

function diaDelAnio(fechaHoy, anio) {
    milisegundoDeHoy = fechaHoy.getTime()
    milisegundoPrimeroDelAnio = new Date(anio, 0, 1).getTime()
    milisegundosEnUnAnio = (1000 * 60 * 60 * 24)
    var diaActual = (milisegundoDeHoy - milisegundoPrimeroDelAnio) / milisegundosEnUnAnio
    return Math.floor(diaActual + 1);
}

function devolverPorcentaje(diasEsteAnio, diaActual) {
    porcentaje = diasEsteAnio / diaActual
    return 100 / porcentaje
}

function cargarColor(porcentaje) {
    var porcentajeColor = document.getElementById("porcentaje_color");
    porcentajeColor.style = "height: " + porcentaje + "%;";
}

function cargarNumero(porcentaje) {
    var porcentajeTexto = document.getElementById("porcentaje_texto");
    var porcentajeTitulo = document.getElementById("porcentaje_titulo");
    var porcentajeLink = document.getElementById("porcentaje_link");
    porcentajeTexto.innerHTML = Math.round(porcentaje) + "%";
    porcentajeTexto.style = "opacity: 1;";
    porcentajeTitulo.style = "opacity: 1;";
    porcentajeLink.style = "opacity: 1;";
}

function actualizarPagina() {
    // primero quiero la fecha de hoy
    const fechaHoy = new Date();

    // sacamos el año de la fecha de hoy...
    const anio = fechaHoy.getFullYear();
    const diasEsteAnio = cuantosDiasTieneEsteAnio(anio);
    const diaActual = diaDelAnio(fechaHoy, anio);
    var porcentaje = devolverPorcentaje(diasEsteAnio, diaActual);
    setTimeout(function () {
        cargarColor(porcentaje);
        cargarNumero(porcentaje);
    }, 1000);
}


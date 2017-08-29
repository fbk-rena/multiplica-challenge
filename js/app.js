const cargarPagina = function () {
    $('.dropdown-button').dropdown();
    $('.muestraNav').click(muestraNav);
    $('.ocultaNav').click(ocultaNav);
    $('select').material_select();
}
const ocultaNav = function () {
    $('#navSesion').hide();
}
const muestraNav = function () {
    $('#navSesion').show();
}

$(document).ready(cargarPagina);

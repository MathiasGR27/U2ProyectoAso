$(document).ready(function () {
    $.ajax({
        url: 'php/server.php?funcion=mostrar',
        type: 'POST',
        dataType: 'json',
        success: function (datos) {
            if (datos.length > 0) {
                const columnas = Object.keys(datos[0]);
                datos.forEach(fila => {
                    let filaHtml = '<tr>';
                    columnas.forEach(columna => {
                        filaHtml += `<td>${fila[columna]}</td>`;
                    });
                    filaHtml += '</tr>';
                    $('#contenido').append(filaHtml);
                });
            } else {
                $('#mensaje').text('No hay datos disponibles.');
            }
        },
        error: function () {
            $('#mensaje').text('Error al cargar los datos.');
        }
    });
});
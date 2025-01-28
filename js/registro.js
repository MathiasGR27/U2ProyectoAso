$(function(){
    $( "#registro").click(function(){
        let nombre = $("#nombre").val();
        let correo = $("#correo").val();
        let contraseña = $("#contraseña").val();
        agregarUsuario(nombre,correo,contraseña);
    })
});

$("#form").on("submit", function (event) {
    event.preventDefault();
});

async function agregarUsuario(nombre, correo, contraseña) {
    await fetch("php/server.php?funcion=registro",{
        method: 'POST',
        body: JSON.stringify({nombre: nombre, correo: correo, contraseña: contraseña})
    });
    window.location.href = "usuarios.html";
}
const formulario = document.getElementById("FormComentario");
const inputs = document.querySelectorAll("FormComentario input");

const expresiones = {
    name: /^(?=.{6,}$)[a-zA-Z]+( [a-zA-Z]+)+$/,
    //(?=.{6,}$) Asegura que el string sea minimo de 6 caracteres
    //[a-zA-Z]+ Primer nombre solo letras
    //( [a-zA-Z]+)+ Al menos un espacio seguido de mas letras el "+" asegura que el espacio sea obligatorio
    password: /^[a-zA-Z0-9]{8,}$/,
    age: /^[0-9]+$/,
    phone: /^[0-9]{7,}$/,
    direction: /^[a-zA-Z0-9 ]{5,}$/,
    city: /^[a-zA-Z0-9 ]{3,}$/,
    postalcode: /^[a-zA-Z0-9 ]{3,}$/,
    dni: /^[0-9]+{0,8}$/,
    



}
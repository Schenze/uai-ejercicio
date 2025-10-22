const Formulario = document.getElementById("FormComentario");
const Inputs = document.querySelectorAll("FormComentario input");

const Expresiones = {
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

const ValidacionForm = (e) =>
{
    names = document.getElementById("labelname");
    emails = document.getElementById("labelemail");
    passwords = document.getElementById("labelpassword");
    ages = document.getElementById("labelage");
    phones = document.getElementById("labelphone");
    directions = document.getElementById("labeldirection");
    cities = document.getElementById("labelcity");
    postalcodes = document.getElementById("labelpostalcode");
    dnis = document.getElementById("labeldni");

    console.log("primera instancia de:",e.target.name);

    switch (e.target.name)
    {
        case "name":
            if(Expresiones.name.test(e.target.value))
            {
                names.style.color = "greenyellow";
            }else
            {
                names.style.color = "red";
            }
         break;

            case "email":
            if(Expresiones.email.test(e.target.value))
            {
                emails.style.color = "greenyellow";
            }else
            {
                emails.style.color = "red";
            }
         break;

            case "password":
            if(Expresiones.passwords.test(e.target.value))
            {
                passwords.style.color = "greenyellow";
            }else
            {
                passwords.style.color = "red";
            }
         break;

            case "age":
            if(Expresiones.ages.test(e.target.value))
            {
                ages.style.color = "greenyellow";
            }else
            {
                ages.style.color = "red";
            }
         break;

            case "phone":
            if(Expresiones.phones.test(e.target.value))
            {
                phones.style.color = "greenyellow";
            }else
            {
                phones.style.color = "red";
            }
         break;

            case "direction":

            if(Expresiones.directions.test(e.target.value))
            {
                directions.style.color = "greenyellow";
            }else
            {
                directions.style.color = "red";
            }
         break;

            case "city":
            if(Expresiones.cities.test(e.target.value))
            {
                cities.style.color = "greenyellow";
            }else
            {
                cities.style.color = "red";
            }
         break;

            case "postalcode":
            if(Expresiones.postalcodes.test(e.target.value))
            {
                postalcodes.style.color = "greenyellow";
            }else
            {
                postalcodes.style.color = "red";
            }
         break;

            case "dni":
            if(Expresiones.dnis.test(e.target.value))
            {
                dnis.style.color = "greenyellow";
            }else
            {
                dnis.style.color = "red";
            }
         break;
    }
    console.log("segunda instancia de:",e.target.name);
}   // no anda ? porque ???

inputs.forEach((input) => {
    input.addEventlistener('keyup',ValidacionForm);
    input.addEventlistener('blur',ValidacionForm);
});
Formulario.addEventListener('submit',(e) => {
    e.preventDefault();
});
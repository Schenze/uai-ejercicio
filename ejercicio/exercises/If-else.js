var valor = 0;
valor = Math.random();
if (valor >= 0.5)
{
    console.log("El valor es mas grande que 0.5",valor);
}else   
{
    console.log("El valor es mas pequño que 0.5",valor);
}

var age;
age = 0;
max = 100;
function RandomInt(maximo)
{
    return (Math.random() * max);
}

if(RandomInt() <= 2 )
{
    console.log("Es un bebe");
}
if(RandomInt() > 2 && 12);
{
    console.log("Es un niño");
}
if(RandomInt() > 13 && 19)
{
    console.log("Es un adolecente");
}
if(RandomInt() > 19 && 30)
{
    console.log("Es un Joven");
}
if(RandomInt() > 30 && 60) // 31 ? por que?
{
    console.log("Es un Adulto");
}
if(RandomInt() > 60 && 75) // 61 ? por que? queeee
{
    console.log("Es un Adulto Mayor");
}
if(RandomInt() > 75)  // 31 ? por que?
{
    console.log("Es un Anciano");
}
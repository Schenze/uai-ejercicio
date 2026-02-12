
var sum1,sum2;
sum1 = 5;
sum2 = 9;

function SumarValores (sum1,sum2)
{
    var resultado;
    resultado = sum1 + sum2;
    return resultado;
}

console.log(SumaValores());

if(typeof SumaValores() === 'number')
{
    console.log("Esto es un numero",SumarValores());
}else
{
    console.log("Esto no es un numero");
    return NaN;
}

function IntOrDouble(sum1) // true -> entero - false -> fraccion
{
    var resultado;
    resultado = sum1 % 1;
    if(resultado == 0)
    {
        return true;    
    }else
    {
        return false;
    }
}

function SumAndRoundUp(sum1,sum2)
{
    SumarValores(sum1,sum2);

    if(IntOrDouble(sum1))
    {
        console.log(sum1);
    }else
    {
       console.log("No es un numero entero: ", Math.round(sum1)) ;
    }

    if(IntOrDouble(sum2))
    {
        console.log(sum2);
    }else
    {
        console.log("No es un numero entero: ", Math.round(sum2));
    }
}

console.log("???");
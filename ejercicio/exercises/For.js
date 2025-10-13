var arrayFor = [manzana,banana,naranja,zanaoria,];
for (i = 0;i<arrayFor.length();i++)
{
    console.log(arrayFor[i]);
}


function MayusFunction(arrayFor)
{
var stringconv,stringconv2;
stringconv = arrayFor
stringconv2 = stringconv;
stringconv = stringconv.substring(0,1);
stringconv2 = stringconv2.substring(1,11);
String.prototype.toUpperCase(stringconv);
console.log(stringconv + stringconv2);
}
for (i=0;i<arrayFor.length();i++)
{
    console.log(MayusFunction(arrayFor[i]));
}
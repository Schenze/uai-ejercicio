var stringUpper;
stringUpper = "texto en minuscula";
String.prototype.toUpperCase(stringUpper);
console.log(stringUpper);

var stringSub,stringmitad1,stringmitad2;
stringSub = "Hola mundo";
stringmitad1 = stringSub.substring(0,4);
stringmitad2 = stringSub.substring(6,10);
console.log(stringmitad1 + "\n");
console.log(stringmitad2);

var stringconv,stringconv2;
stringconv = "buenos dias";
stringconv2 = stringconv;
stringconv = stringconv.substring(0,1);
stringconv2 = stringconv2.substring(1,11);
String.prototype.toUpperCase(stringconv);
console.log(stringconv + stringconv2);

var stringIndex,indice;
stringIndex = "buenas tardes";
indice = stringIndex.indexOf(" ");
console.log("Ubicacion del indice: ",indice);

var stringTotal,stringPrincipio,stringEspacio,stringFinal,stringPrimeraPalabra;
stringTotal = "cohete espacial";
stringPrincipio = stringTotal.substring(0,1); // c
stringEspacio = stringTotal.indexOf(" ");  // index del espacio (el numero)
String.prototype.toUpperCase(stringPrincipio); // C
stringPrimeraPalabra = stringPrincipio + stringTotal.substring(1,stringEspacio); // C + ohete
stringFinal = stringTotal.substring(stringEspacio,stringEspacio + 1); // e
String.prototype.toUpperCase(stringFinal);
console.log(stringPrincipio + stringFinal);

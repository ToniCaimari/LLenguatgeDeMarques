var dni = prompt("Posa el teu DNI sense lletra:");
var numdni=parseInt(dni)
var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
var resta= numdni % 23 
if (numdni > 1 && numdni <99999999) 
{document.writeln('El teu dni és '+dni+lletres[resta]);
}
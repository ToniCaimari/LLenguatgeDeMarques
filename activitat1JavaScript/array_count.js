var array = prompt('Escriu una frase:');
var split = array.split(" ");
document.write(array+'<br>');
document.write('La teva frase té '+split.length+' paraules!<br>');
document.write(split[0]+', '+split.pop()+'<br>')
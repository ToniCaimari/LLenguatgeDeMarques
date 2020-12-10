var array=[];
var suma=0;
var product=1
for (i=0; i<10; i++)
{
    array[i]= parseInt(prompt('Escriu una numero:'))
    suma+=array[i]
    product*=array[i]
};
document.write(suma+'<br>');
document.write(product);


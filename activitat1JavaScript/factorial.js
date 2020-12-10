var total=1;
var numero=parseInt(prompt('Quin és el factorial de...?: '));
for (i=1; i<=numero; i++)
{
    total=i*total;
}
document.write(total + '!');
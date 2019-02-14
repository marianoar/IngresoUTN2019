function Mostrar()
{
var edad=parseInt(document.getElementById("edad").value);

//if(edad>=13 && edad<=18) {
//alert("es adolescente");}
if (!(edad<13 || edad >17)){
    alert("es adolescente");
}

}//FIN DE LA FUNCIÓN
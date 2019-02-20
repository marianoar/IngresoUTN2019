function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

var treinta="Este mes tiene 30 dias";
var veintiocho="Este mes tiene 28 dias";
var treintayuno="Este mes tiene 31 dias";

switch(mesDelAño){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    alert (treintayuno);
    break;
    case "Febrero":
    alert(veintiocho);
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert(treinta);
    break;
}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
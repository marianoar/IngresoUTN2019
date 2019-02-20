function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
var mensaje1="Este mes no tiene mas de 29 dias";
var mensaje2="Este mes tiene 30 dias o mas";

switch (mesDelAño){
    case "Febrero":
    alert(mensaje1);
    break;

    default: 
    alert(mensaje2);
    break
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN
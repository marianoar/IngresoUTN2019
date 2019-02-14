function Mostrar()
{

    var edad=parseInt(document.getElementById("edad").value);
    var estado=document.getElementById("estadoCivil").value;
    

    if (edad>=18 && estado=="Soltero") {

        alert("es soltero y no es menor");
	
    }

}//FIN DE LA FUNCIÓN
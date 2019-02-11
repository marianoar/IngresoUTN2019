/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
    var uno=parseInt(document.getElementById("numeroUno").value);
    var dos=parseInt(document.getElementById("numeroDos").value);
    alert("la suma es : "+(uno+dos));
}

function restar()
{
    var uno=parseInt(document.getElementById("numeroUno").value);
    var dos=parseInt(document.getElementById("numeroDos").value);
    alert("la resta es : "+(uno-dos));
	
}

function multiplicar()
{ 
    var uno=parseInt(document.getElementById("numeroUno").value);
    var dos=parseInt(document.getElementById("numeroDos").value);
    alert("el producto es : "+(uno*dos));
}

function dividir()
{
    var uno=parseInt(document.getElementById("numeroUno").value);
    var dos=parseInt(document.getElementById("numeroDos").value);
    alert("la division es : "+(uno/dos));
}


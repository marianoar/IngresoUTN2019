/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var valor=parseInt(document.getElementById("importe").value);
    var desc=25;
    desc=valor*desc/100;
    alert("el descuento es de :"+desc);
    valor=valor-desc;
    document.getElementById("resultado").value=valor;
}

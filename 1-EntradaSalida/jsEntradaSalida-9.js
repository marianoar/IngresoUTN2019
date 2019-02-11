/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var porcentaje=10;
    var aumento;

    sueldo=parseInt(document.getElementById("sueldo").value);
    aumento=sueldo*porcentaje/100;

    alert("su aumento es: "+aumento);
    
    sueldo=sueldo+aumento;
    document.getElementById("resultado").value=sueldo;
}

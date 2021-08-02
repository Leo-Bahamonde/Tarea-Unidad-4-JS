let distancia = prompt("Ingrese la distancia")

if (distancia<=999) {
    alert("desplácese a pie")
}
else if(distancia>=1000 && distancia<=9999 ) {
    alert("desplácese en bicicleta")
}
else if(distancia>=10000 && distancia<=30000 ) {
    alert("desplácese en colectivo")
}
else if(distancia>=30001 && distancia<=100000 ) {
    alert("desplácese en auto")
}
else if(distancia>=100001) {
    alert("desplácese en avion")
}
else{
    alert("Dato ingresado no valido")
} 


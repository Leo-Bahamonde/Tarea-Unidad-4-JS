let numero1 = "";
let numero2 = "";
    
numero1=parseInt(prompt("Ingrese el primer numero 1"));
numero2=parseInt(prompt("Ahora ingrese el segundo numero"));
    
        if(numero1 >= numero2){
            document.write("El numero mayor es: " + numero1);
            
        }
         else if (numero1 <= numero2){
            document.write("El Numero mayor es : " + numero2);
        }
       else {document.write("El dato ingresado no es correcto")}
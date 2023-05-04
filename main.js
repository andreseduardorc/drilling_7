while (true) {
    let opcion = prompt("Menú:\n1. Calcular cuál número es mayor\n2. Sumar\n3. Restar\n4. multiplicar\n5. dividir\n6. mostrar los numeros\n7. despedir");
  
    if (opcion == "1") {
      let num1 = parseInt(prompt("Ingrese el primer número: "));
      let num2 = parseInt(prompt("Ingrese el segundo número: "));
      if (num1 > num2) {
        alert(num1 + " es mayor que " + num2);
      } else if (num2 > num1) {
        alert(num2 + " es mayor que " + num1);
      } else {
        alert("Los números son iguales");
      }
    } else if (opcion == "2") {
      let num1 = parseInt(prompt("Ingrese el primer número: "));
      let num2 = parseInt(prompt("Ingrese el segundo número: "));
      let resultado = num1 + num2;
      alert("El resultado de la suma es: " + resultado);
    } else if(opcion == "3"){
        let num1 = parseInt(prompt("Ingrese el primer número: "));
        let num2 = parseInt(prompt("Ingrese el segundo número: "));
        let resultado = num1 - num2;
        alert("el resultado de la resta es: " + resultado);
    }else if(opcion == "4"){
        let num1 = parseInt(prompt("Ingrese el primer número: "));
        let num2 = parseInt(prompt("Ingrese el segundo número: "));
        let resultado = num1 * num2;
        alert("el resultado de la multiplicacion  es: " + resultado);
    } else if(opcion == "5"){
        let num1 = parseInt(prompt("Ingrese el primer número: "));
        let num2 = parseInt(prompt("Ingrese el segundo número: "));
        let resultado = num1 / num2;
        alert("el resultado de la division es: " + resultado);
    }else if(opcion == "6"){
        let num1 = parseInt(prompt("Ingrese el primer número: "));
        let num2 = parseInt(prompt("Ingrese el segundo número: "));
       
        alert("los numeros ingresados son  " + num1 + "y" + num2);
    }else if(opcion == "7"){
        alert("Gracias por Participar")
    }
     else {
      alert("Opción inválida");
    }
    
    
  }
  
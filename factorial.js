// Función que calcula el factorial 
function calcularFactorial() {
    let num = prompt("Inserta el número para obtener el factorial:");
  
    // Verifica si es número, si no lo pide de nuevo.
    while (isNaN(num) || num === null || num === "") {
      alert("¡Este no es un numero válido, vuelve a intentar!");
      num = prompt("Intenta otra vez, porfiis:");
    }
  
    num = Number(num);
    let factorial = 1;
  
    // El factorial (1 x 2 x 3 x ... x num)
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
  
    // Muestra el resultado en consola y en el HTML (si, si le puse brillitos :3)
    console.log(`El factorial de ${num} es: ${factorial}`);
    document.getElementById("resultado").innerHTML = 
      `✨ <b>${num}! = ${factorial}</b> ✨`;
  }
  
  // Llama a la función cuando se cargue la página
  window.onload = calcularFactorial;

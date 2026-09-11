const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//Desenhando uma linha
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);

//Fazer outra linha
contexto.lineTo(200, 200);
contexto.stroke();

//Desenhando um retângulo
contexto.fillRect(50, 50, 150, 100);
//                         x, y, largura, altura


//Contorno de um retângulo
contexto.strokeRect(250, 50, 150, 100);


//Desenhando um círculo
// x e y
// raio
// true = sentido anti-horário
// PI = 3,14
// anguloInicial
// anguloFinal
contexto.beginPath();
contexto.arc(250, 250, 50, 0,  Math.PI, true  );
contexto.stroke();
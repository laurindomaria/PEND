const canvas = document.querySelector("#canvas");

const contexto = canvas.getContext("2d");

// Formato
contexto.lineWidth = 6;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// Círculo - cabeça
contexto.beginPath();
contexto.arc(300, 100, 25, 0, Math.PI * 2);
contexto.stroke();

// Linha - corpo
contexto.beginPath();
contexto.moveTo(300, 125);
contexto.lineTo(300, 230);
contexto.stroke();

// Braço esquerdo
contexto.beginPath();
contexto.moveTo(300, 145);
contexto.lineTo(260, 180);
contexto.lineTo(320, 200);
contexto.stroke();

// Braço direito
contexto.beginPath();
contexto.moveTo(300, 145);
contexto.lineTo(345, 175);
contexto.lineTo(385, 140);
contexto.stroke();

// Perna esquerda
contexto.beginPath();
contexto.moveTo(300, 230);
contexto.lineTo(260, 275);
contexto.lineTo(260, 330);
contexto.stroke();

// Perna direita
contexto.beginPath();
contexto.moveTo(300, 230);
contexto.lineTo(340, 275);
contexto.lineTo(340, 330);
contexto.stroke();
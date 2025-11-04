function calcular() {
    const input = document.getElementById("horaSono").value;

    if (!input) {
        alert("Digite um horário válido!");
        return;
    }

    // Pega hora e minuto do inp
    const [hora, minuto] = input.split(":").map(Number);

    // Cria um objeto Date com base na hora informada
    const horaBase = new Date();
    horaBase.setHours(hora, minuto, 0);

    // Ciclos de sono 
    const ciclos = [5, 6, 7]; // Cada ciclo = 1h30

    const resultados = ciclos.map(c => {
        const acordar = new Date(horaBase.getTime() + c * 90 * 60000);
        return acordar.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    });

    // Exibe os horários e os ngc com as cor
    const [verde, amarela, vermelha] = document.querySelectorAll(".hora");
    verde.textContent = resultados[0];
    amarela.textContent = resultados[1];
    vermelha.textContent = resultados[2];
}
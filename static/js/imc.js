function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultadoIMC = document.getElementById("resultadoIMC");
    const mensagem = document.getElementById("mensagem");

    if (!altura || !peso || altura <= 0 || peso <= 0) {
        resultadoIMC.textContent = "Por favor, digite valores válidos.";
        mensagem.textContent = "";
        return;
    }

    const imc = peso / (altura * altura);
    resultadoIMC.textContent = `SEU IMC É: ${imc.toFixed(2)}`;

    let status = "";

    if (imc < 18.5) {
        status = "abaixo do peso. Procure se alimentar melhor!";
    } else if (imc < 24.9) {
        status = "com o peso ideal! Parabéns!";
    } else if (imc < 29.9) {
        status = "com sobrepeso. Cuide da sua alimentação!";
    } else if (imc < 34.9) {
        status = "com obesidade grau I. Procure orientação médica.";
    } else if (imc < 39.9) {
        status = "com obesidade grau II. Cuide da sua saúde.";
    } else {
        status = "com obesidade grau III. É importante buscar ajuda médica.";
    }

    mensagem.textContent = `Isso significa que você está ${status}`;
}

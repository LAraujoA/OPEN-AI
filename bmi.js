function calcularIMC() {
    const pesoKg = parseFloat(document.getElementById('peso').value);
    const pesoLb = parseFloat(document.getElementById('pesoLb').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    let peso = NaN;
    if (!isNaN(pesoKg) && pesoKg > 0) {
        peso = pesoKg;
    } else if (!isNaN(pesoLb) && pesoLb > 0) {
        peso = pesoLb * 0.453592; // convertir lb a kg
    }

    if (!peso || !estatura || estatura === 0) {
        document.getElementById('resultado').textContent = 'Por favor ingrese peso y estatura válidos.';
        return;
    }

    const imc = peso / (estatura * estatura);
    let estado;
    if (imc < 18.5) {
        estado = 'Desnutrición';
    } else if (imc >= 18.5 && imc < 25) {
        estado = 'Normal';
    } else {
        estado = 'Obesidad';
    }

    const resultado = `Su IMC es ${imc.toFixed(2)} - Estado: ${estado}`;
    document.getElementById('resultado').textContent = resultado;
}

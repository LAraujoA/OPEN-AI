function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

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

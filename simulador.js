//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let arriendo = parseFloat(document.getElementById("txtArriendo").value);
let alimentacion = parseFloat(document.getElementById("txtAlimentacion").value);
let varios = parseFloat(document.getElementById("txtVarios").value);

let egresos = arriendo + alimentacion + varios;
texto("spnTotalGastos", egresos);
 
    let disponible = calcularDisponible(ingresos, egresos);
 
    texto("spnDisponible", disponible);
 
    let capacidadDePago = calcularCapacidadDePago(disponible);
 
    texto("spnCapacidadPago", capacidadDePago);

    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazoAnios = parseFloat(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    let interesValor=calcularInteresSimple(monto,tasa,plazoAnios);

    texto("spnInteresPagar",interesValor);

    let totalPagar=calcularTotalPagar(monto,interesValor);
    texto("spnTotalPrestamo",totalPagar);

    let cuotaMensual=calcularCuotaMensual(totalPagar,plazoAnios);
    texto("spnCuotaMensual",cuotaMensual);

    let analizarCredito=aprobarCredito(capacidadDePago,cuotaMensual);

    let estado = document.getElementById("spnEstadoCredito");

if(analizarCredito){
    estado.innerText = "CREDITO APROBADO";
    estado.className = "estado-aprobado";
}else{
    estado.innerText = "CREDITO RECHAZADO";
    estado.className = "estado-rechazado";
}

let resultados = document.querySelectorAll("p");

resultados.forEach(p => {
    p.classList.add("animar");

    setTimeout(() => {
        p.classList.remove("animar");
    }, 400);
});
let porcentaje = Math.min((cuotaMensual / capacidadDePago) * 100, 100);

document.getElementById("barraCapacidad").style.width = porcentaje + "%";
}



function validarNumero(idInput, idError){
    let valor = document.getElementById(idInput).value;
    let error = document.getElementById(idError);

    // 1. Vacío
    if(valor.trim() === ""){
        error.innerText = "Este campo es obligatorio";
        return;
    }

    // 2. Solo números
    if(!/^[0-9]+$/.test(valor)){
        error.innerText = "Solo se permiten números";
        return;
    }

    // 3. Máximo 5 dígitos
    if(valor.length > 5){
        error.innerText = "Máximo 5 dígitos";
        return;
    }

    // 4. Todo correcto
    error.innerText = "";
}



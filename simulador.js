//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
 
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
    if (analizarCredito){
    document.getElementById("spnEstadoCredito").innerText= "CREDITO APROBADO";}
    else{
    document.getElementById("spnEstadoCredito").innerText= "CREDITO RECHAZADO";}
}


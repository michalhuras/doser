function countDose() {
    var result = (document.getElementById("patientWeight").value * document.getElementById("inputDose").value * document.getElementById("drugVolume").value) / document.getElementById("drugConcentration").value
    document.getElementById("resultDoseSpan").innerHTML = result;
    document.getElementById("singleDoseSpan").innerHTML = result / document.getElementById("dosesPerDay").value;
}

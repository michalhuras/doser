function count_it() {
    var result = (document.getElementById("weight").value * document.getElementById("dose").value * document.getElementById("volume").value) / document.getElementById("concentration").value
    document.getElementById("result_dose").innerHTML = result;
    document.getElementById("single_dose").innerHTML = result / 2;
}


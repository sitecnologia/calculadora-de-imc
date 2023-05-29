resultado = document.querySelector("#resultado");

function calcula() {
    peso = parseInt(document.querySelector("#peso").value);
    altura = parseInt(document.querySelector("#altura").value);
    altura = altura / 100;
    if (isNaN(peso) === true) {
        alert("Informe um peso válido!");
    } else if (isNaN(altura)) {
        alert("Informe uma altura válida!");
    } else {
        bmi = parseFloat(peso / (altura * altura)).toFixed(1);
        console.log(bmi)
        if (bmi < 18.5) {
            console.log("Abaixo do peso!");
            document.querySelector("h2").innerHTML = "O seu resultado é " + bmi;
            document.querySelector("h3").innerHTML = "Abaixo do peso!";
            resultado.classList.remove("red");
            resultado.classList.remove("green");
            resultado.classList.add("orange");
        } else if (18.5 < bmi && bmi < 24.9) {
            console.log("Peso normal");
            document.querySelector("h2").innerHTML = "O seu resultado é " + bmi;
            document.querySelector("h3").innerHTML = "Peso saudável!";
            resultado.classList.add("green");
            resultado.classList.remove("red");
            resultado.classList.remove("orange");
        } else if (25 < bmi && bmi < 29.9) {
            console.log("Acima do peso!");
            document.querySelector("h2").innerHTML = "O seu resultado é " + bmi;
            document.querySelector("h3").innerHTML = "Acima do peso!";
            resultado.classList.add("orange");
            resultado.classList.remove("red");
            resultado.classList.remove("green");
        } else if (bmi > 30) {
            console.log("Obeso!");
            document.querySelector("h2").innerHTML = "O seu resultado é " + bmi;
            document.querySelector("h3").innerHTML = "Obeso!";
            resultado.classList.add("red");
            resultado.classList.remove("orange");
            resultado.classList.remove("green");
        }
    }
}
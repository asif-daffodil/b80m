console.log("Kazi class e ache");

document.getElementById("kazi").innerHTML = "Kazir bongsho Gaji";

function nazatFunc () {
    document.getElementById("kazi").innerHTML = "Nazat khali mobile tipe";
}

function kaziFunc () {
    document.getElementById("kazi").innerHTML = "Kazir bongsho Gaji";
}

var nazatImg = document.getElementById("nazatImg");
function nazatSmile() {
    nazatImg.src = "./images/nazatSmiling.jpeg";
}
function nazatSad() {
    nazatImg.src = "./images/nazatSad.jpeg";
}
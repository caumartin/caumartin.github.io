
document.getElementById("info").addEventListener("click", mostrarInfo);
document.getElementById("hab").addEventListener("click", mostrarHabilidades);
document.getElementById("exp").addEventListener("click", mostrarExp);

function mostrarUL () {
    document.getElementById("datos").style= "display: block"
}

function mostrarInfo() {
    console.log("info")
    mostrarUL()
    document.getElementById("d1").innerHTML="Edad: 29"
    document.getElementById("d2").innerHTML="Direccion: Blv Dorado 2999"
    document.getElementById("d3").innerHTML="Estado Civil: Casado"
    document.getElementById("d4").innerHTML="Hijos: 2"
}

function mostrarHabilidades() {
    console.log("habilidades")
    mostrarUL()
    document.getElementById("d1").innerHTML="Programacion JS, Python"
    document.getElementById("d2").innerHTML="SQL"
    document.getElementById("d3").innerHTML="Entornos Windows, Linux"
    document.getElementById("d4").innerHTML="Aplicaciones Android"
}

function mostrarExp() {
    console.log("experiencia")
    mostrarUL()
    document.getElementById("d1").innerHTML="2 años en Google"
    document.getElementById("d2").innerHTML="2 años en Netflix"
    document.getElementById("d3").innerHTML="3 años desarrollo web"
    document.getElementById("d4").innerHTML="1 año desarrollo BackEnd"
}
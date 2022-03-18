function mostrar(){
    document.getElementById("myModalhellomedia").classList.toggle("mostrarhellomedia")
}
function cerrar() {
    document.getElementById("myModalhellomedia").classList.remove("mostrarhellomedia")
}
document.getElementById("modalhminfo").onclick = function(){
    mostrar();
}
document.getElementById("close-div").onclick = function(){
    cerrar();
}
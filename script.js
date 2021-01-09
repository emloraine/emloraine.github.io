function outputyear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}
function lastModified() {
    document.getElementById("last").innerHTML = new Date(document.lastModified);
}
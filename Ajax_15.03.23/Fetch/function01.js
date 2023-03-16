function getTextServer() {
    //var filename = "bd.txt";
    var filename = "users.json";
    fetch(filename)
        // .then(response => response.text())
        .then(response => response.json())
        .then(dados => document.getElementById("textServer").innerHTML = dados.usuario);
        // .then(dados => document.getElementById("textServer").innerHTML = dados.idade);
}
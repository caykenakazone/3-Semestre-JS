
function getTextServer() {
    filename = "users.json"
    // filename = "bd.txt"
    axios.get(filename)
        .then(response => document.getElementById("textServer").innerHTML = JSON.stringify(response.data.usuario) + "(Axios)");
        
}
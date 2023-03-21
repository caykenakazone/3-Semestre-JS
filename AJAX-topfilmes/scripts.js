function getTopFilmes() {
    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=f8fc3cf46a374b9753719e27cd68054a"
    fetch(filename)
        .then(response => response.json())
        .then(data => {          
            
            for (i = 0; i <= 9; i++){
            
                    var titulo = data.results[i].title;
                    var avaliacao = data.results[i].vote_average;
                    var div = document.createElement("div");
                    div.setAttribute("class","box")
                    var p = document.createElement("p");
                    document.body.appendChild(div); 
                    div.appendChild(p);
                    p.textContent = `Título: ${titulo}\nAvaliação: ${avaliacao}`;
                
            }
        })

}
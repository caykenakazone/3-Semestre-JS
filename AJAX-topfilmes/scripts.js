function getTopFilmes() {
    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=f8fc3cf46a374b9753719e27cd68054a"


    fetch(filename)
        .then(response => response.json())
        .then(data => {

            var divPai = document.createElement("div");
            divPai.setAttribute("class", "divPai");

            var divFilmes = document.createElement("div");

            var divTitulo = document.createElement("div");
            var h2 = document.createElement("h2");
            h2.innerHTML = "Top 10 Melhores Filmes";
            divTitulo.appendChild(h2);
            var img = document.createElement("img");
            img.setAttribute("src", "clapboard.png");
            var p2 = document.createElement("p")
            divTitulo.appendChild(p2)
            var home = document.createElement("a");
            home.setAttribute("href", "#");
            home.textContent = "Home";

           
            var pesquisa = document.createElement("a");
            pesquisa.setAttribute("href", "#");
            pesquisa.textContent = "Pesquisar";

           
            p2.appendChild(home);
            p2.appendChild(pesquisa);
            divTitulo.setAttribute("class", "divTitulo");
            divTitulo.appendChild(img);


            divPai.appendChild(divTitulo);
            divPai.appendChild(divFilmes);

            document.body.appendChild(divPai);

            var divContainer = document.createElement("div");
            divContainer.setAttribute("class", "divContainer");


            var count = 0; // contador para acompanhar o número de divs criadas

            for (i = 0; i <= 9; i++) {
                var posterPath = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
                var titulo = data.results[i].title;
                var avaliacao = data.results[i].vote_average;
                var popularidade = data.results[i].popularity;
                var datalanc = data.results[i].release_date;

                var div = document.createElement("div");
                div.setAttribute("class", "box");

                var img = document.createElement("img");
                img.setAttribute("src", posterPath);
                div.appendChild(img);

                var p = document.createElement("p");
                p.innerHTML = `<br>Título: ${titulo}<br>Avaliação: ${avaliacao} <br>Popularidade: ${popularidade}<br>Data de lançamento: ${datalanc}`;

                div.appendChild(p);

                divContainer.appendChild(div);
                count++; // incrementando o contador

                if (count % 3 == 0) { // a cada três divs criadas, criar uma nova div pai
                    var divPaiFilmes = document.createElement("div");
                    divPaiFilmes.setAttribute("class", "divPaiFilmes");

                    divPaiFilmes.appendChild(divContainer);
                    divFilmes.appendChild(divPaiFilmes);

                    divContainer = document.createElement("div"); // reinicializando a divContainer para a próxima iteração
                    divContainer.setAttribute("class", "divContainer");
                }
            }

            // adicionando a última divContainer restante
            if (count % 3 == 1) {
                var divPaiFilmes = document.createElement("div");
                divPaiFilmes.setAttribute("class", "divPaiFilmes");

                var divContainerAnterior = divFilmes.lastChild.firstChild;
                divContainerAnterior.appendChild(divContainer.firstChild);

                divPaiFilmes.appendChild(divContainerAnterior);
                divPaiFilmes.appendChild(divContainer);

                divFilmes.replaceChild(divPaiFilmes, divFilmes.lastChild);
            }
            else if (count % 3 == 2) {
                var divPaiFilmes = document.createElement("div");
                divPaiFilmes.setAttribute("class", "divPaiFilmes");

                divPaiFilmes.appendChild(divContainer);
                divFilmes.appendChild(divPaiFilmes);
            }
        })
}

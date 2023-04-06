// vet = [1, 2, 3, 4, 5, 6, 7, 8, 0]
// vetR = [34, 45, 23, 45, 12, 32,15]
// vett = []
// vett = vetR.filter(elemento => elemento <= 18)
// console.log(vett)

// vet = vet.map(element => element * 2)
//    console.log(vet)


// vet.forEach(element => {
//    console.log(element)
// });
function selecionarOpcao(selectDisable) {
    var select = document.getElementById("mySelect");
    var opcaoSelecionada = select.value;
    
    if (opcaoSelecionada == 1) {
        op = "geladeiras.json"
        getInfos(op);
        selectDisable.disabled = true;
    }
    if (opcaoSelecionada == 2) {
        op = "celulares.json"
        getInfos(op);
        selectDisable.disabled = true;
    }
}

function getInfos(op) {

    var filename = op;


    fetch(filename)
        .then(response => response.json())
        .then(data => {
            var marca = document.createElement("h2")
            var modelo = document.createElement("p")
            var valor = document.createElement("p")
            var img = document.createElement("img")
            img.setAttribute("class","img")
            marca.setAttribute("class", "marca")
            modelo.setAttribute("class", "modelo")
            valor.setAttribute("class", "valor")
            img.setAttribute("class", "valor")
            document.body.appendChild(marca)
            document.body.appendChild(modelo)
            document.body.appendChild(valor)
            document.body.appendChild(img)
            
            contador = 0;
            setInterval(exibirImgs,1000)
            function exibirImgs() { 

                marca.innerHTML = data.marca[contador];
                modelo.innerHTML = data.modelo[contador];
                valor.innerHTML = data.valor[contador];
               img.src = data.imgs[contador];

                contador++;
                if (contador >= data.marca.length) {
                    contador = 0;
                }
            }
            
            
        })
}


import { useState } from "react"

export default function ShowNomeCompleto(){
    const [exibeNome, setExibeNome] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    function mudarPrimeiro(e){
        setNome(e.target.value)
    }
    function mudarSegundo(e){
        setSobrenome(e.target.value)
    }

    function mudarNome(){
        setExibeNome(`${nome} ${sobrenome}`)
    }
    return(

        <div>
            <form>
                <label>Nome: 
                  <input type="text" onChange={mudarPrimeiro}/>
                </label>
                <br />
                <br />
                <label>Sobrenome: 
                  <input type="text" onChange={mudarSegundo}/>
                </label>
                <br />
                <br />
                <input type="button" value="Exibir Nome Completo" onClick={mudarNome}/>
            </form>
            <p>
                {exibeNome}

            </p>
        </div>
    )
} 

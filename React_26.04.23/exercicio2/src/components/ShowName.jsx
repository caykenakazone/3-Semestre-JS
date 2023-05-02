import { useState } from "react"

export default function showNames() {

    const [nome, setNome] = useState("CAYKE");

    function mudarNome(e) {

    // Para pegar informações dentro de caixas de texto, é usado o onChange
        setNome(e.target.value.toUpperCase())
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={mudarNome}/>
            </form>
            <p>{nome}</p>
        </div>
    )
}
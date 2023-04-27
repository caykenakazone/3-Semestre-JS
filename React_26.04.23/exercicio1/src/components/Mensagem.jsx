import { useState } from "react"

export default function mensagem({max}) {

    const [contador, setCont] = useState(max)
  
        return (
            <form action="">
            <label htmlFor="">Mensagem :</label>
            <br />
                <textarea name="text" id="texto" cols="60" rows="10" maxLength={max} onChange={e => setCont(max - e.target.value.length)}></textarea>
            <p>Restante: {contador} caracteres</p>
        </form>
    )
}
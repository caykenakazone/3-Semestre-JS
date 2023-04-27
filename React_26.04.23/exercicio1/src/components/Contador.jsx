import { useState } from "react"
import '../css/estilos.css'

export default function Contador(props) {
    const min = props.v1;
    const max = props.v2;
    const [cont, setCont] = useState(min);

    function incrementar() {
        if(cont < max)
            setCont(cont+1)
    }
    function decrementar() {
        
        if (cont > min)
            setCont(cont-1)

    }
    return (
        <div>
            <h1 className="titulo">Intervalo (limite) do Contador : <span>[{min},{max}]</span></h1>
            <h2>Valor atual do contador: {cont}</h2>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <hr />

        </div>

    )
}

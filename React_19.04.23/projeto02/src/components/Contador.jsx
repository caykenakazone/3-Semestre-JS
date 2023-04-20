import React, { useState } from 'react';

export default function Contador() {

    const [cont, setCont] = useState(0);

    function incrementar() {
        setCont(cont+1)
    
    }
    return (
        <div>
            <p className="cont">Contador: {cont}</p>
            <button onClick={incrementar}>Incrementar</button>

        </div>
    )
}


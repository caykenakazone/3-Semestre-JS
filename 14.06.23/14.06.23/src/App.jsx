import { Fragment, useEffect, useState } from "react"
import Form from "./Form";

export default function App() {

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faq2.json")
      .then(file => file.json())
      .then(conteudo => setFaqs(conteudo.faqs))
  }, []);

  function getFaqs() {
    return (
      <div>
        {faqs.map((faq, indice) => (
            <details>
              <summary>{faq.pergunta}</summary>
              <p>{faq.resposta}</p>
            </details>
          
        ))}
      </div>
    )
  }



  return (
    <div>
      {getFaqs()}
      <hr />
      <Form></Form>
    </div>
  )


  /*
  const [cont, setCont] = useState(0);
  const [cont2, setCont2] = useState(0);


  useEffect(() => {
    console.log('useEffect rodou!');
  }, [cont, cont2])

  function alterar1() {
    setCont(cont+1);
  }

  function alterar2() {
    setCont2(cont2+1);
  }

  return (
    <>
      <p>Olá, clique no botão abaixo:</p>
      <br />
      <button onClick={() => alterar1 ()}>Clique</button>
      <p>Valor atual do contador: {cont} </p>
      <br />
      <button onClick={() => alterar2 ()}>Clique2</button>
      <p>Valor atual do contador(2): {cont2} </p>
    </>
  )
}
*/
}

import { useState } from "react";

export default function AdicionarParagrafos() {
  const [paragrafos, setParagrafos] = useState([
    "Parágrafo 1. (Interface)",
    "Parágrafo 2. (Interface)"
  ]);
  const [novoParagrafo, setNovoParagrafo] = useState("");

  function salvarAlt(event) {
    setNovoParagrafo(event.target.value);
  }

  function adicionarParagrafo() {
    setParagrafos([...paragrafos, novoParagrafo]);
    setNovoParagrafo("");

  }

  return (
    <div>
      {paragrafos.map((paragrafo, index) => (
        <p key={index}>{paragrafo} </p>
      ))}
      <input type="text" value={novoParagrafo} onChange={salvarAlt} placeholder="Digite um novo parágrafo"
      />
      <button onClick={adicionarParagrafo}>Adicionar parágrafo</button>
    </div>
  );
}


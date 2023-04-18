import React, { useState, useEffect } from "react";
import AvaliacaoCliente from "./AvaliacaoCliente";

function AvaliacoesClientes() {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const avaliacoesData = [
      {
        foto: "foto01.jpg",
        nome: "Ana Bruck",
        avaliacao01: "Eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito"
      },
      {
        foto: "foto02.jpg",
        nome: "Dani Shutz",
        avaliacao01: "Eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito"
      },
      {
        foto: "foto03.jpg",
        nome: "Bia Lobo",
        avaliacao01: "Eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito"
      },
      {
        foto: "foto04.jpg",
        nome: "João Silva",
        avaliacao01: "Eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito"
      },
      {
        foto: "foto05.jpg",
        nome: "Maria Souza",
        avaliacao01: "Eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito"
      },
    ];
    setAvaliacoes(avaliacoesData);
  }, []);

  const getRandomAvaliacao = () => {
    const randomIndex = Math.floor(Math.random() * avaliacoes.length);
    return avaliacoes[randomIndex];
  };

  return (
    <section>
      {[...Array(3)].map((_, index) => (
        <AvaliacaoCliente
          {...getRandomAvaliacao()}
          key={`repeat-${index}`}
        />
      ))}
    </section>
  );
}

export default AvaliacoesClientes;

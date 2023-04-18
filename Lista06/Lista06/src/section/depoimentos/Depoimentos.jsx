import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos() {

    const avaliacoes = [
        { foto: "foto01.jpg", nome: "Ana Bruck", avaliacao01: "Eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito"},
        { foto: "foto02.jpg", nome: "Dani Shutz", avaliacao01: "eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito" },
        { foto: "foto03.jpg", nome: "Bia Wolf", avaliacao01: "eu recomendo a Leticia, pois o atendimento dela fez toda a diferença", avaliacao02: "A escolha de um imovel não foi uma tarefa fácil, principalmente no nosso caso, onde queriamos uma casa. A escolha de umprofissional qualificado ajudou muito" }
    ]

    return (
        <section>
            {avaliacoes.map((avaliacao) => (
                <AvaliacaoCliente {...avaliacao} key={avaliacao.id} />  
            ))}
        </section>
    );


}
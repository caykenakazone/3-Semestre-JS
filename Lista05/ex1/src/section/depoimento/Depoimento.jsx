import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos() {

    const avaliacoes = [
        { foto: "foto01.jpg", nome: "Ana Bruck", avaliacao01: "Eu recomendo a Letícia, pois o atendimento dela fez toda diferença", avaliacao02: "A escolha de uma imóvel, no nosso caso uma casa, não foi uma tarefa fácil" }
    ]

    return (
        <section>
            {avaliacoes.map((avaliacao) => (
                <AvaliacaoCliente {...avaliacao} key={avaliacao.id} />
            ))}
        </section>
    );


}
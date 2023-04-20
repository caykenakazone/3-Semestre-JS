import TituloSection from "../TituloSection";
import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos() {

    const avaliacoes = [
        { foto: "foto01.jpg", nome: "Ana Bruck", avaliacao01: "Estou muito feliz...", avaliacao02: "Recomendo essa corretora para todos..." },
        { foto: "foto02.jpg", nome: "Dani Shutz", avaliacao01: "Estou muito feliz...", avaliacao02: "Recomendo essa corretora para todos..." },
        { foto: "foto03.jpg", nome: "Bia Lobo", avaliacao01: "Estou muito feliz...", avaliacao02    : "Recomendo essa corretora para NINGEUM..." }
    ]

    return (
        <section>
            <TituloSection titulo="Clientes felizes. Amigos novos" />
            {avaliacoes.map((avaliacao) => (
                <AvaliacaoCliente {...avaliacao} key={avaliacao.id} />  
            ))}
        </section>
    );


}
import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function Prova() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["prova"].titulo} descricao={titulosDescricoes["prova"].descricao} />

        </section>
    )
}
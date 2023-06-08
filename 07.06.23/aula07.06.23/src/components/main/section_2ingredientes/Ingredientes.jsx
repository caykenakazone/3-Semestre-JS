import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function Ingredientes() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["ingredientes"].titulo} descricao={titulosDescricoes["ingredientes"].descricao} />
        </section>
    )
}
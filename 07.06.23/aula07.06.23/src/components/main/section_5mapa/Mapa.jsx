import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function Mapa() {
    return (
        
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["mapa"].titulo} descricao={titulosDescricoes["mapa"].descricao} />

        </section>
    )
}
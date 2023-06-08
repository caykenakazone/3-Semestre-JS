import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function Catalogo() {
    return (
        
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["catalogo"].titulo} descricao={titulosDescricoes["catalogo"].descricao} />

        </section>
    )
}
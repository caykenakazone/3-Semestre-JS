import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function Comprar() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["comprar"].titulo} descricao={titulosDescricoes["comprar"].descricao} />

        </section>
        
    )
}
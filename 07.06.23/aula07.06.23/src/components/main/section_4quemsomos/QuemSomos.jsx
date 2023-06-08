import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function QuemSomos() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["quemSomos"].titulo} descricao={titulosDescricoes["quemSomos"].descricao} />

        </section>
        
    )
}
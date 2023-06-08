import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo"
export default function Formulario() {
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["formulario"].titulo} descricao={titulosDescricoes["formulario"].descricao} />

        </section>        
    )
}
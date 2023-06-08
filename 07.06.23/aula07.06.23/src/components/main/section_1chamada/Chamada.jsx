import titulosDescricoes from "../../js/titulosDescriçõesSecoes.js";
import TituloSubtitulo from "../common/TituloSubtitulo";

export default function Chamada(){
    return (
        <section>
            <TituloSubtitulo titulo={titulosDescricoes["chamada"].titulo} descricao={titulosDescricoes["chamada"].descricao} />
        
        </section>
        
    )
}
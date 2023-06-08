import Chamada from "./section_1chamada/Chamada";
import Ingredientes from "./section_2ingredientes/Ingredientes";
import Catalogo from "./section_3catalogo/Catalogo";
import QuemSomos from "./section_4quemsomos/QuemSomos";
import Mapa from "./section_5mapa/Mapa";
import Prova from "./section_6prova/Prova";
import Comprar from "./section_7comprar/Comprar";
import Formulario from "./section_8formulario/Formulario";

export default function Main() {
    return (
        <main>
            <h1>Main da página</h1>
            <Chamada></Chamada>
            <Ingredientes></Ingredientes>
            <Catalogo></Catalogo>
            <QuemSomos></QuemSomos>
            <Mapa></Mapa>
            <Prova></Prova>
            <Comprar></Comprar>
            <Formulario></Formulario>
        </main>
    )
}
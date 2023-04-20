import '../css/estilos.css'
export default function Post(props) {


    // 2º Opção usando uso de função + if
    function showAutor() {
        if (props.autor.toUpperCase() == 'HOMEM')
            return <p className='homem'>{props.autor}</p>

        return <p className='mulher'>{props.autor}</p>

    }
    return (
        <div className="post">
            <h2>{props.titulo}</h2>
            <p>{props.txt}</p>

            {/* 1º Uso do operador ternário */}
            {/* {(props.autor.toUpperCase() == "HOMEM") ?
                <p className='homem'>{props.autor}</p> :
                <p className='mulher'>{props.autor}</p>                 
            } */}


            {showAutor()}

        </div>
    );
}

Post.defaultProps = {
    titulo: "titulo generico",
    txt: "texto generico",
    autor: "autor generico"
}

export default function TituloSection(props) {
    return (
        <div className="centralizar">
            <h2 style={{ color: "red" }}>{props.titulo}</h2>
            <p className="centralizar"> {props.subtitulo}</p>
        </div>
    )
}

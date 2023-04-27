import Contador from "./components/Contador";
import ShowName from "./components/ShowName";
import Mensagem from "./components/Mensagem";

export default function App() {
  return (
    <div>
      {/* <Contador v1={3} v2={7} />
      <Contador v1={10} v2={17} /> */}
      {/* <ShowName /> */}
      <Mensagem max={50} />
    </div>
  )
}


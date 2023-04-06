import Teste from "./Teste"
export default function App() {
  
  function show(total) {
    let vet = []
    for (let i = 0; i < total; i++){
      
      vet.push(<Teste/>)
    }
  
    return vet
  }

  return (
    <div>
      {show(10)}
    </div>
  )
}



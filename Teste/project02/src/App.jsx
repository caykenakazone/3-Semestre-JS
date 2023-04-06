import teste from "./teste"
export default function App() {
  
  function show(total) {
    let vet = []
    for (let i = 0; i< total; i++) 
      vet.push(<teste/>)
    
    return vet
  }

  return (
    <div>
      {show(10)}
    </div>
  )
}



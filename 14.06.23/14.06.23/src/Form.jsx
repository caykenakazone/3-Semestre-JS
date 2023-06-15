import { useState } from "react"
import emailjs from '@emailjs/browser'

export default function Form() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function validar() {
        if (nome === "" || email === "" || telefone === "") {
            alert("Todos os campos devem ser preenchidos");
        } else {
            const templateParams = {
                from_name: nome,
                email: email,
                telefone: telefone
            }

            emailjs.send("service_h0q173s", "template_hodcem9", templateParams, "HfS8kdjLSnHGJ4OHZ")
                .then((response) => {
                    console.log("EMAIL ENVIADO", response.status, response.text)
                    setNome('')
                    setEmail('')
                    setTelefone('')
                }, (err) => {
                    console.log("ERRO: ", err)
                })
        }
    }

    return (
        <form action="">
            <input type="text" value={nome} name="" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} />
            <br /><br />
            <input type="text" value={email} name="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input type="text" value={telefone} name="" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
            <br /><br />
            <input type="button" value="Enviar" onClick={()=>validar()}/>
        </form>
    )
}
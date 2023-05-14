import { useState } from "react";
import Botoes from "./Botoes";

export default function Painel() {
    const [nome, setNome] = useState('Inicial') //pega o estado atual da variável nome

    // função que vai ser chamada lá no componente filho para mudar o valor
    function mudarValor(novo: string) {
        console.log(novo)
        setNome(novo)
    }

    // retornando o painel, 
    //chamando o componente filho que mostra os botões 
    //e passando a função que ele espera
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-3xl">{nome}</h1>
            <Botoes mudarValor={mudarValor} />
        </div>
    )
}
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";


export default function Evento() {
    const [valor, setarValor] = useState(0)
    /* A função setarValor altera o valor e notifica o react
    dizendo que o estado daquela variável mudou e a tela precisa ser alterada */
    

    function incrementar() {
        setarValor(valor + 1)
        console.log('Valor...', valor)
    }
    function decrementar() {
        setarValor(valor - 1)
        console.log('Valor...', valor)
    }

    return (
        <div className="flex flex-col gap-4 bg-black text-white justify-center h-screen items-center" >
            <span className="text-3xl"><b>Valor: </b>{valor}</span>
            <div className="flex gap-5">
                <button onClick={incrementar}>
                    <IconPlus />
                </button>
                <button onClick={decrementar}>
                    <IconMinus />
                    
                </button>

            </div>
        </div>   
    )
}
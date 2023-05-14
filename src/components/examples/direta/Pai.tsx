import Filho from './Filho'

/*
a interface meio que dita como será essa comunicação de componente pai e filho
ela diz quais atributos eu devo passar obrigatoriamente ou não.

Note que o componente pai chama o component filho e passa o sobrenome do pai pro filho
 */
export interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div>
            <h1 className="text-xl font-bold">
                {props.nome} {props.sobrenome}
            </h1>
            <ul className="list-disc ml-12">
                <Filho nome="Pedro" sobrenome={props.sobrenome} />
                <Filho nome="Ana" sobrenome={props.sobrenome} />
                <Filho nome="Rafael" sobrenome={props.sobrenome} />
                <Filho nome="Letícia" sobrenome={props.sobrenome} />
            </ul>
        </div>
    )
}
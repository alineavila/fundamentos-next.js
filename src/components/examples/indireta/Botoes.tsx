export interface BotoesProps {
    mudarValor: (novo: string) => void // essa é a maneira de receber uma função como parametro do componente
}

/* criando os botões e chamando a função que recebemos como parâmetro 
lá no arquivo Painel.tsx (componente pai) e passando o Parâmetro para mudar o estado da variável
nome do componente Painel.tsx
*/
export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex gap-5">
            <button className="botao" onClick={() => props.mudarValor('Pedro')}>
                Pedro
            </button>
            <button className="botao" onClick={() => props.mudarValor('João')}>
                João
            </button>
            <button className="botao" onClick={() => props.mudarValor('Ana')}>
                Ana
            </button>
            <button className="botao" onClick={() => props.mudarValor('Paula')}>
                Paula
            </button>
        </div>
    )
}
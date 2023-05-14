/*
Para que esse componente também possa receber valores como parâmetro
também foi necessário acessar a propriedade children
 */
export default function Caixa(props: any) {
    return (
        <div className={`
            flex p-4
            bg-red-400 rounded-xl
        `}>
            {props.children}
        </div>
    )
}
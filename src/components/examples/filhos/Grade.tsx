/* Esse componente agora recebe um parâmetro 
Note que o parâmetro props tem um atributo especial que se chama CHILDREN;
é nesse atributo que temos acesso aos elementos filhos de um determinado componente
Se não tivesse o props.children o componente não teria acesso aos outros componentes filhos
*/
export default function Grade(props: any) {
    return (
        <div className={`
            grid grid-cols-3 gap-4 p-7
        `}>
            {props.children} 
        </div>
    )
}
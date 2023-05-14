import Pai from "@/components/examples/direta/Pai"
import Pagina from "@/components/template/Pagina"

/*
Apenas passando o atributo para o componente Pai, ele já mandou para o componente filho
*/

export default function PaginaDireta() {
    return (
        <Pagina>
            <Pai nome="Leonardo" sobrenome="da Vinci" />
        </Pagina>
    )
}
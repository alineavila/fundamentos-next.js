import Painel from "@/components/examples/indireta/Painel"
import Pagina from "@/components/template/Pagina"

/*
Apenas passando o atributo para o componente Pai, ele já mandou para o componente filho
*/

export default function PaginaDireta() {
    return (
        <Pagina>
            <Painel />
        </Pagina>
    )
}
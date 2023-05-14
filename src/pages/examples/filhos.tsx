import Caixa from "@/components/examples/filhos/Caixa";
import Grade from "@/components/examples/filhos/Grade";
import Pagina from "@/components/template/Pagina";
 /*
 Note que os dois componentes (Grade e Caixa) estão recebendo
 propriedades de componentes filhos
 O elemento grade está recebendo o componente caixa e
 o componente caixa está recebendo os valores #1, #2 e #3 que são
 propriedades filhas
 Ambos componentes só tem acesso a essas propriedades pq na criação
 dos mesmos colocamos a função recebendo props e acessando children
 com props.children
 */
export default function PaginaFilhos() {
    return (
        <Pagina>
            <Grade>
                <Caixa>#1</Caixa>
                <Caixa>#2</Caixa>
                <Caixa>#3</Caixa>        
                <Caixa>#4</Caixa>        
                <Caixa>#5</Caixa>        
                <Caixa>#6</Caixa>        
                <Caixa>#7</Caixa>        
                <Caixa>#8</Caixa>        
                <Caixa>#9</Caixa>        
            </Grade>
        </Pagina>
    )
}
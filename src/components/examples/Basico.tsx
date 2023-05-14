/* Criei um componente, está na página components dentro de source
mas não está dentro de pages, ou seja não tem como acessá-lo diretamente via url
precisamos criar uma página que chame esse componente. Essa página estará
dentro de pages com o nome basico.tsx */

export default function Basico() {
    return (
        <div className={`text-7xl
        bg-black
        text-white
        h-screen`}>
            <h1>Componente Básico</h1>
        </div>
    )
}
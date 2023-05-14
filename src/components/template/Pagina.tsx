/*Esse vai ser um componente que irá receber todos os outros
meio que  a página principal*/
export default function Pagina(props: any) {
    return (
        <div className={`
            flex flex-col justify-center items-center
            w-screen h-screen text-white
            bg-[url('https://source.unsplash.com/random/1920x1080/?programming,next.js')]
            bg-no-repeat bg-cover
        `}>
            <div className={`
                flex flex-col items-center justify-center w-full h-full
                bg-black bg-opacity-80
            `}>
                {props.children}
            </div>
        </div>
    )
}
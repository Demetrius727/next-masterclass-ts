interface CaixaProps {
    className?: string;
    texto: string;
}

export default function Caixa(props: CaixaProps) {
    return (
        <div
            className={`
                flex justify-center items-center
                bg-red-500 rounded-md p-3
                border-2 border-zinc-300 
                hover:bg-orange-500 cursor-pointer
                ${props.className ?? ''}
            `}
        >
            <span>{props.texto}</span>
        </div>
    )
}
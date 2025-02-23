import Logo from "./Logo"

export default function Cabecalho() {
    return (
        <header className="flex items-center gap-5 px-5 bg-zinc-800 h-20">
            <Logo />
            <span>Cabeçalho</span>
        </header>
    )
}
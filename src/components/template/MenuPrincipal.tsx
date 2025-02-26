import Link from "next/link";

export default function MenuPrincipal() {
    return (
        <aside className="w-80 bg-zinc-900">
            <nav className="flex flex-col p-5 gap-3">
                <Link href="/primeiro">Primeiro Componente</Link>
                <Link href="/flexbox">Flexbox</Link>
                <Link href="/pagina">Component Pagina</Link>
            </nav>
        </aside>
    )
}
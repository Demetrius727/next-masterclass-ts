
import MenuItem from "./MenuItem";

export default function MenuPrincipal() {

    return (
        <aside className="w-80 bg-zinc-900">
            <nav className="flex flex-col p-5 gap-1">
                <MenuItem texto="Primeiro Componente" link="/primeiro"/>
                <MenuItem texto="Flexbox" link="/flexbox"/>
                <MenuItem texto="Component Pagina" link="/pagina"/>
            </nav>
        </aside>
    )
}

import { IconAppWindow, IconHexagonNumber1, IconLayout2, IconListCheck } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function MenuPrincipal() {

    return (
        <aside className="w-80 bg-zinc-900">
            <nav className="flex flex-col p-5">
                <MenuItem link="/primeiro">
                    <IconHexagonNumber1 />
                    <span>Primeiro Component</span>
                </MenuItem>
                <MenuItem link="/flexbox">
                    <IconLayout2 />
                    <span>FlexBox</span>
                </MenuItem>
                <MenuItem link="/pagina">
                    <IconAppWindow />
                    <span>Component Página</span>
                </MenuItem>
                <MenuItem link="/estado">
                    <IconListCheck />
                    <span>Component com Estado</span>
                </MenuItem>
            </nav>
        </aside>
    )
}
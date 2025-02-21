import Caixa from "@/components/Caixa";

export default function Page() {
    return (
        <div className="h-screen">
            <h1>Flexbox</h1>
            <div className="bg-zinc-700 h-full flex justify-around items-start">
                <Caixa texto="#1"/>
                <Caixa texto="#2"/>
                <Caixa texto="#3"/>
            </div>
        </div>
    )
}
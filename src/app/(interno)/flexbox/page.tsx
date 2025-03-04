import Caixa from "@/components/Caixa";

export default function Page() {
    return (
            <div className="flex flex-col h-96 w-[900px]">
                <h1>Flexbox</h1>
                <div className="bg-zinc-700 flex justify-around items-start gap-2 p-2">
                    <Caixa texto="#1" className="w-24"/>
                    <Caixa texto="#2" className="flex-grow"/>
                    <Caixa texto="#3" className="w-20"/>
                </div>
                <div className="bg-zinc-700 flex justify-around items-start gap-2 p-2">
                    <Caixa texto="#4" className="w-20"/>
                    <Caixa texto="#5" className="flex-auto"/>
                </div>
            </div>
    )
}
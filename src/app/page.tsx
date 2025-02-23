import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-zinc-800 min-h-screen">
      <h1 className="font-black">Home</h1>
      <nav className="flex flex-col">
        <Link href="/primeiro">Primeiro Componente</Link>
        <Link href="/flexbox">Flexbox</Link>
        <Link href="/pagina">Component Pagina</Link>
      </nav>
    </div>
  );
}

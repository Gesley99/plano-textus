import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className="bg-slate-50 text-slate-900"><div className="min-h-screen md:grid md:grid-cols-[240px_1fr]"><aside className="hidden md:block bg-slate-900 text-white p-4 space-y-2"><h1 className="font-bold">Textus Gestão</h1>{['dashboard','clientes','pedidos','financeiro','documentos','agenda','relatorios','configuracoes'].map((r)=><Link className="block hover:text-blue-300" key={r} href={`/${r}`}>{r}</Link>)}</aside><main className="p-4">{children}</main></div></body></html>
}

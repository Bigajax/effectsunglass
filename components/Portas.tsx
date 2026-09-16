import Image from "next/image";
import Link from "next/link";
import { Icone, type NomeIcone } from "./Icones";
import type { Produto } from "@/lib/tipos";

export type Porta = {
  nome: string;
  href: string;
  icone: NomeIcone;
  peca?: Produto | null;
  total: number;
  linha: string;
};

/**
 * Os formatos da armação, em quatro portas: cada uma é a silhueta do
 * formato em traço grande sobre a areia clara, com o nome e a
 * contagem no pé. No hover o traço dá lugar à foto do modelo da vez.
 * É a pergunta que quem compra óculos faz primeiro: quadrado, redondo,
 * oval ou esportivo?
 */
export function Portas({ portas }: { portas: Porta[] }) {
  return (
    <section aria-labelledby="titulo-portas" className="miolo pt-12 lg:pt-16">
      <div className="regua">
        <h2 id="titulo-portas" className="secao">
          Qual é o seu formato?
        </h2>
        <Link href="/catalogo" className="btn btn--texto shrink-0">
          Ver todos
        </Link>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {portas.map((p) => {
          const capa = p.peca?.imagens[0];
          return (
            <li key={p.nome}>
              <Link href={p.href} className="formato">
                {capa ? (
                  <span className="formato-foto">
                    <Image src={capa.url} alt="" fill sizes="(max-width: 1024px) 50vw, 24vw" className="object-cover" />
                  </span>
                ) : null}
                <span className="formato-traco">
                  <Icone nome={p.icone} className="h-full w-full" peso={0.9} />
                </span>
                <span className="formato-rotulo">
                  <span className="romana text-[1.0625rem] lg:text-[1.25rem]">{p.nome}</span>
                  <span className="text-[0.8125rem] font-semibold opacity-70">
                    {p.total} {p.total === 1 ? "modelo" : "modelos"}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

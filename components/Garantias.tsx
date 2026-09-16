import Link from "next/link";
import { Icone, type NomeIcone } from "./Icones";

/**
 * O que a marca cumpre de fato, numa faixa de areia logo abaixo do
 * preto do hero: proteção UV400 em todos os modelos e envio para todo
 * o Brasil (os dois estão na bio), pedido pelo WhatsApp (é como a
 * vitrine funciona) e a Coleção Oceano com lentes polarizadas (dito no
 * lançamento da coleção). Nada de prazo, frete grátis ou parcelamento:
 * a marca não disse.
 */
const ITENS: { icone: NomeIcone; titulo: string; texto: string; href: string; externa?: boolean }[] = [
  { icone: "uv", titulo: "UV400 em todos os modelos", texto: "proteção total contra os raios do sol", href: "/catalogo" },
  { icone: "pacote", titulo: "Envio para todo o Brasil", texto: "você combina o envio no pedido", href: "", externa: true },
  { icone: "conversa", titulo: "Pedido pelo WhatsApp", texto: "sem cadastro, sem carrinho", href: "", externa: true },
  { icone: "ondas", titulo: "Coleção Oceano", texto: "lentes polarizadas, inspirada no mar", href: "/catalogo?busca=Oceano" },
];

export function Garantias({ linkWhats }: { linkWhats: string }) {
  return (
    <section aria-label="Como a Effect funciona" className="areia">
      <ul className="miolo garantias">
        {ITENS.map((i) => {
          const href = i.href || linkWhats;
          const conteudo = (
            <>
              <span className="garantia-icone">
                <Icone nome={i.icone} className="h-6 w-6" peso={1.5} />
              </span>
              <span className="min-w-0">
                <span className="garantia-titulo">{i.titulo}</span>
                <span className="block text-[0.8125rem] leading-snug text-tinta-fraca">{i.texto}</span>
              </span>
            </>
          );
          return (
            <li key={i.titulo}>
              {i.externa ? (
                <a href={href} target="_blank" rel="noreferrer" className="garantia">
                  {conteudo}
                </a>
              ) : (
                <Link href={href} className="garantia">
                  {conteudo}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

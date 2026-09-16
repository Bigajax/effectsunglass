import Image from "next/image";
import Link from "next/link";
import { Icone } from "./Icones";
import type { Produto } from "@/lib/tipos";

/**
 * A abertura, no preto da caixa: à esquerda a manchete em Unbounded
 * ("Enxergue o futuro.", a frase do painel), a linha de apoio com o que
 * a marca cumpre e os dois botões (verde para os modelos, contorno para
 * o WhatsApp). À direita, a caixa: os seis modelos em destaque deitados
 * numa grade preta, cada um no seu nicho, como a marca apresenta a
 * linha no feed. No celular a caixa vem depois do texto, em três
 * colunas mais apertadas, com os nomes já visíveis.
 */
export function Hero({ frase, estrelas, linkWhats, totais }: { frase: string; estrelas: Produto[]; linkWhats: string; totais: { produtos: number; categorias: number } }) {
  const nichos = estrelas.slice(0, 6);

  return (
    <section aria-labelledby="titulo-hero" className="escuro relative overflow-hidden">
      <div className="miolo relative grid gap-10 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:py-20">
        <div>
          <h1 id="titulo-hero" className="manchete max-w-[10ch] text-[clamp(2.5rem,9vw,3.75rem)] text-branco lg:text-[clamp(3.25rem,5.4vw,5.25rem)]">
            {frase}
          </h1>
          <p className="falada mt-6 max-w-[42ch] text-[1.0625rem] text-white/80 lg:text-[1.125rem]">
            {totais.produtos} modelos em {totais.categorias} formatos, todos com proteção UV400. Você escolhe aqui, pede pelo WhatsApp e a Effect envia para qualquer lugar do Brasil.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/catalogo" className="btn btn--raio">
              Ver os modelos
            </Link>
            <a href={linkWhats} target="_blank" rel="noreferrer" className="btn btn--placa-fio">
              <Icone nome="whats" className="h-[1.125rem] w-[1.125rem]" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        {nichos.length ? (
          <div>
            <ul className="caixa" aria-label="Modelos em destaque">
              {nichos.map((p, i) => {
                const capa = p.imagens[0];
                return (
                  <li key={p.id}>
                    <Link href={`/produto/${p.slug}`} className="nicho">
                      {capa ? (
                        <Image src={capa.url} alt={p.nome} fill priority={i < 3} sizes="(max-width: 1024px) 33vw, 18vw" placeholder={capa.blur ? "blur" : "empty"} blurDataURL={capa.blur ?? undefined} className="object-cover" />
                      ) : null}
                      <span className="nicho-nome">{p.nome}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 flex items-center justify-between gap-3 text-[0.8125rem] text-white/60">
              <span>A caixa effect: os modelos mais pedidos.</span>
              <Link href="/#destaques" className="inline-flex items-center gap-1 font-semibold text-branco hover:text-raio">
                Ver a linha inteira
                <Icone nome="seta" className="h-4 w-4" peso={2} />
              </Link>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Icone } from "./Icones";
import { Raio } from "./Marca";

/**
 * A família Effect, no preto: as pessoas que a marca escolheu para
 * usar os óculos (o atleta de surf Numa Liory, o fotógrafo Rodrigo
 * Ferraz, a criadora Raissa Zanardini), com o manifesto que a marca
 * escreve no próprio feed. As fotos são do Instagram da marca. É o
 * lugar da página onde a Effect fala de si, e por isso é o único bloco
 * de texto longo.
 */
const PESSOAS = [
  { nome: "Numa Liory", papel: "atleta de surf e skate", foto: "/marca/surf.webp", modelo: "Preto Quadrado", slug: "preto-quadrado" },
  { nome: "Rodrigo Ferraz", papel: "fotógrafo", foto: "/marca/rodrigo-amarelo.webp", modelo: "Esporte Amarelo", slug: "oculos-esporte-amarelo" },
  { nome: "Raissa Zanardini", papel: "criadora de conteúdo", foto: "/marca/raissa.webp", modelo: "Oceano Azul", slug: "oceano-azul" },
];

export function Familia({ linkWhats }: { linkWhats: string }) {
  return (
    <section id="familia" aria-labelledby="titulo-familia" className="escuro mt-14 scroll-mt-24 lg:mt-20">
      <div className="miolo grid gap-10 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-20">
        <div className="clarao">
          <Raio altura={40} className="text-branco" />
          <h2 id="titulo-familia" className="manchete mt-5 max-w-[12ch] text-[clamp(1.875rem,4vw,3rem)] text-branco">
            Só nós sabemos o que sentimos.
          </h2>
          <p className="falada mt-5 max-w-[46ch] text-[1.0625rem] text-white/80">
            A Effect é um estilo de vida moderno e consciente: expressão individual, autenticidade, amor à arte, à cultura e à música, e cuidado com o mar de onde vem cada onda. O raio da marca é energia e movimento. Cada par de óculos é feito para quem busca experiências de verdade, na praia ou na cidade.
          </p>
          <p className="mt-4 text-[0.9375rem] text-white/60">Design arrojado, lentes com proteção UV400 e a Coleção Oceano, inspirada no casco de tartaruga, com lentes polarizadas.</p>
          <a href={linkWhats} target="_blank" rel="noreferrer" className="btn btn--placa-fio mt-7">
            <Icone nome="whats" className="h-[1.125rem] w-[1.125rem]" />
            Falar com a Effect
          </a>
        </div>

        <ul className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
          {PESSOAS.map((p) => (
            <li key={p.nome} className="min-w-0">
              <a href={`/produto/${p.slug}`} className="group block">
                <span className="foto veu block aspect-[3/4] rounded-[var(--raio)] bg-preto-2">
                  <Image src={p.foto} alt={`${p.nome} com o ${p.modelo}`} fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  <span className="absolute inset-x-0 bottom-0 z-[1] p-3 sm:p-4">
                    <span className="block text-[0.9375rem] font-bold leading-tight text-branco sm:text-[1.0625rem]">{p.nome}</span>
                    <span className="mt-0.5 block text-[0.75rem] text-white/70 sm:text-[0.8125rem]">{p.papel}</span>
                  </span>
                </span>
                <span className="mt-2 block text-[0.8125rem] text-white/60 group-hover:text-raio">
                  usa o <span className="font-semibold text-branco">{p.modelo}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

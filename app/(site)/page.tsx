import { FaixaWhats } from "@/components/FaixaWhats";
import { Familia } from "@/components/Familia";
import { Garantias } from "@/components/Garantias";
import { Hero } from "@/components/Hero";
import { Portas } from "@/components/Portas";
import { Prateleira } from "@/components/Prateleira";
import { Vitrines } from "@/components/Vitrines";
import { carregarCatalogo, obterConfig } from "@/lib/dados";
import { FORMATOS } from "@/lib/menu";
import { linkGeral } from "@/lib/whatsapp";
import { configPadrao, site } from "@/data/site.config";

/**
 * A home: o hero preto com a caixa dos modelos em destaque, a faixa de
 * areia com o que a marca cumpre, as quatro portas por formato, a linha
 * inteira, as duas vitrines (Coleção Oceano e Esporte), as prateleiras
 * por formato, a família Effect e a faixa do WhatsApp. Tudo montado do
 * catálogo.
 */
export default async function Home() {
  const [{ categorias, produtos, hero }, config] = await Promise.all([carregarCatalogo(), obterConfig()]);

  const whats = linkGeral(config.whatsapp);
  const ativos = produtos.filter((p) => p.ativo);
  const ativas = categorias.filter((c) => c.ativo);
  const porSlug = new Map(ativas.map((c) => [c.slug, c]));
  const da = (slug: string) => ativos.filter((p) => p.categoria_slug === slug).sort((a, b) => a.ordem - b.ordem);

  const destaques = hero
    .map((h) => ativos.find((p) => p.slug === h.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 8);
  const estrelaDe = (slug: string) => destaques.find((p) => p.categoria_slug === slug) ?? da(slug)[0] ?? null;
  const peca = (slug: string) => ativos.find((p) => p.slug === slug) ?? null;

  /* só os formatos com pelo menos um modelo viram prateleira; e cada
     prateleira mostra primeiro o que NÃO está na caixa do hero */
  const inedito = (lista: typeof ativos) => [...lista.filter((p) => !destaques.includes(p)), ...lista.filter((p) => destaques.includes(p))];
  const prateleiras = FORMATOS.map((f) => ({ ...f, produtos: inedito(da(f.slug)) })).filter((f) => f.produtos.length > 1);

  return (
    <>
      <Hero frase={config.frase_hero || configPadrao.frase_hero} estrelas={destaques} linkWhats={whats} totais={{ produtos: ativos.length, categorias: ativas.length }} />

      <Garantias linkWhats={whats} />

      <Portas portas={FORMATOS.map((f) => ({ nome: f.nome, href: `/catalogo/${f.slug}`, icone: f.icone, peca: estrelaDe(f.slug), total: da(f.slug).length, linha: f.linha }))} />

      <Prateleira id="destaques" titulo="A linha" subtitulo="Os modelos da Effect, do preto clássico ao esportivo amarelo." href="/catalogo" verTudo="Ver o catálogo" produtos={ativos} categorias={porSlug} prioridade limite={4} nomeDaPorta="modelos" />

      <Vitrines
        vitrines={[
          { titulo: "Coleção Oceano", texto: "Inspirada no mar e no casco de tartaruga, com lentes polarizadas.", href: "/catalogo?busca=Oceano", peca: peca("oceano-azul") ?? estrelaDe("oval"), acao: "Ver a coleção" },
          { titulo: "Esporte", texto: "Lente única e armação envolvente para correr, pedalar e surfar.", href: "/catalogo/esporte", peca: peca("oculos-esporte-amarelo") ?? estrelaDe("esporte"), acao: "Ver os esportivos" },
        ].filter((v): v is typeof v & { peca: NonNullable<typeof v.peca> } => Boolean(v.peca))}
      />

      {prateleiras.map((f) => (
        <Prateleira key={f.slug} id={`prateleira-${f.slug}`} titulo={f.nome} subtitulo={f.linha[0].toUpperCase() + f.linha.slice(1) + "."} href={`/catalogo/${f.slug}`} verTudo={`Ver os ${f.produtos.length}`} produtos={f.produtos} categorias={porSlug} nomeDaPorta={f.nome.toLowerCase()} />
      ))}

      <Familia linkWhats={whats} />

      <FaixaWhats linkWhats={whats} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OnlineStore",
            name: "Effect Sunglasses",
            url: site.url,
            sameAs: [`https://instagram.com/${site.instagram}`],
          }),
        }}
      />
    </>
  );
}

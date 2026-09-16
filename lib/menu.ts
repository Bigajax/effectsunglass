import type { Produto } from "./tipos";

/**
 * O menu das portas, montado do catálogo: cada porta do cabeçalho é um
 * formato de armação e abre uma aba ao passar o mouse, e o que está na
 * aba vem dos produtos (os atalhos por cor só aparecem se acham algo).
 * Assim a aba nunca promete o que a vitrine não tem.
 */
export type NomeIconeMenu = "novidade" | "quadrado" | "redondo" | "oval" | "esporte" | "raio" | "uv" | "pacote" | "ondas" | "conversa" | "instagram";

export type ItemMenu = {
  nome: string;
  href: string;
  icone?: NomeIconeMenu;
  nota?: string;
  externa?: boolean;
};

export type Aba = {
  chave: string;
  nome: string;
  href: string;
  icone: NomeIconeMenu;
  externa?: boolean;
  titulo?: string;
  itens: ItemMenu[];
  colunas: 1 | 2 | 3 | 4;
  /* o número ao lado do nome na fila de portas */
  total?: number;
  /* a linha miúda embaixo do nome, só na porta da marca */
  nota?: string;
};

export const FORMATOS: { slug: string; nome: string; tudo: string; icone: NomeIconeMenu; linha: string }[] = [
  { slug: "quadrado", nome: "Quadrados", tudo: "Todos os quadrados", icone: "quadrado", linha: "a armação encorpada, do preto ao tartarugado" },
  { slug: "redondo", nome: "Redondos", tudo: "Todos os redondos", icone: "redondo", linha: "a lente redonda, em azul e cristal" },
  { slug: "oval", nome: "Ovais", tudo: "Todos os ovais", icone: "oval", linha: "o Oceano, fino e envolvente" },
  { slug: "esporte", nome: "Esportivos", tudo: "Todos os esportivos", icone: "esporte", linha: "lente única para correr, pedalar e surfar" },
];

/* as cores que viram atalho dentro de cada formato */
const CORES = ["Preto", "Azul", "Tartarugado", "Cristal", "Amarelo"];

export function montarMenu(produtos: Produto[], linkWhats: string): Aba[] {
  const ativos = produtos.filter((p) => p.ativo);
  const conta = (slug: string) => ativos.filter((p) => p.categoria_slug === slug).length;
  const busca = (cat: string, termo: string) => `/catalogo/${cat}?busca=${encodeURIComponent(termo)}`;
  const existe = (cat: string, termo: string) => ativos.some((p) => p.categoria_slug === cat && p.nome.toLowerCase().includes(termo.toLowerCase()));

  return [
    ...FORMATOS.map((f): Aba => {
      const total = conta(f.slug);
      return {
        chave: f.slug,
        nome: f.nome,
        href: `/catalogo/${f.slug}`,
        icone: f.icone,
        total,
        titulo: `${total} ${total === 1 ? "modelo" : "modelos"}: ${f.linha}`,
        colunas: 2,
        itens: [
          ...CORES.filter((c) => existe(f.slug, c)).map((c) => ({ nome: c, href: busca(f.slug, c) })),
          { nome: f.tudo, href: `/catalogo/${f.slug}`, icone: f.icone },
        ],
      };
    }),
    {
      chave: "marca",
      nome: "A marca",
      href: "/#familia",
      icone: "raio",
      nota: "enxergue o futuro",
      colunas: 1,
      itens: [
        { nome: "A família Effect", href: "/#familia", icone: "raio", nota: "atletas e criadores que usam a marca" },
        { nome: "Coleção Oceano", href: "/catalogo?busca=Oceano", icone: "ondas", nota: "lentes polarizadas" },
        { nome: "Falar no WhatsApp", href: linkWhats, icone: "conversa", nota: "pedido, envio e dúvidas", externa: true },
        { nome: "A linha inteira", href: "/#destaques", icone: "novidade", nota: "os 10 modelos" },
      ],
    },
  ];
}

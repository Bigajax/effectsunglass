/**
 * As portas que juntam categorias. A Effect tem quatro formatos
 * diretos (quadrado, redondo, oval, esporte), nenhum agrupado: o mapa
 * fica vazio até precisar.
 */
export const GRUPOS: Record<string, { nome: string; categorias: string[] }> = {};

export function categoriasDoGrupo(slug: string): string[] | null {
  return GRUPOS[slug]?.categorias ?? null;
}

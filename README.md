# Vitrine da Effect Sunglasses

Prévia da vitrine digital da **Effect Sunglasses** (@effectsunglass), marca
de óculos de sol com o raio como símbolo. Next 15 + Tailwind v4, em modo
local: o catálogo vem de `data/catalogo.json` e as fotos de
`public/produtos/*.webp`, exportados da oficina do estúdio.

    npx next dev -p 3070
    npm run build

## De onde vêm os dados

- **Catálogo**: 51 mídias colhidas do Instagram pela oficina (Business
  Discovery), lidas na conversa e reduzidas a 10 modelos em 4 formatos
  (quadrado, redondo, oval, esporte). Exportado por
  `scripts/exportar-vitrine.ts effectsunglass ~/Desktop/effectsunglass --codigo EF --ordem "Quadrado,Redondo,Oval,Esporte"`
  no repo do estúdio.
- **Marca**: o letreiro e o raio são máscaras alfa em `public/marca/`
  (`logo.png`, `raio.png`) tiradas das artes do feed; pintadas por CSS.
- **Fotos de estilo de vida** (família Effect, caixa, arte): `public/marca/*.webp`,
  também do feed.
- Favicon e OG: `node scripts/gerar-icones.mjs`.

## O que a marca NÃO disse (não inventar)

Preço de nenhum modelo, cidade, WhatsApp, forma de pagamento, prazo e
valor do envio. A bio diz "enviamos para todo o Brasil" e "proteção UV400
em todos os modelos"; o lançamento da Coleção Oceano fala em lentes
polarizadas. O site antigo (effectoculos.com) está fora do ar.

## Modo prévia

`PREVIA` em `data/site.config.ts` manda todo botão de WhatsApp para o
estúdio. Ao contratar: `PREVIA = null` e preencher `site.whatsapp`.

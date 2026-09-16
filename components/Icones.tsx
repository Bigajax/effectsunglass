/**
 * Ícones de linha da vitrine, um traço só. Os quatro formatos são a
 * silhueta da armação vista de frente (quadrado, redondo, oval, o
 * esportivo de lente única), e são eles que fazem as portas. Os outros
 * são os de sempre: sol (UV), pacote (envio), ondas (polarizada),
 * conversa, lupa, seta. Herdam a cor do texto; o tamanho vem da
 * className.
 */
export type NomeIcone =
  | "novidade"
  | "quadrado"
  | "redondo"
  | "oval"
  | "esporte"
  | "raio"
  | "uv"
  | "pacote"
  | "ondas"
  | "loja"
  | "lupa"
  | "whats"
  | "caminhao"
  | "conversa"
  | "etiqueta"
  | "cartao"
  | "pino"
  | "instagram"
  | "check"
  | "seta"
  | "seta-esq"
  | "fechar";

const TRACOS: Record<Exclude<NomeIcone, "whats">, React.ReactNode> = {
  novidade: <path d="M12 3.4l2.5 5.6 6.1.6-4.6 4.1 1.4 6L12 16.6l-5.4 3.1 1.4-6-4.6-4.1 6.1-.6z" />,
  /* a armação quadrada: duas lentes retas, ponte, hastes curtas */
  quadrado: (
    <>
      <rect x="2.5" y="8.5" width="8" height="7" rx="1.6" />
      <rect x="13.5" y="8.5" width="8" height="7" rx="1.6" />
      <path d="M10.5 11.5h3M1 10h1.5M21.5 10H23" />
    </>
  ),
  /* a redonda */
  redondo: (
    <>
      <circle cx="6.75" cy="12" r="4" />
      <circle cx="17.25" cy="12" r="4" />
      <path d="M10.75 11.5h2.5M1 10.5l1.9.6M23 10.5l-1.9.6" />
    </>
  ),
  /* a oval, com a ponta levantada (gatinho) */
  oval: (
    <>
      <path d="M2.4 11.2c1.2-2.2 3.4-3 5.4-2.2 2.1.9 3.1 2.7 2.4 4.4-.7 1.6-2.9 2.2-4.9 1.5-2-.7-3.6-2.1-2.9-3.7z" />
      <path d="M21.6 11.2c-1.2-2.2-3.4-3-5.4-2.2-2.1.9-3.1 2.7-2.4 4.4.7 1.6 2.9 2.2 4.9 1.5 2-.7 3.6-2.1 2.9-3.7z" />
      <path d="M10.4 11.6h3.2M1 9.5l1.4 1.5M23 9.5l-1.4 1.5" />
    </>
  ),
  /* a esportiva: lente única envolvente */
  esporte: (
    <>
      <path d="M2.5 9.5c3-1.3 6.2-1.9 9.5-1.9s6.5.6 9.5 1.9l-1 5.2c-.4 1.3-1.4 2-2.7 1.8l-3.9-.6c-.6-.1-1.1-.6-1.2-1.2l-.2-1.5-.2 1.5c-.1.6-.6 1.1-1.2 1.2l-3.9.6c-1.3.2-2.3-.5-2.7-1.8z" />
      <path d="M1 8.8l1.5.7M23 8.8l-1.5.7" />
    </>
  ),
  raio: <path d="M13.5 2.5 5 13.5h6l-1.5 8 9-11.5h-6z" />,
  /* o sol: a proteção UV */
  uv: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
    </>
  ),
  /* o pacote: envio para todo o Brasil */
  pacote: (
    <>
      <path d="M3.5 8.5 12 4l8.5 4.5v8L12 21l-8.5-4.5z" />
      <path d="M3.5 8.5 12 13l8.5-4.5M12 13v8M7.5 6.3l8.5 4.5" />
    </>
  ),
  /* as ondas: a lente polarizada, o mar da Coleção Oceano */
  ondas: (
    <>
      <path d="M2.5 9c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5" />
      <path d="M2.5 14.5c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5" />
    </>
  ),
  loja: (
    <>
      <path d="M3.5 9.5 5 4.5h14l1.5 5" />
      <path d="M3.5 9.5a2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0" />
      <path d="M5 11.5v8h14v-8" />
      <path d="M10 19.5v-4.5h4v4.5" />
    </>
  ),
  lupa: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
    </>
  ),
  caminhao: (
    <>
      <path d="M2.5 6.5h11v9h-11z" />
      <path d="M13.5 9.5h4l3 3.5v2.5h-7z" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  conversa: (
    <>
      <path d="M4 5.5h16v10H9l-4 3.5z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  etiqueta: (
    <>
      <path d="M3.5 12.5v-8h8l9 9-8 8z" />
      <circle cx="7.5" cy="8.5" r="1.3" />
    </>
  ),
  cartao: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 10h19M6.5 14.5h4" />
    </>
  ),
  pino: (
    <>
      <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  seta: <path d="M9.5 6l6 6-6 6" />,
  "seta-esq": <path d="M14.5 6l-6 6 6 6" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
};

export function Icone({ nome, className = "h-6 w-6", peso = 1.5 }: { nome: NomeIcone; className?: string; peso?: number }) {
  if (nome === "whats") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
        <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.9c-1.5 0-3-.4-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2c.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth={peso} strokeLinecap="round" strokeLinejoin="round">
      {TRACOS[nome]}
    </svg>
  );
}

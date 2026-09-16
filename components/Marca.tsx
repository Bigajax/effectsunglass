/**
 * A marca da Effect: o raio e o letreiro "effect sunglasses", que só
 * existem como arte branca sobre preto no feed. Os dois entraram como
 * MÁSCARA alfa (public/marca/logo.png e raio.png) e são pintados pela
 * cor do texto: branco no preto, preto no claro. O raio sozinho é o
 * ícone, o favicon e o marcador; o letreiro inteiro é a assinatura.
 */
function Mascara({ arquivo, altura, proporcao, className = "", rotulo }: { arquivo: string; altura: number; proporcao: number; className?: string; rotulo: string }) {
  return (
    <span
      role="img"
      aria-label={rotulo}
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        height: altura,
        width: Math.round(altura * proporcao),
        WebkitMaskImage: `url(${arquivo})`,
        maskImage: `url(${arquivo})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/* o raio, na cor do texto (o clarão verde vem da classe .clarao no pai) */
export function Raio({ altura = 20, className = "" }: { altura?: number; className?: string }) {
  return <span aria-hidden="true" className={`raio-marca ${className}`} style={{ height: altura, width: Math.round(altura * 0.62) }} />;
}

/* o letreiro completo: raio + effect + sunglasses (789 x 321) */
export function Logo({ altura = 32, className = "" }: { altura?: number; className?: string }) {
  return <Mascara arquivo="/marca/logo.png" altura={altura} proporcao={789 / 321} className={className} rotulo="effect sunglasses" />;
}

/* a assinatura do estúdio, em máscara, pintada pela cor do texto */
export function MarcaEstudio({ altura, className = "" }: { altura: number; className?: string }) {
  return <Mascara arquivo="/marca/rafael-razeira.png" altura={altura} proporcao={956 / 519} className={className} rotulo="Rafael Razeira Estúdio" />;
}

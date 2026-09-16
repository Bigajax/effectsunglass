/**
 * Gera o favicon e a imagem de compartilhamento da Effect a partir das
 * máscaras da marca (public/marca/raio.png e logo.png, brancas sobre
 * transparente): app/icon.png (512) e app/apple-icon.png (180) com o
 * raio sobre o preto; public/og/site.jpg (1200x630) com o letreiro e a
 * linha da marca, o que aparece quando alguém manda o link no
 * WhatsApp.
 *
 *   node scripts/gerar-icones.mjs
 */
import fs from "node:fs";
import sharp from "sharp";

const PRETO = "#000000";
const RAIO = "#c8ff2e";

async function icone(tamanho, destino) {
  /* a máscara já é branca sobre transparente: basta deitar sobre o preto */
  const raio = await sharp("public/marca/raio.png").resize({ height: Math.round(tamanho * 0.62) }).png().toBuffer();
  const meta = await sharp(raio).metadata();
  await sharp({ create: { width: tamanho, height: tamanho, channels: 4, background: PRETO } })
    .composite([{ input: raio, left: Math.round((tamanho - meta.width) / 2), top: Math.round((tamanho - meta.height) / 2) }])
    .png()
    .toFile(destino);
  console.log(destino, tamanho);
}

async function og() {
  const L = 1200, A = 630;
  fs.mkdirSync("public/og", { recursive: true });
  const logo = await sharp("public/marca/logo.png").resize({ width: 560 }).toBuffer();
  const lm = await sharp(logo).metadata();
  const legenda = Buffer.from(`<svg width="${L}" height="${A}">
    <style>text{font-family:"Manrope",Arial,sans-serif}</style>
    <rect width="${L}" height="${A}" fill="${PRETO}"/>
    <rect x="0" y="${A - 8}" width="${L}" height="8" fill="${RAIO}"/>
    <text x="600" y="430" text-anchor="middle" font-size="30" font-weight="700" fill="#ffffff">Enxergue o futuro.</text>
    <text x="600" y="476" text-anchor="middle" font-size="22" fill="#a7a7a0">Óculos de sol com proteção UV400 · pedido pelo WhatsApp · envio para todo o Brasil</text>
  </svg>`);
  await sharp(legenda)
    .composite([{ input: logo, left: Math.round((L - lm.width) / 2), top: 150 }])
    .jpeg({ quality: 88 })
    .toFile("public/og/site.jpg");
  console.log("public/og/site.jpg");
}

await icone(512, "app/icon.png");
await icone(180, "app/apple-icon.png");
await og();

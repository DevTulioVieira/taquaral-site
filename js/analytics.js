/* GOOGLE ANALYTICS 4
 * Cole o ID oficial da propriedade abaixo. Vazio = medição desativada.
 * A prévia local não envia dados, mesmo com um ID configurado.
 */
(() => {
  'use strict';
  const measurementId = 'G-FVX85Z6BE0'; // ID oficial fornecido pelo responsável pelo site.
  const localHosts = ['localhost', '127.0.0.1', '::1', '[::1]'];
  if (!/^G-[A-Z0-9]+$/.test(measurementId) || localHosts.includes(location.hostname) || location.protocol === 'file:') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  // config envia a visualização inicial. Não enviar outro page_view manual.
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(tag);

  // Delegação cobre cabeçalho, hero, CTA, rodapé, botão flutuante e modais.
  // Não interfere na abertura do WhatsApp nem envia telefone/mensagem como parâmetros.
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    let destination;
    try { destination = new URL(link.href); } catch { return; }
    if (destination.hostname !== 'wa.me') return;
    let placement = 'outro';
    if (link.closest('.whatsapp-float')) placement = 'flutuante';
    else if (link.closest('.site-header')) placement = 'cabecalho';
    else if (link.closest('.hero')) placement = 'capa';
    else if (link.closest('.cta')) placement = 'chamada_final';
    else if (link.closest('.site-footer')) placement = 'rodape';
    else if (link.closest('dialog')) placement = 'detalhes';
    const parameters = {
      button_location: placement,
      button_label: link.textContent.replace(/\s+/g, ' ').trim().slice(0, 100) || 'WhatsApp'
    };
    if (placement === 'detalhes') {
      parameters.content_name = document.querySelector('#detail-title')?.textContent.trim().slice(0, 100) || 'Taquaral';
    }
    window.gtag('event', 'whatsapp_click', parameters);
  });
})();


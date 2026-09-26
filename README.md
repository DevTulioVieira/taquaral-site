# Taquaral Empreendimentos

Website institucional estático em HTML5, CSS3 e JavaScript Vanilla. Sem instalação, frameworks ou processo de compilação. Compatível com GitHub Pages, inclusive em subdiretórios.

## Estrutura

```
taquaral/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/main.js
├── assets/
│   ├── images/
│   └── icons/.gitkeep
├── README.md
└── .gitignore
```

## Executar

Abra `index.html` diretamente no navegador. Para atualizar automaticamente durante a edição, abra a pasta no Visual Studio Code e escolha **Open with Live Server** no arquivo `index.html`. Google Fonts requer conexão; fontes alternativas funcionam sem internet.

## Imagens

Coloque as imagens em `assets/images/`, preservando exatamente os nomes, extensões e letras minúsculas abaixo. Os caminhos são relativos para funcionar no GitHub Pages. Não foram geradas imagens. Fundos discretos aparecem quando uma foto não existe; serão automaticamente substituídos quando o arquivo for adicionado e a página recarregada.

| Arquivo | Local no site | Situação |
| --- | --- | --- |
| logo-taquaral.png | Cabeçalho e rodapé | Logo transparente atualizado |
| hero-taquaral.jpg | Fundo da abertura | Vista aérea fornecida |
| imperio-residence.jpg | Card do Emperador Residence | Foto fornecida |
| lla-reserve.jpg | Card LL’A Reserve | Foto fornecida |
| icone-residence.jpg | Card Ícone Residence | Foto fornecida |
| sobre-taquaral.jpg | Institucional | Foto de concretagem fornecida |
| loteamento-taquaral.jpg | Seção loteamentos | Material de divulgação fornecido; exibido abaixo do texto, sem corte |
| obra-01.jpg | Galeria, foto 1 | Casa térrea em acabamento, fornecida |
| obra-02.jpg | Galeria, foto 2 | Equipe executando laje, fornecida |
| obra-03.jpg | Galeria, foto 3 | Estrutura de casa em construção, fornecida |
| obra-04.jpg | Galeria, foto 4 | Terreno em preparação, foto fornecida |
| cta-taquaral.jpg | Fundo da chamada final | Adicionar |

As fotos PNG fornecidas foram convertidas de verdade para JPEG; os originais foram preservados. O arquivo `imperio-residence.jpg` conserva o caminho solicitado no briefing, mas o nome visível **Emperador Residence** e a frase **O primeiro prédio de 10 andares de São João Evangelista!** seguem a instrução posterior do cliente. A imagem enviada contém a grafia “Imperador”; a apresentação do site segue “Emperador”, conforme solicitado por último.

Recomendações: hero 1920×1080, cards com boa resolução, institucional 1000×900, loteamento 1400×900, obras 1000×800 e CTA 1920×900. Envie preferencialmente fotos originais, sem elementos de captura de redes sociais. Não é obrigatório usar essas dimensões: `object-fit` mantém proporções e `object-position` controla enquadramento. O logo usa `contain` para aparecer inteiro.

Para WebP no futuro, use `<picture><source srcset="...webp" type="image/webp"><img src="...jpg" ...></picture>`, atualizando também os seletores de fallback de imagem no CSS se necessário.

## Textos e indicadores

Edite `index.html`. Os comentários identificam cada seção e os locais de troca de imagem. Os detalhes dos empreendimentos usam o conteúdo dos cards, evitando divergência. O botão de história apresenta o texto institucional fornecido; uma cronologia poderá ser adicionada quando houver informações oficiais.

Procure `ALTERAR NÚMEROS DA EMPRESA AQUI` para editar os indicadores. **+10 empreendimentos e +2.500 famílias são valores iniciais do briefing, sujeitos à revisão antes da publicação.** Não há contador que invente números. ISO 9001 e PBQP-H têm containers `.certification-logo` reservados: validar certificações e inserir os selos oficiais antes de publicar; nenhum selo foi inventado.

## WhatsApp e telefone

Edite `SITE_CONFIG.whatsapp` (somente números com país e DDD) e `SITE_CONFIG.message` em `js/main.js`. Atualize também os links de fallback `https://wa.me/...` no HTML, o link `tel:` e `telephone` no JSON-LD. Os links de WhatsApp abrem em nova aba com `noopener noreferrer`; a mensagem é codificada por `encodeURIComponent`.

## Instagram, endereço, e-mail e desenvolvedor

- Instagram: altere o link e o texto do rodapé e `sameAs` no JSON-LD, em `index.html`.
- Endereço: edite `<address>` no rodapé e `address` no JSON-LD.
- E-mail: procure `E-MAIL` no HTML, preencha `href="mailto:email-oficial"`, o texto e remova `hidden`. Nenhum e-mail foi inventado.
- Ctrl Informática: preencha `SITE_CONFIG.developerUrl` em `js/main.js` com a URL oficial completa. Enquanto vazia, o crédito fica como texto, sem apontar para uma página fictícia.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie o conteúdo desta pasta, com `index.html` na raiz, incluindo CSS, JS e assets.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Salve e aguarde a publicação. Abra a URL informada pelo GitHub.
5. Em `index.html`, substitua `https://SEU-DOMINIO/` pela URL final nos comentários de canonical e `og:url`, e descomente essas duas tags.
6. Substitua o favicon temporário pelo oficial. As tags Open Graph e Twitter já estão configuradas; uma imagem social pode ser incluída depois que houver um arquivo oficial e sua URL absoluta.

Antes da publicação, revise textos, números, certificações, contatos e fotos pendentes. O projeto foi entregue localmente; não foi publicado em uma conta externa.

## Interações e acessibilidade

Menu mobile com `aria-expanded`, Escape, retenção de foco e bloqueio de rolagem. Links de seção respeitam o cabeçalho fixo. Cards abrem detalhes; os botões de obras abrem a galeria, navegável por setas ou botões. Modais usam `<dialog>` nativo, Escape e retorno do foco. Animações com IntersectionObserver respeitam `prefers-reduced-motion`. Há link para pular ao conteúdo, textos alternativos e estados de foco. Fotos fora da primeira tela usam carregamento preguiçoso.





## Visitas e cliques no WhatsApp — Google Analytics 4

A integração está preparada em `js/analytics.js`, com o ID oficial **G-FVX85Z6BE0 configurado**, pronta para coletar após publicar os arquivos atualizados. Não há contador local simulando totais de visitantes. A prévia em localhost e arquivos abertos diretamente não enviam dados.

1. Acesse https://analytics.google.com/ e crie uma propriedade para a Taquaral, caso ainda não tenha uma.
2. Crie um fluxo **Web** com a URL pública do site. Em **Administrador → Fluxos de dados**, abra esse fluxo e copie o ID de medição que começa com `G-`.
3. Cole esse valor em `measurementId`, em `js/analytics.js`, e publique a versão atualizada. Não é necessário inserir outra tag ou Google Tag Manager.
4. No relatório **Tempo real**, confira a visita ao site publicado e o evento `whatsapp_click` ao clicar em um botão. O clique abre o WhatsApp normalmente; não é preciso enviar a mensagem.
5. Em relatórios de aquisição, use **Sessões** para visitas e **Usuários** para visitantes. Visualizações de página podem incluir mais de uma visita da mesma pessoa.
6. Em **Eventos**, consulte `whatsapp_click` para o total de cliques. É possível marcá-lo como evento principal para acompanhar interesse comercial.
7. Para comparar botões, crie uma dimensão personalizada com escopo de evento para `button_location`. Valores: `cabecalho`, `capa`, `chamada_final`, `rodape`, `flutuante` e `detalhes`. O parâmetro `content_name` identifica o título exibido no modal.

O evento indica abertura do WhatsApp, não confirma mensagem enviada nem venda. Visitas anteriores à ativação não são recuperadas por esta integração. Bloqueadores e preferências de privacidade podem impedir medições. A conta e os relatórios ficam sob controle do responsável pelo site. Ajuste a configuração de privacidade do site conforme a política adotada antes de ativar a medição.

Documentação oficial: https://support.google.com/analytics/answer/9304153 e https://developers.google.com/analytics/devguides/collection/ga4/events .


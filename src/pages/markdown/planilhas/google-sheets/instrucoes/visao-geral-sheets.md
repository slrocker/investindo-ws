---
title: "Visão Geral"
date: "2019-10-11"
section: "Planilhas"
sectionSlug: "planilhas"
category: "Google Sheets"
categorySlug: "google-sheets"
subcategory: "Instruções"
subcategorySlug: "instrucoes"
featuredImage: "google-sheets"
pageType: "page"
order: 1
---

<div class="iframe-container">
<iframe src="https://www.youtube.com/embed/wa9jisjKeB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


## Concepção

A tabela de controle de custódia foi criada com a finalidade de auxiliar no controle da custódia, operações e rendimentos recebidos de investimentos financeiros realizados por um pequeno investidor.

**Ela não é recomendada para efetuar o controle de operações de compra e venda constantes (*trades*).**

A maioria dos dados são inseridos manualmente pelo usuário, oriundos das notas de corretagem e dos extratos e formam um banco de dados. A tabela transforma esses dados em gráficos e outros métodos que facilitam a visualização da posição patrimonial pelo usuário.

É possível visualizar as cotações das ações, dos fundos de investimento imobiliário e do Tesouro Direto automaticamente caso haja uma conexão com a internet, pois a tabela já está configurada para consultar as cotações do *Google Finance* e no *site* do Tesouro Direto. Nos demais investimentos, será preciso que o usuário atualize manualmente os preços e valores atuais para que possa ter uma ideia da situação atual dos seus investimentos.

## Organização

Visando manter o registro necessário das informações cobradas pela Receita Federal na declaração de investimentos, a tabela procura manter o registro das seguintes informações:

- Operações de compra e venda com quantidade, preço e taxas;
- Recebimento de proventos tais como dividendos, juros sobre capital etc.
- Eventos acionários tais como bonificações, amortizações, agrupamentos e desdobramentos.

As informações são separadas por tipo de ativo:

- Ações;
- Fundos de Investimento Imobiliário;
- Tesouro Direto;
- Renda Fixa; e
- Fundos de Investimento.

O registro dos dados é feito através planilhas organizadas como banco de dados, onde cada coluna corresponde a um dado e cada linha a um lançamento. As tabelas de registro são:

- **Lançamentos**: registro de operações de compra, venda e eventos acionários que alteram a posição acionária; e
- **Recebidos**: registro de proventos recebidos.

Os dados dessas duas planilhas são condensados em outras planilhas, visando fornecer ao investidor uma visão consolidada:

- **Custódia**: reúne os totais em relação a quantidades e valores; e
- **Consolidado**: consolida os dados de todos os ativos em três grandes classes: renda fixa; renda variável e fundos de investimento.

## Planilhas Auxiliares

Além das planilhas para registro dos dados e da apresentação consolidada, a tabela possui algumas planilhas auxiliares:

- **Configurações**: contém os dados de corretagem e outras taxas para serem utilizados nos cálculos automáticos; e
- **PM**: calcula o preço médio de compra dos ativos;

## Cotações

As cotações são obtidas através do *Google FInance* e de um *script* que copia as cotações do *site* do Tesouro Direto.

### Renda Variável

Cotações de ativos de renda variável negociados em Bolsa, tais como as ações e fundos imobiliários (FII) são obtidos através do *Google Finance*


### Tesouro Direto

As cotações do Tesouro Direto são mineradas do *site* do Tesouro através de um *script* que investiga o código HTML e filtra os preços dos ativos.
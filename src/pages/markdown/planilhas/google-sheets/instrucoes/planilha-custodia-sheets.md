---
title: "Planilha Custódia"
date: "2019-10-11"
section: "Planilhas"
sectionSlug: "planilhas"
category: "Google Sheets"
categorySlug: "google-sheets"
subcategory: "Instruções"
subcategorySlug: "instrucoes"
featuredImage: "google-sheets"
pageType: "page"
order: 4
---

<div class="iframe-container">
<iframe src="https://www.youtube.com/embed/wa9jisjKeB8?start=172" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Organização

As planilhas "XXX-Custódia" (onde XXX é o tipo de ativo) são divididas em 7 grande grupos:

- **Tabela Dinâmica**: na coluna A da tabela, consolida as informações registrads na planilha "LANÇAMENTOS";
- **Valores Aplicados**: consolida a quantidade e os valores investidos para cada ativo e a participação de cada um na carteira;
- **Valores Atuais**: utiliza a cotação atual dos ativos para calcular os totais  e a participação de cada ativo na carteira;
- **Objetivo**: local para que o usuário determine o objetivo percentual para cada ativo em relação ao total da carteira;
- **Resultado**: compara os valores atuais com os valores investidos em R\$ e percentual;
- **IR**: agrega as informações de preço médio por ativo e total a ser declarado no Imposto de Renda; e
- **Informações adicionais**: informa os 3 ativos que mais estão distantes do objetivo percentual estabelecido e os valores consolidados por classe de ativo.

Na planilha "FII-Custódia" há ainda um grupo "YIELD" que calcula os *yields* do último valor recebido como rendimento em relação ao preço médio e a cotação atual do FII.

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-001.jpg)

<p class="legenda" style="text-align:center">Figura 1 - Planilha "FII-CUSTÓDIA".</p>

## Tabela Dinâmica

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-002.jpg)

<p class="legenda" style="text-align:center">Figura 2 - Tabela Dinâmica.</p>

Na coluna A de toda planilha "CUSTÓDIA" há uma tabela dinâmica cuja fonte de dados são os registros da planilha "LANÇAMENTOS".

A tabela dinâmica esta configurada para filtras as informações relativas à coluna "PAPEL" ou "TÌTULO" das planilhas lançamentos.

Assim, serão mostrados na custódia todos os ativos registrados em "LANÇAMENTOS".

### Filtro

Toda vez que **você fizer o primeiro registro de um ativo** na planilha "LANÇAMENTOS" será preciso atualizar a tabela dinâmica para que ela passe a mostrar os novos ativos. Para fazer isso há duas opções

1. Clique na célula A2:

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-002.jpg)

<p class="legenda" style="text-align:center">Figura 3 - Atualizando a Tabela Dinâmica.</p>

2. Acesse o menu "Editor tabela dinâmica":

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-004.jpg)

<p class="legenda" style="text-align:center">Figura 4 - Menu da Tabela Dinâmica.</p>

3. Clique em Filtros > "PAPEL".

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-005.jpg)

<p class="legenda" style="text-align:center">Figura 5 - Atualizando a Tabela Dinâmica.</p>

4. Marque os ativos que você deseja exibir na planilha "CUSTÓDIA".


## Valores Aplicados

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-006.jpg)

<p class="legenda" style="text-align:center">Figura 6 - Valores aplicados.</p>

Neste subgrupo há três informações:

- **Quantidade**: Somatório de todos os lançamentos da coluna "QTD" na planilha "LANÇAMENTOS" para o ativo contido na coluna "PAPEL";
- **R\$**: Somatório de todos os lançamentos da coluna "TOTAL" na planilha "LANÇAMENTOS" para o ativo contido na coluna "PAPEL"; e
- **%**: participação percentual do valor investido em relação ao total investido naquela classe de ativos (por exemplo, no caso de uma ação, seria a particiapação percentual do valor investido em uma ação específica em relação ao total investido em ações).

## Valores Atuais

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-007.jpg)

<p class="legenda" style="text-align:center">Figura 7 - Valores atuais.</p>

Neste subgrupo há três informações:

- **Cotação**: cotação do ativo na Bolsa de Valores (ações e FII), no sistema de negociação (Tesouro Direto), ou conforme inserido manualmente pelo usuário (Renda Fixa e Fundos);
- **R\$**: Resultado da multiplicação da quantidade (coluna C) pela cotação; e
- **%**: participação percentual do valor atual em relação ao total atual naquela classe de ativos (por exemplo, no caso de uma ação, seria a particiapação percentual do valor atual em uma ação específica em relação ao total atual das ações).

## Objetivo

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-008.jpg)

<p class="legenda" style="text-align:center">Figura 8 - Meta de investimento.</p>

Neste subgrupo há duas colunas:

- **META**: meta de participação percentual do ativo da respectiva linha em relação ao total de uma determinada classe de ativos (por exemplo, meta de participação de uma determinada ação em relação ao total investido em ações); e
- **DIFERENÇA**: calcula a diferença entre a meta e participação percentual efetiva.

## Resultado

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-009.jpg)

<p class="legenda" style="text-align:center">Figura 9 - Resultado.</p>

Este bloco mostra a diferença entre os valores atuais e os valores investidos:

- **R\$**: diferença entre as colunas I e E;
- **%**: resultado percentual da diferença entre o valor atual e o valor investido em relação ao valor investido:

$$

Resultado\,R\$ = Valor\,Atual - Valor\,Investido

$$

$$

Resultado\,\% = {Resultado\,R\$ \over Valor\,Investido}

$$

## Imposto de Renda

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-010.jpg)

<p class="legenda" style="text-align:center">Figura 10 - Informações fiscais.</p>

- **Preço Médio**: preço médio de cada ativo. O número mostrado nessa célula é o valor mais recente (linha mais baixa) disponível na planilha "LANÇAMENTOS", coluna O (PM);
- **Total IR**: multiplica a quantidade total (coluna C) pelo preço médio. **Este é o valor a ser utilizado na seção de Bens e Direitos da DIRPF**.

O cálculo do preço médio leva em consideração:

- Compras e vendas;
- Bonificações;
- Agrupamentos;
- Desdobramentos;
- Subscrições; e
- Amortizações.

## Outras Informações

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-011.jpg)

<p class="legenda" style="text-align:center">Figura 11 - Outras informações.</p>

**COMPRA MAIS**

Lista os 3 ativos com maior diferença entre a meta do usuário e a participação atual (conforme estabelecido nas colunas OBJETIVO).

**QUADRO CONSOLIDADO**

Consolida as informações da planilha custódia. Esses dados serão utilizados na planilha "PATRIMÔNIO" que, por sua vez, alimentam os gráficos da planilha "INICIAL".


## Yield

![Tabela Google Sheets - Planilha Custódia](./img/planilha-custodia-sheets-012.jpg)

<p class="legenda" style="text-align:center">Figura 12 - Yields.</p>

Mostra os *yields* dos Fundos Imobiliários.

$$

Yield = {Dividendo \over Preço}

$$

- **ÚLT DIVIDENDO**: mostra o total recebido como rendimento de acordo com o lançamento mais recente (linha mais abaixo) na planilha "RECEBIDOS" para o respectivo FII;
- **YIELD PM**: calcula o *yield* em relação ao preço médio (coluna Q); e
- **YIELD ATUAL**: calcula o *yield* em relação à cotação (coluna G);
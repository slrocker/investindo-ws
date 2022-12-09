---
title: "Planilha Custódia"
date: "2019-06-11"
section: "Planilhas"
sectionSlug: "planilhas"
category: "Excel"
categorySlug: "excel"
subcategory: "Instruções"
subcategorySlug: "instrucoes"
featuredImage: "excel"
pageType: "page"
order: 4
---

<div class="iframe-container">
<iframe src="https://www.youtube.com/embed/SidS__vgfzM?start=42" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Organização

As planilhas "XXX-Custódia" (onde XXX é o tipo de ativo) são divididas em 7 grande grupos:

- **Tabela Dinâmica**: na coluna A da tabela, consolida as informações registrads na planilha "LANÇAMENTOS";
- **Valores Aplicados**: consolida a quantidade e os valores investidos para cada ativo e a participação de cada um na carteira;
- **Valores Atuais**: utiliza a cotação atual dos ativos para calcular os totais  e a participação de cada ativo na carteira;
- **Resultado**: compara os valores atuais com os valores investidos em R\$ e percentual;
- **Objetivo**: local para que o usuário determine o objetivo percentual para cada ativo em relação ao total da carteira;
- **IR**: agrega as informações de preço médio por ativo e total a ser declarado no Imposto de Renda; e
- **Informações adicionais**: informa os 3 ativos que mais estão distantes do objetivo percentual estabelecido e os valores consolidados por classe de ativo.

Na planilha "FII-Custódia" há ainda um grupo "YIELD" que calcula os *yields* do último valor recebido como rendimento em relação ao preço médio e a cotação atual do FII.

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-001.jpg)

<p class="legenda" style="text-align:center">Figura 1 - Planilha "FII-CUSTÓDIA".</p>

## Tabela Dinâmica

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-002.jpg)

<p class="legenda" style="text-align:center">Figura 2 - Tabela Dinâmica.</p>

Na coluna A de toda planilha "CUSTÓDIA" há uma tabela dinâmica cuja fonte de dados são os registros da planilha "LANÇAMENTOS".

A tabela dinâmica esta configurada para filtras as informações relativas à coluna "PAPEL" ou "TÌTULO" das planilhas lançamentos.

Assim, serão mostrados na custódia todos os ativos registrados em "LANÇAMENTOS".

### Atualizando a Tabela Dinâmica

Toda vez que **você fizer o primeiro registro de um ativo** na planilha "LANÇAMENTOS" será preciso atualizar a tabela dinâmica para que ela passe a mostrar os novos ativos. Para fazer isso há duas opções

1. Clique na célula A2:

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-003.jpg)

<p class="legenda" style="text-align:center">Figura 3 - Atualizando a Tabela Dinâmica.</p>

2. Acesse o menu "Análise de Tabela Dinâmica":

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-004.jpg)

<p class="legenda" style="text-align:center">Figura 4 - Atualizando a Tabela Dinâmica.</p>

3. Clique em "Atualizar".

Outra maneira de atualizar a tabela dinâmica é através do botão "ATUALIZAR" na planilha "INICIAL":

![Tabela Excel - Planilha Custódia](../img/planilha-inicial-excel-012.jpg)

<p class="legenda" style="text-align:center">Figura 5 - Botão "ATUALIZAR".</p>

### Filtro

É possível filtrar quais ativos você deseja que apareçam na tabela dinâmica.

Assim, é possível excluir algum ativo quando você fez a venda total dele ou por outro motivo qualquer.

1. Clique no botão de filtro:

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-006.jpg)

<p class="legenda" style="text-align:center">Figura 6 - Filtro da tabela dinâmica.</p>

2. Selecione somente os itens que deseja que apareçam

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-007.jpg)

<p class="legenda" style="text-align:center">Figura 7 - Filtrando os ativos.</p>

Caso algum ativo não esteja aparecendo, tente atualizar a tabela dinâmica conforme explicado no subitem acima.

<div class="borderBox" style="border: 1px dashed red">

<h4>ATENÇÃO</h4>

Para que você não receba mensagens de erro ao tentar registrar um provento recebido, deixo o item "VAZIO" desmarcado.

</div>

## Valores Aplicados

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-008.jpg)

<p class="legenda" style="text-align:center">Figura 8 - Valores aplicados.</p>

Neste subgrupo há três informações:

- **Quantidade**: Somatório de todos os lançamentos da coluna "QTD" na planilha "LANÇAMENTOS" para o ativo contido na coluna "PAPEL";
- **R\$**: Somatório de todos os lançamentos da coluna "TOTAL" na planilha "LANÇAMENTOS" para o ativo contido na coluna "PAPEL"; e
- **%**: participação percentual do valor investido em relação ao total investido naquela classe de ativos (por exemplo, no caso de uma ação, seria a particiapação percentual do valor investido em uma ação específica em relação ao total investido em ações).

## Valores Atuais

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-009.jpg)

<p class="legenda" style="text-align:center">Figura 9 - Valores atuais.</p>

Neste subgrupo há três informações:

- **Cotação**: cotação do ativo na Bolsa de Valores (ações e FII), no sistema de negociação (Tesouro Direto), ou conforme inserido manualmente pelo usuário (Renda Fixa e Fundos);
- **R\$**: Resultado da multiplicação da quantidade (coluna C) pela cotação; e
- **%**: participação percentual do valor atual em relação ao total atual naquela classe de ativos (por exemplo, no caso de uma ação, seria a particiapação percentual do valor atual em uma ação específica em relação ao total atual das ações).

## Objetivo

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-010.jpg)

<p class="legenda" style="text-align:center">Figura 10 - Meta de investimento.</p>

Neste subgrupo há duas colunas:

- **META**: meta de participação percentual do ativo da respectiva linha em relação ao total de uma determinada classe de ativos (por exemplo, meta de participação de uma determinada ação em relação ao total investido em ações); e
- **DIFERENÇA**: calcula a diferença entre a meta e participação percentual efetiva.

Há duas opções para o campo META:

- %ATUAL; e
- %INVESTIDO.

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-011.jpg)

<p class="legenda" style="text-align:center">Figura 11 - Opções para o cálculo da meta.</p>

Alterar esse campo irá determinar o cálculo da coluna "DIFERENÇA":

- **%ATUAL**: o campo DIFERENÇA será calculado como a diferença entre a meta do usuário e o valor da coluna I (VALORES ATUAIS - %);e 
- **%INVESTIDO**: o campo DIFERENÇA será calculado como a diferença entre a meta do usuário e o valor da coluna E (VALORES APLICADOS - %).

## Resultado

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-012.jpg)

<p class="legenda" style="text-align:center">Figura 12 - Resultado.</p>

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

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-013.jpg)

<p class="legenda" style="text-align:center">Figura 13 - Informações fiscais.</p>

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

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-014.jpg)

<p class="legenda" style="text-align:center">Figura 14 - Outras informações.</p>

**COMPRA MAIS**

Lista os 3 ativos com maior diferença entre a meta do usuário e a participação atual (conforme estabelecido nas colunas OBJETIVO).

**QUADRO CONSOLIDADO**

Consolida as informações da planilha custódia. Esses dados serão utilizados na planilha "PATRIMÔNIO" que, por sua vez, alimentam os gráficos da planilha "INICIAL".


## Yield

![Tabela Excel - Planilha Custódia](../img/planilha-custodia-excel-015.jpg)

<p class="legenda" style="text-align:center">Figura 15 - Yields.</p>

Mostra os *yields* dos Fundos Imobiliários.

$$

Yield = {Dividendo \over Preço}

$$

- **ÚLT DIVIDENDO**: mostra o total recebido como rendimento de acordo com o lançamento mais recente (linha mais abaixo) na planilha "RECEBIDOS" para o respectivo FII;
- **YIELD PM**: calcula o *yield* em relação ao preço médio (coluna Q); e
- **YIELD ATUAL**: calcula o *yield* em relação à cotação (coluna G);
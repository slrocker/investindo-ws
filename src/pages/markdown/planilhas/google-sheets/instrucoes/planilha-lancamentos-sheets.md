---
title: "Planilha Lançamentos"
date: "2019-10-11"
section: "Planilhas"
sectionSlug: "planilhas"
category: "Google Sheets"
categorySlug: "google-sheets"
subcategory: "Instruções"
subcategorySlug: "instrucoes"
featuredImage: "google-sheets"
pageType: "page"
order: 3
---

<div class="iframe-container">
<iframe src="https://www.youtube.com/embed/wa9jisjKeB8?start=124" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Organização

A planilha "XXX-LANÇAMENTOS" (onde XXX é o tipo de ativo — ações, fii, tesouro etc.) é o local onde são registrados os dados de:

- Operações de Compra e Venda; e
- Eventos Corporativos que influenciam a custódia e o preço médio.

A planilha é organizada na forma de um banco de dados, onde cada coluna representa uma informação e cada linha um lançamento.

## Ações e FII

![Tabela Google Sheets - Planilha Lançamentos](./img/planilha-lancamentos-sheets-001.jpg)

<p class="legenda" style="text-align:center">Figura 1 - Planilha "AÇÕES-LANÇAMENTOS".</p>

Nas planilhas "AÇÕES-LANÇAMENTOS" e "FII-LANÇAMENTOS" são registradas as seguintes informações:

- **Data**: data de execução da operação;
- **C/V**: indicador de COMPRA (C) ou VENDA (V);
- **QTD**: quantidade operada do ativo;
- **PAPEL**: código do ativo (*ticker*);
- **PREÇO**: preço de negociação do ativo;
- **CORRETAGEM**: valor pago em corretagem;
- **CBLC**: valor pago como taxa de liquidação (CBLC é a antiga Companhia de Liquidação e Custódia, atual B3);
- **EMOLUMENTOS**: taxas pagas à Bolsa de Valores;
- **OUTRAS TAXAS**: outras taxas pagas que não se enquadrem nos itens acima (Ex: ISS);
- **IRRF**: valor retido como imposto de renda (no caso de vendas);
- **TOTAL**: valor total da operação;
- **EVENTO**: descrição de evento corporativo quando o registro for relativo a estes eventos;
- **VALOR TOTAL EVENTO**: valor total envolvido no evento (por exemplo, 10 ações bonificadas a R\$10,00, o valor aqui será R\$1.000,00); e
- **VALOR NOMINAL**:valor unitário de cada ativo de um evento (por exemplo, 10 ações bonificadas a R\$10,00, o valor aqui será R\$10,00).

### Cálculo do Total

O total de uma operação é calculado automaticamente pela tabela de acordo com as orientações da Receita Federal:

- **Compras**: o total será igual a quantidade multiplicada pelo preço **mais** a soma das taxas e impostos; e
- **Vendas**: o total será igual a quantidade multiplicada pelo preço **menos** a soma das taxas e impostos.



## Tesouro Direto

![Tabela Google Sheets - Planilha Lançamentos](./img/planilha-lancamentos-sheets-002.jpg)

<p class="legenda" style="text-align:center">Figura 2 - Planilha "TD-LANÇAMENTOS".</p>

Na planilha "TD-LANÇAMENTOS" são registradas as seguintes informações:

- **Data**: data de execução da operação;
- **C/V**: indicador de COMPRA (C) ou VENDA (V);
- **QTD**: quantidade operada do ativo;
- **PAPEL**: nome do título (Ex: NTNB-P 15/05/2035);
- **PREÇO**: preço de negociação do ativo;
- **VENCIMENTO**: data de vencimento do título;
- **CORRETAGEM**: valor pago em corretagem;
- **OUTRAS TAXAS**: outras taxas pagas que não se enquadrem nos itens acima (Ex: ISS);
- **IRRF**: valor retido como imposto de renda (no caso de vendas);
- **TOTAL**: valor total da operação; 
- **ÍNDICE**: índice que remunera o título;
- **+/x**: operador do índice que remunera o título; e
- **%**: percentual do índice que remunera o título.

### Índices

O registro dos índices que remuneram os títulos é opcional e segue a seguinte lógica:

- IPCA + 5,00%%: será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>IPCA</td>
<td>+</td>
<td>5,00</td>
</tr>
</tbody>
</table>

- 120% do CDI será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>CDI</td>
<td>x</td>
<td>120</td>
</tr>
</tbody>
</table>

## Renda Fixa

![Tabela Google Sheets - Planilha Lançamentos](./img/planilha-lancamentos-sheets-003.jpg)

<p class="legenda" style="text-align:center">Figura 3 - Planilha "RF-LANÇAMENTOS".</p>

Na planilha "RF-LANÇAMENTOS" são registradas as seguintes informações:

- **Data**: data de execução da operação;
- **C/V**: indicador de COMPRA (C) ou VENDA (V);
- **TIPO**: tipo de ativo;
- **DESCRIÇÃO**: descrição do ativo (pode ser um apelido) que o diferencia dos demais com o mesmo tipo (Ex: POUPANÇA INVESTINDO);
- **VALOR**: valor total da operação;
- **OUTRAS TAXAS**: outras taxas pagas que não se enquadrem nos itens acima (Ex: ISS);
- **IRRF**: valor retido como imposto de renda; 
- **ÍNDICE**: índice que remunera o título (somente para renda fixa);
- **+/x**: operador do índice que remunera o título (somente para renda fixa); 
- **%**: percentual do índice que remunera o título (somente para renda fixa); e

### Índices

O registro dos índices que remuneram os títulos é opcional e segue a seguinte lógica:

- IPCA + 5,00%%: será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>IPCA</td>
<td>+</td>
<td>5,00</td>
</tr>
</tbody>
</table>

- 120% do CDI será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>CDI</td>
<td>x</td>
<td>120</td>
</tr>
</tbody>
</table>


## Fundos

![Tabela Google Sheets - Planilha Lançamentos](./img/planilha-lancamentos-sheets-004.jpg)

<p class="legenda" style="text-align:center">Figura 4 - Planilha "FUNDOS-LANÇAMENTOS".</p>

Na planilha "FUNDOS-LANÇAMENTOS" são registradas as seguintes informações:

- **Data**: data de execução da operação;
- **C/V**: indicador de DEPÓSITO (D) ou RESGATE (R);
- **QTD**: quantidade de cotas;
- **TIPO**: tipo de ativo;
- **DESCRIÇÃO**: descrição do ativo (pode ser um apelido) que o diferencia dos demais com o mesmo tipo (Ex: FMM SIGMA ALFA);
- **VALOR**: valor total da operação;
- **OUTRAS TAXAS**: outras taxas pagas que não se enquadrem nos itens acima (Ex: ISS);
- **IRRF**: valor retido como imposto de renda; 


## Moedas

![Tabela Google Sheets - Planilha Lançamentos](./img/planilha-lancamentos-sheets-005.jpg)

<p class="legenda" style="text-align:center">Figura 5 - Planilha "MOEDAS-LANÇAMENTOS".</p>

Na planilha "MOEDAS-LANÇAMENTOS" são registradas as seguintes informações:

- **Data**: data de execução da operação;
- **C/V**: indicador de COMPRA (C) ou VENDA (V);
- **QTD**: quantidade operada do ativo;
- **PAPEL**: código do ativo (*ticker*);
- **COTAÇÃO**: preço de negociação do ativo;
- **CORRETAGEM**: valor pago em corretagem;
- **OUTRAS TAXAS**: outras taxas pagas que não se enquadrem nos itens acima (Ex: ISS);
- **IRRF**: valor retido como imposto de renda (no caso de vendas);
- **TOTAL**: valor total da operação;

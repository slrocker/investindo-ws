---
title: "Planilha Lançamentos"
date: "2019-05-11"
section: "Planilhas"
sectionSlug: "planilhas"
category: "Excel"
categorySlug: "excel"
subcategory: "Instruções"
subcategorySlug: "instrucoes"
featuredImage: "excel"
pageType: "page"
order: 3
---

<div class="iframe-container">
<iframe src="https://www.youtube.com/embed/SidS__vgfzM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Organização

A planilha "XXX-LANÇAMENTOS" (onde XXX é o tipo de ativo — ações, fii, tesouro etc.) é o local onde são registrados os dados de:

- Operações de Compra e Venda; e
- Eventos Corporativos que influenciam a custódia e o preço médio.

A planilha é organizada na forma de um banco de dados, onde cada coluna representa uma informação e cada linha um lançamento.

## Ações e FII

![Tabela Excel - Planilha Lançamentos](../img/planilha-lancamentos-excel-001.jpg)

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
- **TOTAL**: valor total da operação; e
- **EVENTO**: descrição de evento corporativo quando o registro for relativo a estes eventos.

### Cálculo do Total

O total de uma operação é calculado automaticamente pela tabela de acordo com as orientações da Receita Federal:

- **Compras**: o total será igual a quantidade multiplicada pelo preço **mais** a soma das taxas e impostos; e
- **Vendas**: o total será igual a quantidade multiplicada pelo preço **menos** a soma das taxas e impostos.

### Cálculo do Preço Médio

![Tabela Excel - Preço Médio](../img/planilha-lancamentos-excel-002.jpg)

<p class="legenda" style="text-align:center">Figura 2 - Colunas de cálculo do preço médio.</p>

As colunas M, N e O são reservadas para o cálculo automático que a tabela faz do preço médio de cada ação.

De forma simplificada, o preço médio é calculado da seguinte maneira:

- **Compras**: soma-se o total investido e divide-se pela quantidade total de ativos; e
- **Vendas**: apenas subtrai-se a quantidade de ativos, não ocorrendo alteração no preço médio.

As fórmulas de cada coluna funcionam da seguinte maneira:

**COLUNA QTD TOTAL**

Esta coluna mostra o total de ações em custódia até o registro da respectiva linha.

A fórmula desta coluna é:

$$

=SOMASE(\$D\$2:DX;DX;\$C\$2:CX)

$$

Onde:

-**DX e CX**: células das colunas D e C da respectiva linha. 

O que essa fórmula faz é o seguinte:

1. Procura na coluna D, entre as células D2 e DX, papéis cujo nome seja igual ao contido em DX; e
2. Soma os valores da coluna C nas linhas onde a busca acima retornou verdadeiro.

**COLUNA R\$ INVESTIDO**

Esta coluna mostra o **total investido** em determinada ação até o registro contido na respectiva linha.

A fórmula desta coluna é:

$$

=SE(E(BX="V";LX<>"AGRUPAMENTO");(PROC(2;1/(\$D\$2:D2=DX);\$N\$2:N2)+(CX*PROC(2;1/(\$D\$2:D2=DX);\$O\$2:O2)));SEERRO(PROC(2;1/(\$D\$2:D2=DX);\$N\$2:N2)+KX;KX))

$$

Onde:

-**BX, LX, DX, CX e KX**: células das colunas B, L, D, C e K da respectiva linha. 

O que essa fórmula faz é o seguinte:

1. Verifica se a célula B3 é igual a V e se o registro não é de um evento do tipo AGRUPAMENTO;
2. Caso as afirmações acima sejam verdadeiras, procura pela última informação de total investido e subtrai o valor correspondente a quantidade (coluna C) multiplicado pelo último registro de preço médio (coluna O), obtendo o novo total investido;
3. Caso alguma das informações de 1 seja falsa, procura o último registro relativo à ação (coluna N) e soma o total da operação (coluna K), obtendo o novo total investido naquela ação.

**OBS**: no caso das vendas, os valores da coluna QTD e TOTAL são registrados como negativos. Dessa forma, eles são subtraídos no cálculo desta coluna.

**COLUNA PM**

Esta coluna mostra o **preço médio de compra** de determinada ação até o registro contido na respectiva linha.

A fórmula desta coluna é:

$$

=SEERRO(NX/MX;"")

$$

Onde:

-**NX, MX**: células das colunas M e N da respectiva linha. 

O que essa fórmula faz é o seguinte:

1. Divide o total investido (coluna N) pela quantidade total em custódia (coluna N).

## Tesouro Direto

![Tabela Excel - Planilha Lançamentos](../img/planilha-lancamentos-excel-003.jpg)

<p class="legenda" style="text-align:center">Figura 3 - Planilha "TD-LANÇAMENTOS".</p>

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

## Renda Fixa e Fundos

![Tabela Excel - Planilha Lançamentos](../img/planilha-lancamentos-excel-004.jpg)

<p class="legenda" style="text-align:center">Figura 4 - Planilha "RF-LANÇAMENTOS".</p>

Nas planilhas "RF-LANÇAMENTOS" e 'FUNDOS-LANÇAMENTOS" são registradas as seguintes informações:

- **Data**: data de execução da operação;
- **D/R**: indicador de DEPÓSITO (D) ou RESGATE (R);
- **TIPO**: tipo de ativo;
- **DESCRIÇÃO**: descrição do ativo (pode ser um apelido) que o diferencia dos demais com o mesmo tipo (Ex: POUPANÇA INVESTINDO);
- **OUTRAS TAXAS**: outras taxas pagas que não se enquadrem nos itens acima (Ex: ISS);
- **VALOR**: valor total da operação;
- **IRRF**: valor retido como imposto de renda; 
- **ÍNDICE**: índice que remunera o título (somente para renda fixa);
- **+/x**: operador do índice que remunera o título (somente para renda fixa); 
- **%**: percentual do índice que remunera o título (somente para renda fixa); e
- **VENCIMENTO**: data de vencimento do título (somente para renda fixa).

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
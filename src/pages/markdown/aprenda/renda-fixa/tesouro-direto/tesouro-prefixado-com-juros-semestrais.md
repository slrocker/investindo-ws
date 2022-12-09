---
title: "Nota do Tesouro Nacional Série F (NTN-F) - Tesouro Prefixado com Juros Semestrais"
date: "2019-10-30"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Renda Fixa"
categorySlug: "renda-fixa"
subcategory: "Tesouro Direto"
subcategorySlug: "tesouro-direto"
order: 6
featuredImage: "renda-fixa"
pageType: "page"
showIndex: "false"
---

## O que são as Notas do Tesouro Nacional Série F?

As Notas do Tesouro Nacional Série F (NTN-F), também chamadas de Tesouro Prefixado com Juros Semestrais, são títulos [prefixados](/aprenda/financas/iniciantes/rendimento) do governo federal disponíveis para negociação no Tesouro Direto.

Esses títulos se diferenciam das Letras do Tesouro Nacional (LTN) pelo fato de pagarem cupons de rendimento semestrais equivalentes a uma taxa de 10,00% ao ano.

## Rendimento

No vencimento do título, o governo paga R\$1.000,00 para cada NTN-F que o investidor possui.

**OBS**: No mercado financeiro, diz-se que o valor de face (ou valor nominal) de uma NTN-F é de R\$1.000,00. Ou seja, valor de face é o valor de resgate do título.

Dessa forma, o rendimento de uma NTN-F será dado pela diferença entre o preço de compra e a somatória dos valores recebidos como cupons mais os R\$1.000,00 a serem recebidos no seu vencimento.

### Cupons Semestrais

Durante o "período de vida" do título, o investidor receberá cupons semestrais que equivalem a uma taxa de 10,00% ao ano sobre o valor nominal do título (R\$1.000,00).

O cálculo do valor bruto do cupom de uma NTN-F é dado pela fórmula 1 abaixo:

$$

Cupom = {Valor\,Nominal \times \Bigg [ \Bigg (1 + \Bigg ({10,00 \over 100} \Bigg ) \Bigg )^{\large 1 \over 2} -1 \Bigg ]}

$$

Onde:

- **Valor Nominal**: R\$1.000,00.

Logo:

$$

Cupom = {1.000 \times \Bigg [ \Bigg (1 + \Bigg ({10,00 \over 100} \Bigg ) \Bigg )^{\large 1 \over 2} -1 \Bigg ] = 48,808850}

$$

Assim, cada NTN-F pagará cupons semestrais equivalentes a R$48,80.

Observe os títulos disponíveis para venda no dia 29/10/2019:

<div class = "overflow responsiveTable" id="figura1">

| Título                                      |  Vencimento | Taxa de Rendimento | Valor Mínimo | Preço Unitário |
|---------------------------------------------|-------------|--------------------|--------------|----------------|
| Tesouro Prefixado com Juros Semestrais 2029 | 01/01/2029  | 6,45               |  38,05       | 1.268,53       |


</div>


<p class="legenda" style="text-align:center">Figura 1 - Tesouro Prefixado com Juros Semestrais disponíveis para venda em 29/10/2019.</p>

Um investidor que comprar , por exemplo, um título Tesouro Prefixado com Juros Semestrais 2029 nesse dia, receberá **na data de vencimento do título**, contabilizando-se cupons e montante final, uma taxa de rendimento equivalente a 6,45% ao ano.

## Como se calcula o preço de uma Nota do Tesouro Nacional Série F?

Ao preço presente de um título de renda fixa é dado o nome de **preço unitário (PU)**.

No caso das NTN-F, o PU será dado **pelo valor presente do fluxo de cupons e do valor de face a ser recebido no rendimento** considerando a taxa de rendimento contratada.

A fórmula para o cálculo do PU de uma NTN-B é a seguinte:

$$

PU = {{\displaystyle\sum_{i=1}^n {cupom \over { \bigg(1 + \Large {taxa \over 100}\bigg)^{du_i \over 252}} }} + { 1.000  \over { \bigg(1 + \Large {taxa \over 100}\bigg)^{du_n \over 252} }}}

$$

<p class="legenda" style="text-align:center">Fórmula 2 - Cálculo do PU de uma NTN-B.</p>

Onde:

- **Cupom**: R\$48,808850
- **dui**: dias úteis entre a data de liquidação da compra (inclusive) e a data de recebimento do cupom (exclusive);
- **dun**: dias úteis entre a data de liquidação da compra (inclusive) e a data de vencimento do título (exclusive); e
- **taxa**: taxa de rendimento contratada.

**OBS**: o preço do título é truncado em 2 casas decimais.

Na prática, o comportamento das taxas e preços se dará da seguinte maneira:

- Quanto maior for a procura por um título, **menor será sua taxa de rendimento e maior será o seu preço atual**; e
- Quanto menor for a procura por um título, **maior será sua taxa de rendimento e menor será o seu preço atual**.

### Exemplo

Vamos calcular o preço da NTN-F com vencimento em 01/01/2029, supondo a compra em 29/10/2019 e considerando as informações disponíveis no site do Tesouro Direto para a taxa de rendimento que é de 6,45% a.a.

**1. Cálculo dos dias úteis**

Em cálculos que envolvem títulos de renda fixa, o mercado conveciona utilizar 252 dias úteis como sendo o período de um ano.

Para calcular os dias úteis pode-se utilizar o EXCEL, utilizando-se uma planilha que contenha os feriados (disponível no *site* da [ANBIMA](https://www.anbima.com.br/feriados/feriados.asp))  e a fórmula *DIATRABALHOTOTAL*.

**Cupons**

As datas para pagamento dos cupons de um NTN-F são obtidas retroagindo-se seis meses da data de vencimento.

Dessa forma, no nosso exemplo, os cupons será pagos sempre nos dias 01/01/XX e 01/07/XX.

Em seguida, é preciso verificar se essas datas são dias úteis, caso contrário a data a ser considerada será a do próximo dia útil.

Com as datas de pagamento em mãos, podemos calcular os dias úteis compreendidos entre a data de liquidação da compra (inclusive) e a data de pagamento do cupom (exclusive).

Obtemos, então, os seguintes dados (figura 2):

<div class = "overflow responsiveTable" id="figura2">

| Tipo  | Pagamento  | Du   |
|-------|------------|------|
| Cupom | 02/01/2020 | 43   |
| Cupom | 01/07/2020 | 166  |
| Cupom | 04/01/2021 | 294  |
| Cupom | 01/07/2021 | 417  |
| Cupom | 03/01/2022 | 545  |
| Cupom | 01/07/2022 | 669  |
| Cupom | 02/01/2023 | 796  |
| Cupom | 03/07/2023 | 920  |
| Cupom | 02/01/2024 | 1045 |
| Cupom | 01/07/2024 | 1169 |
| Cupom | 02/01/2025 | 1299 |
| Cupom | 01/07/2025 | 1421 |
| Cupom | 02/01/2026 | 1552 |
| Cupom | 01/07/2026 | 1674 |
| Cupom | 04/01/2027 | 1802 |
| Cupom | 01/07/2027 | 1925 |
| Cupom | 03/01/2028 | 2053 |
| Cupom | 03/07/2028 | 2177 |
| Cupom | 02/01/2029 | 2302 |


</div>

<p class="legenda" style="text-align:center">Figura 2 - Dias úteis para o pagamento de cupons.</p>

**Principal**

Em seguida, calculamos os dias úteis para o pagamento do principal, que ocorre no vencimento do título junto com o pagamento do último cupom.
$$

du=2302

$$

**2. Cálculo do PU**

Para calcular o PU, precisamos trazer a valor presente os cupons a serem recebidos utilizando a fórmula 3:

$$

VP\,cupom = {cupom \over { \bigg(1 + \Large {taxa \over 100}\bigg)^{du_c \over 252}} }

$$

<p class="legenda" style="text-align:center">Fórmula 3 - Valor presente do cupom.</p>

Para calcular, por exemplo, o valor presente do cupom a ser recebido em 01/01/2020:

$$

VP\,cupom = {48,808850 \over { \bigg(1 + \Large {6,45 \over 100}\bigg)^{43 \over 252}}   } = 48,291042

$$

A seguir, repetimos o processo para todos os cupons.

Em seguida, trazemos a valor presente, o valor de face do título:

$$

VP = {1.000 \over { \bigg(1 + \Large {6,45 \over 100}\bigg)^{2302 \over 252}}   } = 564,971444

$$

O PU do título será o somatório do valor presente dos cupons e do valor de face conforme a figura 3:

<div class = "overflow responsiveTable" id="figura3">

| Tipo      | Pagamento  | Du   | VP         |
|-----------|------------|------|------------|
| Cupom     | 02/01/2020 | 43   | 48,291042  |
| Cupom     | 01/07/2020 | 166  | 46,840002  |
| Cupom     | 04/01/2021 | 294  | 45,376253  |
| Cupom     | 01/07/2021 | 417  | 44,012796  |
| Cupom     | 03/01/2022 | 545  | 42,637397  |
| Cupom     | 01/07/2022 | 669  | 41,34598   |
| Cupom     | 02/01/2023 | 796  | 40,063855  |
| Cupom     | 03/07/2023 | 920  | 38,850387  |
| Cupom     | 02/01/2024 | 1045 | 37,664329  |
| Cupom     | 01/07/2024 | 1169 | 36,523538  |
| Cupom     | 02/01/2025 | 1299 | 35,364631  |
| Cupom     | 01/07/2025 | 1421 | 34,31051   |
| Cupom     | 02/01/2026 | 1552 | 33,213584  |
| Cupom     | 01/07/2026 | 1674 | 32,22358   |
| Cupom     | 04/01/2027 | 1802 | 31,216594  |
| Cupom     | 01/07/2027 | 1925 | 30,278604  |
| Cupom     | 03/01/2028 | 2053 | 29,332398  |
| Cupom     | 03/07/2028 | 2177 | 28,443968  |
| Cupom     | 02/01/2029 | 2302 | 27,575606  |
| Principal | 02/01/2029 | 2302 | 564,971444 |

</div>

<p class="legenda" style="text-align:center">Figura 3 - Fluxo de pagamento da NTN-F com vencimento em 01/01/2029 no dia 29/10/2019.</p>

Temos, portanto:

$$

PU = 1268,53

$$


Observe na figura 1 que esse é o preço pelo qual estão sendo vendidas as NTN-F com vencimento em 01/01/2029.

## Fluxo

O fluxo de um título é a representação da movimentação dos valores ao longo do tempo. No caso das NTN-F, o fluxo é representado pela Figura 4:

<div style="text-align:center" id="figura4">
<svg viewBox="0 0 274 117">
<style type="text/css">
	.st0ntn{font-family:'Arial';}
	.st1ntn{font-size:8px;}
</style>
<path d="M209.5,33.7V11.4l4.3,1.5c-1.9-2.2-3.7-5.7-4.8-8.5c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v22.3c-1.1,2.6-2.6,5.4-4.3,7.3
	l4.3-1.5v18.7h-26.3V39.5l4.3,1.5c-1.9-2.2-3.7-5.7-4.8-8.5c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v18.7h-27.8V39.5l4.3,1.5
	c-1.9-2.2-3.7-5.7-4.8-8.5c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v18.7h-27.8V39.5l4.3,1.5c-1.9-2.2-3.7-5.7-4.8-8.5
	c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v18.7H95.7V39.5L100,41c-1.9-2.2-3.7-5.7-4.8-8.5c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v18.7H67.9
	V39.5l4.3,1.5c-1.9-2.2-3.7-5.7-4.8-8.5c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v18.7h-23v0.5h-0.5v47.4l-4.3-1.5c1.9,2.2,3.7,5.7,4.8,8.5
	c1.1-2.8,2.9-6.4,4.8-8.5l-4.3,1.5V59.2H209v0h0.5v-0.4V39.5l4.3,1.5C212.1,39.1,210.5,36.3,209.5,33.7z"/>
<text id="XMLID_3_" transform="matrix(1 0 0 1 24.9976 52.0587)" class="st0ntn st1ntn">Compra</text>
<text id="XMLID_7_" transform="matrix(1 0 0 1 191.418 73.1981)" class="st0ntn st1ntn">Vencimento</text>
<text id="XMLID_5_" transform="matrix(1 0 0 1 7 82)"><tspan x="0" y="0" class="st0ntn st1ntn">Valor</tspan><tspan x="-6.7" y="9.6" class="st0ntn st1ntn">Investido</tspan></text>
<text id="XMLID_6_" transform="matrix(1 0 0 1 225 10)"><tspan x="0" y="0" class="st0ntn st1ntn">(Investido</tspan><tspan x="13.9" y="9.6" class="st0ntn st1ntn"> +</tspan><tspan x="5" y="19.2" class="st0ntn st1ntn"> Rent.)</tspan></text>
<text id="XMLID_9_" transform="matrix(1 0 0 1 228 48)" class="st0ntn st1ntn">Cupom</text>
<path d="M40.7,112c-2.6,0-4-1.7-4-2.6c0-1.7,0.1-3.8,0.1-6c0.2-5.8,0.4-12.3-0.5-15.8c-0.2-1-2.7-1.9-3.8-2.2L30.7,85l1.9-0.5
	c1.4-0.3,3.6-1.2,3.8-2.2c0.9-3.3,0.7-9.6,0.4-15c-0.1-2.1-0.2-4.2-0.2-5.8c0-1.2,0.3-2.3,3.4-3.1l0.2,1c-2.6,0.6-2.6,1.3-2.6,2.1
	c0,1.7,0.1,3.7,0.2,5.8c0.2,5.5,0.4,11.8-0.5,15.3c-0.3,1.1-1.8,1.9-3.1,2.4c1.2,0.5,2.7,1.3,3,2.4c0.9,3.6,0.7,10.2,0.5,16.1
	c-0.1,2.2-0.1,4.3-0.1,6c0,0.3,0.8,1.6,3,1.6V112z"/>
<path d="M63.7,30.5h-1c0-1.2,0.9-2.3,2.5-3.1c1.3-0.6,2.9-0.9,3.8-0.9c0,0,0,0,0,0c4.8,0,10.5,0.1,16.6,0.2c16,0.2,34.2,0.4,44-0.5
	c4.1-0.4,6.6-3.9,6.6-4l0.4-0.6l0.4,0.6c0,0,2.6,3.6,6.7,4c9.4,0.9,26.7,0.7,41.9,0.5c5.9-0.1,11.5-0.1,16.1-0.1
	c2.4,0,5.4,0,7.5,3.2l-0.8,0.5c-1.9-2.9-4.5-2.8-6.9-2.8c-4.6,0-10.1,0.1-15.9,0.1c-15.3,0.2-32.6,0.4-42-0.5c-3.6-0.3-6-2.8-7-3.9
	c-0.9,1.1-3.4,3.5-7,3.9c-9.8,0.9-28,0.7-44.1,0.5c-6.1-0.1-11.9-0.2-16.6-0.2c0,0,0,0,0,0c-0.8,0-2.2,0.3-3.4,0.8
	C64.8,28.8,63.7,29.5,63.7,30.5z"/>
<path d="M214.8,32.7v-1c1.3,0,1.8-0.5,1.9-0.6c0-0.8-0.1-1.8-0.1-2.9c-0.1-2.9-0.3-6.3,0.3-8.1c0.2-0.5,0.8-0.8,1.4-1.1
	c-0.7-0.3-1.3-0.6-1.4-1.1c-0.6-1.8-0.5-5-0.3-7.8c0.1-1.1,0.1-2.1,0.1-2.9c0-0.2,0-0.5-1.6-0.8l0.2-1c2,0.4,2.4,0.9,2.4,1.8
	c0,0.8-0.1,1.9-0.1,2.9c-0.1,2.7-0.3,5.8,0.3,7.4c0.1,0.3,1.3,0.7,2.4,0.9l2.6,0.5l-2.6,0.5c-1.1,0.2-2.3,0.7-2.4,0.9
	c-0.6,1.7-0.4,5.1-0.3,7.8c0.1,1.1,0.1,2.2,0.1,3C217.6,31.8,216.6,32.7,214.8,32.7z"/>
<path d="M214.8,59.7v-1c1.3,0,1.8-0.5,1.9-0.6c0-0.7-0.1-1.8-0.1-2.8c-0.1-2.9-0.3-6.2,0.3-8c0.2-0.5,0.7-0.8,1.4-1.1
	c-0.6-0.3-1.2-0.6-1.4-1.1c-0.6-1.8-0.5-4.9-0.3-7.6c0.1-1,0.1-2,0.1-2.8c0-0.2,0-0.5-1.6-0.8l0.2-1c2,0.4,2.4,0.9,2.4,1.8
	c0,0.8-0.1,1.8-0.1,2.9c-0.1,2.7-0.3,5.7,0.3,7.2c0.1,0.3,1.3,0.7,2.4,0.9l2.6,0.5l-2.6,0.5c-1.1,0.2-2.3,0.6-2.4,0.9
	c-0.6,1.6-0.4,5-0.3,7.6c0.1,1.1,0.1,2.1,0.1,3C217.6,58.8,216.6,59.7,214.8,59.7z"/>
<text id="XMLID_14_" transform="matrix(1 0 0 1 82.6706 19.0598)" class="st0ntn st1ntn">Cupom de Juros (Semestral)</text>
</svg>

</div>

<p class="legenda" style="text-align:center">Figura 4 - Fluxo de pagamento de uma NTN-F. Setas para baixo indicam dinheiro que saiu do bolso do investidor. Setas para cima indicam dinheiro que entrou no bolso do investidor.</p>

## Valor Mínimo de Compra

O valor mínimo de investimento permitido no Tesouro Direto é o que for maior entre:

- R$30,00; ou
- 0,01 título.

Deve-se considerar também que a fração mínima a ser comprada de um título é de 0,01 título.

Observe novamente a tabela de títulos disponíveis para venda em 24/10/2019:

<div class = "overflow responsiveTable" id="figura5">

| Título                                      |  Vencimento | Taxa de Rendimento | Valor Mínimo | Preço Unitário |
|---------------------------------------------|-------------|--------------------|--------------|----------------|
| Tesouro Prefixado com Juros Semestrais 2029 | 01/01/2029  | 6,45               |  38,05       | 1.268,53       |

</div>


<p class="legenda" style="text-align:center">Figura 5 - Tesouro Prefixado com Juros Semestrais disponíveis para venda em 29/10/2019.</p>


Considere o título com vencimento em 01/01/2029 da figura 5.

O valor equivalente a 0,01 título seria de R\$12,68. Esse valor está abaixo dos R\$30,00 mínimos de investimento, portanto, não é possível comprar apenas 0,01 título.

O valor para a compra de 0,02 título seria de R\$25,36, ainda abaixo dos R\$30,00 mínimos.

O valor para a compra de 0,03 título seria de R\$38,05. Esse valor está acima dos R\$30,00 mínimos e cumpre o requisito de quantidade múltipla de 0,01 títulos, sendo, portanto, o valor mínimo a ser investido como pode ser observado na tabela do Tesouro.


## Riscos Específicos

Ao comprar um título prefixado, o investidor fica com seu rendimento travado até o vencimento do título.

**Aumento da Inflação**

Caso ocorra alguma alteração econômica onde haja, por exemplo, aumento da taxa de inflação, o [rendimento real](/aprenda/financas/iniciantes/rendimento) do seu investimento será afetado, podendo, inclusive, ficar negativo.

**Marcação a Mercado**

Como discutido, mudanças nas taxas de juros que remuneram as NTN-F causam mudanças no preço do título.

Caso o investidor deseje vender seu título antes do vencimento, terá de fazê-lo pelo PU atual que **pode estar abaixo do seu preço de compra**.

Isso ocorrerá em um cenário onde as taxas de juros se reduziram entre o período da compra do título e a data da venda antecipada.

**Imposto de Renda**

Apesar de não ser um risco, a NTN-F possui a desvantagem de pagar imposto de renda sobre os valores recebidos como cupons.

Como a cobrança do imposto é feita através da tabela regressiva, onde quanto maior o período de aplicação, menor a taxa paga, o investidor que comprar um NTN-F pagará mais imposto do que pagaria se comprasse um título que não pagasse os cupons.

Isso resultará em um rendimento real menor para o investidor, quando comparado ao título sem cupons.

## Estratégia de Investimento

Devido às suas características particulares as NTN-F são úteis para:

- Investidores que desejam ter uma taxa de rendimento conhecida no momento da compra do título;
- Investidores que carregarão o título até o seu vencimento; e
- Investidores que desejam um fluxo de renda periódico.


<div class="referencias">

**Referências**:

<p id="1">BERGER, Paulo Lamosa. <strong>Mercado de Renda Fixa no Brasil: ênfase em títulos públicos</strong>. 1 ed. Rio de Janeiro. Interciência, 2015.</p>

<p id="2">Escola de Administração Fazendária - ESAF. <strong>Curso do Tesouro Direto</strong>. Disponível em <a href="http://www.tesouro.gov.br/-/curso-do-tesouro-direto">http://www.tesouro.gov.br/-/curso-do-tesouro-direto</a></p>


</div>
---
title: "Letra Financeira do Tesouro (LFT) - Tesouro SELIC"
date: "2019-10-23"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Renda Fixa"
categorySlug: "renda-fixa"
subcategory: "Tesouro Direto"
subcategorySlug: "tesouro-direto"
order: 3
featuredImage: "renda-fixa"
pageType: "page"
showIndex: "false"
---

## O que são as Letras Financeiras do Tesouro?

As Letras Financeiras do Tesouro (LFT), também chamadas de Tesouro SELIC, são títulos [pós-fixados](/aprenda/financas/iniciantes/rendimento) do governo federal disponíveis para negociação no Tesouro Direto.

## Rendimento

No vencimento de uma LFT, o investidor receberá o valor pago na compra do título corrigido pela variação da taxa SELIC entre a data da compra e a data do vencimento.

O preço de uma LFT é atualizado diariamente pela variação da taxa SELIC tendo como base um valor nominal de R\$1.000,00 cuja data base é 01/07/2000.

Isso quer dizer que o Tesouro padronizou que uma LFT no dia 01/07/2000 valia R\$1.000,00. A partir daí, esse valor foi atualizado diariamente pela variação da taxa SELIC. 

Supondo que a variação da taxa SELIC do dia 01/07/2000 para o dia 02/07/2000 foi de 0,01%, no dia 02/07/2000 uma LFT custaria R\$1.000,10 e assim por diante.

Ao preço da LFT corrigido pela taxa SELIC a partir da data-base de 01/07/2000 é dado o nome de **VALOR NOMINAL ATUALIZADO (VNA)**.

### Ágio e Deságio

Se a demanda por LFT for muito elevada, é possível que alguns investidores estejam dispostos a adquirir o título com um **ágio**, isto é, por um preço acima do VNA. Na prática, isso significa que eles receberão um rendimento menor do que a taxa SELIC.

Por outro lado, se a demanda for baixa, é possível que a LFT esteja sendo vendida com um **deságio**, isto é, por um preço abaixo do VNA. Na prática, isso significa que os investidor que comprar essa LFT receberá um rendimento maior do que a taxa SELIC.

Acessando o [site](http://www.tesouro.gov.br/tesouro-direto-precos-e-taxas-dos-titulos) do Tesouro Direto no dia 23/10/2019, temos as seguintes LFT a venda:


<div class = "overflow responsiveTable" id="figura1">

|  Título            | Vencimento | Taxa de Rendimento (% a.a.) | Valor Mínimo | Preço Unitário |
|--------------------|------------|-----------------------------|--------------|----------------|
| Tesouro SELIC 2025 | 01/03/2025 | Selic + 0,02                | 103,69       | 10.369,42      |

</div>


<p class="legenda" style="text-align:center">Figura 1 - Tesouro SELIC disponíveis para venda em 23/10/2019.</p>

Observe como a taxa de rendimento indicada é de "Selic + 0,02". Isso significa que o título está sendo vendido com um deságio.

## Como se calcula o preço de uma Letra Financeira do Tesouro?

Ao preço presente de um título de renda fixa é dado o nome de **preço unitário (PU)**.

No caso das LFT, o PU tem dois fatores:

- **VNA**: é o valor nominal do título atualizado pela taxa SELIC desde a data base (01/07/2000); e
- **Cotação**: é o "preço" que o mercado está pagando no título.

A fórmula para o cálculo do PU de uma Letra Financeira do Tesouro é a seguinte:

$$

PU = {Cotação \over 100} \times VNA

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do PU de uma LFT.</p>

**OBS**: o preço do título é truncado em 2 casas decimais.

### Valor Nominal Atualizado

O valor nominal atualizado de uma LFT pode ser obtido no [site](https://www.anbima.com.br/pt_br/informar/valor-nominal-atualizado.htm) da ANBIMA;

O VNA é o equivalente a R\$1.000,00 corrigidos pela variação da taxa SELIC do dia 01/07/2000 até a data considerada.

Seu cálculo é feito através da seguinte fórmula:

$$

VNA = 1.000 \times \prod {n \atop \small 1} \Bigg (1 + {Taxa\,Selic \over 100} \Bigg ) ^ {\large 1 \over 252} 

$$

<p class="legenda" style="text-align:center">Fórmula 2 - Cálculo do VNA de uma LFT.</p>

**OBS**: o VNA do título é truncado em 6 casas decimais.

O valor para a taxa SELIC acumulada em um determinado período pode ser obtido no [site](https://www.bcb.gov.br/?selicacumul) do Banco Central.

### VNA Projetado

Como no Tesouro Direto as compras são liquidadas apenas no dia útil seguinte a data da compra, o VNA utilizado para calcular o preço dos títulos que aparece no sistema é o **VNA Projetado**, que considera o VNA acumulado até o dia considerado e uma projeção para o dia seguinte que utiliza como valor a meta da [taxa SELIC](https://www.bcb.gov.br/controleinflacao/historicotaxasjuros).

$$

VNA\,Projetado = VNA \times \Bigg [ ( 1 + meta\,SELIC ) ^ {\large 1 \over 252} \Bigg ] 

$$

<p class="legenda" style="text-align:center">Fórmula 3 - Cálculo do VNA projetado de uma LFT.</p>

### Cotação

A cotação equivale ao percentual do VNA pelo qual os investidores estão negociando a LFT:

- **Cotação de 100%**: diz-se que o título está sendo negociado **ao par**. O preço da LFT será igual ao VNA;
- **Cotação acima de 100%**: diz-se que o título está sendo negociado com **ágio**. O preço da LFT será maior do que o VNA; e
- **Cotação abaixo de 100%**: diz-se que o título está sendo negociado com **deságio**. O preço da LFT será menor do que o VNA.

Seu cálculo é feito através da seguinte fórmula:

$$

Cotação = { 100  \over { \bigg(1 + \Large {taxa \over 100}\bigg)^{du \over 252} }}

$$

<p class="legenda" style="text-align:center">Fórmula 4 - Cálculo da cotação de uma LFT.</p>

Onde:

- **taxa** = taxa de ágio ou deságio; e
- **du** = dias úteis do dia da liquidação (inclusive) até a data de vencimento do título (exclusive).

**OBS**: a cotação do título é truncado em 4 casas decimais.

### Exemplo

Vamos calcular o preço da LFT com vencimento em 01/03/2025, cuja taxa de deságio é de 0,02% ao ano (o título renderá SELIC + 0,02% ao ano).

**1. Cálculo do VNA**

Supondo que fizemos a compra do título em 23/10/2019, obtemos no [site](https://www.bcb.gov.br/?selicacumul) do Banco Central o fator acumulado de 10,378287814 para a variação da taxa SELIC no período entre 01/07/2000 a 23/10/2019:

A seguir, calculamos o VNA:

$$

VNA = 1.000 \times 10,378287 = 10.378,287814 

$$

**2. Cálculo do VNA projetado**

Em 23/10/2019, a meta da taxa SELIC era de 5,5% ao ano. Logo, o VNA projetado será:

$$

VNA\,Projetado = 10.378,287814 \times \Bigg [ ( 1 + 0,055 ) ^ {\large 1 \over 252} \Bigg ] = 10.380,493054

$$

**3. Cálculo dos dias úteis**

Em cálculos que envolvem títulos de renda fixa, o mercado conveciona utilizar 252 dias úteis como sendo o período de um ano.

Para calcular os dias úteis pode-se utilizar o EXCEL, utilizando-se uma planilha que contenha os feriados (disponível no *site* da [ANBIMA](https://www.anbima.com.br/feriados/feriados.asp))  e a fórmula *DIATRABALHOTOTAL*.

O cálculo a ser feito envolve o período entre a **data de liquidação da compra (inclusive)** e o **dia do vencimento do título (exclusive)**.

Para **a data de liquidação da compra, utilizamos o primeiro dia útil após a data da compra**. No nosso caso, será o dia 24/10/2019 (pois estamos comprando o título em 23/10/2019).

Dessa forma teremos:

$$

du = 1.344

$$

**4. Cálculo da Cotação**

$$

Cotação = { 100  \over { \bigg(1 + \Large {0,02 \over 100}\bigg)^{1.344 \over 252} }} = 99,8934

$$


**5.Cálculo do PU**

$$

PU = {99,8933 \over 100} \times 10.380,493054 = 10.369,42

$$

Observe na figura 1 que esse é o preço pelo qual estão sendo vendidas as LFT com vencimento em 01/03/2025.


## Fluxo

O fluxo de um título é a representação da movimentação dos valores ao longo do tempo. No caso das LTN, o fluxo é representado pela Figura 2:

<div style="text-align:center" id="figura1">
<svg viewBox="0 0 313.9 144" class="svg-vertical-limit">
<style type="text/css">
	.st0td{font-family:'Arial';}
	.st1td{font-size:10px;}
	.st3td{display:inline;fill:none;stroke:#000000;stroke-miterlimit:10;}
</style>
<g id="Layer_1">
	<path d="M212.7,23.1l4.3,1.5c-1.9-2.2-3.7-5.7-4.8-8.5c-1.1,2.8-2.9,6.4-4.8,8.5l4.3-1.5v46.8H47.1v0.5h-0.5v47.4l-4.3-1.5
		c1.9,2.2,3.7,5.7,4.8,8.5c1.1-2.8,2.9-6.4,4.8-8.5l-4.3,1.5V70.9h164.6v-0.4h0.5V23.1z"/>
	<text id="XMLID_3_" transform="matrix(1 0 0 1 24.3364 61.2197)" class="st0td st1td">Data da Compra</text>
	<text id="XMLID_7_" transform="matrix(1 0 0 1 176.1962 84.8882)" class="st0td st1td">Data do Vencimento</text>
	<text id="XMLID_5_" transform="matrix(1 0 0 1 2.4907 91.8174)"><tspan x="0" y="0" class="st0td st1td">Valor</tspan><tspan x="0" y="9.6" class="st0td st1td">Invest.</tspan></text>
	<text id="XMLID_6_" transform="matrix(1 0 0 1 223.8926 42.7197)"><tspan x="0" y="0" class="st0td st1td">Valor de Resgate</tspan></text>
</g>
<g id="Layer_2">
	<path d="M42.9,124.5c-2.6,0-4-1.7-4-2.6c0-1.7,0.1-3.8,0.1-6c0.2-5.8,0.4-12.3-0.5-15.8c-0.2-0.9-2.4-1.8-3.8-2.2l-1.9-0.5l1.9-0.5
		c1.4-0.3,3.6-1.2,3.8-2.2c0.9-3.3,0.7-9.6,0.4-15c-0.1-2.1-0.2-4.2-0.2-5.8c0-1.2,0.3-2.3,3.4-3.1l0.2,1c-2.6,0.6-2.6,1.3-2.6,2.1
		c0,1.7,0.1,3.7,0.2,5.8c0.2,5.5,0.4,11.8-0.5,15.3c-0.3,1.1-1.8,1.9-3.1,2.4c1.2,0.5,2.7,1.3,3,2.4c0.9,3.6,0.7,10.2,0.5,16.1
		c-0.1,2.2-0.1,4.3-0.1,6c0,0.3,0.8,1.6,3,1.6V124.5z"/>
	<path d="M215.9,71.5v-1c2.2,0,3-1.3,3-1.6c0-1.7-0.1-3.8-0.1-6c-0.2-5.8-0.4-12.5,0.5-16.1c0.3-1.1,1.8-1.9,3-2.4
		c-1.2-0.5-2.8-1.3-3.1-2.4c-0.9-3.5-0.7-9.8-0.5-15.3c0.1-2.1,0.2-4.2,0.2-5.8c0-0.8,0-1.5-2.6-2.1l0.2-1c3.1,0.7,3.4,1.9,3.4,3.1
		c0,1.7-0.1,3.7-0.2,5.8c-0.2,5.5-0.4,11.7,0.4,15c0.2,0.9,2.5,1.8,3.8,2.2l1.9,0.5l-1.9,0.5c-1.4,0.4-3.6,1.3-3.8,2.2
		c-0.9,3.5-0.7,10-0.5,15.8c0.1,2.2,0.1,4.3,0.1,6C219.9,69.8,218.5,71.5,215.9,71.5z"/>
</g>
</svg>
</div>

<p class="legenda" style="text-align:center">Figura 2 - Fluxo de pagamento de uma Letra Financeira do Tesouro. Setas para baixo indicam dinheiro que saiu do bolso do investidor. Setas para cima indicam dinheiro que entrou no bolso do investidor.</p>

O que a figura 2 representa é que, na data da compra, o investidor terá um fluxo de saída de valores e só terá algum recebimento na data do vencimento do título, quando receberá o valor de face do título (R\$1.000,00) corrigidos pela variação da taxa SELIC no período e o ágio ou deságio (cotação), que equivalerá ao valor investido mais os juros.

## Valor Mínimo de Compra

O valor mínimo de investimento permitido no Tesouro Direto é o que for maior entre:

- R\$30,00; ou
- 0,01 título.

Deve-se considerar também que a fração mínima a ser comprada de um título é de 0,01 título.

Observe novamente a tabela de títulos disponíveis para venda em 23/10/2019:

<div class = "overflow responsiveTable" id="figura1">

|  Título            | Vencimento | Taxa de Rendimento (% a.a.) | Valor Mínimo | Preço Unitário |
|--------------------|------------|-----------------------------|--------------|----------------|
| Tesouro SELIC 2025 | 01/03/2025 | Selic + 0,02                | 103,69       | 10.369,42      |

</div>


<p class="legenda" style="text-align:center">Figura 3 - Tesouro SELIC disponíveis para venda em 23/10/2019.</p>

Considere o título com vencimento em 01/03/2025.

O valor equivalente a 0,01 título seria de R\$103,69, acima de R\$30,00 e, portanto, o valor mínimo a ser investido, conforme é mostrado na própria tabela.

## Riscos Específicos

Ao comprar um título pós-fixado, o investidor fica exposto ao risco de variação da taxa que remunera seu título, que **pode inclusive se tornar negativa**.

**Redução das Taxas**

A taxa SELIC é uma das ferramentas utilizadas pelo Banco Central em sua [política monetária](/aprenda/financas/economia/politica-monetaria). Quando o governo deseja estimular o crescimento econômico, ele estabelece metas mais baixas para a taxa SELIC.

Apesar de não ter ocorrido no Brasil, há o risco de que governos queiram forçar o crescimento através das manipulações das taxas básicas de juros, o que pode gerar até mesmo taxas negativas ([como ocorre na Europa](https://www.sunoresearch.com.br/noticias/paises-europa-juros-negativos/)).

**Aumento da Inflação**

Como a LFT não corrige seu valor pela inflação, caso ocorra alguma alteração econômica onde haja, por exemplo, aumento demasiado da taxa de inflação, o [rendimento real](/aprenda/financas/iniciantes/rendimento) do seu investimento será afetado, podendo, inclusive, ficar negativo.


## Estratégia de Investimento


Historicamente, as LFT não sofrem grandes variações de preço devido à marcação a mercado. O normal é que as taxas de ágio e deságio não ultrapassem 1,00%.

Somado a isso, como o preço do título é corrigido pela variação da taxa SELIC diariamente, o investidor de LFT não fica exposto à volatilidade que outros títulos públicos possuem em seus preços.

Dessa forma, ainda que venda seu título antes do vencimento, o investidor acabará tendo uma rentabilidade muito próxima da que esperava obter quando adquiriu o título.

Devido às suas características particulares as LFT são úteis para:

- Investidores que podem vir a utilizar o dinheiro antes do vencimento do título, tendo de fazer uma venda antecipada; e
- Investimentos para o curto e médio prazo.

<div class="referencias">

**Referências**:

<p id="1">BERGER, Paulo Lamosa. <strong>Mercado de Renda Fixa no Brasil: ênfase em títulos públicos</strong>. 1 ed. Rio de Janeiro. Interciência, 2015.</p>

<p id="2">Escola de Administração Fazendária - ESAF. <strong>Curso do Tesouro Direto</strong>. Disponível em <a href="http://www.tesouro.gov.br/-/curso-do-tesouro-direto">http://www.tesouro.gov.br/-/curso-do-tesouro-direto</a></p>

</div>
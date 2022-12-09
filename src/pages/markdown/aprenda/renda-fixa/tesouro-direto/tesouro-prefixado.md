---
title: "Letra do Tesouro Nacional (LTN) - Tesouro Prefixado"
date: "2019-10-21"
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

## O que são as Letras do Tesouro Nacional?

As Letras do Tesouro Nacional (LTN), também chamadas de Tesouro Prefixado, são títulos [prefixados](/aprenda/financas/iniciantes/rendimento) do governo federal disponíveis para negociação no Tesouro Direto.

## Rendimento

No vencimento do título, o governo paga R\$1.000,00 para cada LTN que o investidor possui.

**OBS**: No mercado financeiro, diz-se que o valor de face (ou valor nominal) de uma LTN é de R\$1.000,00. Ou seja, valor de face é o valor de resgate do título.

Dessa forma, o rendimento de uma LTN será dado pela diferença entre o preço de compra e os R\$1.000,00 a serem recebidos no seu vencimento.

Por exemplo

- Um investidor compra por R\$900,00 uma LTN com prazo de um ano até o vencimento;
- No vencimento ele receberá R\$1.000,00;
- Seu rendimento serão os R\$100,00 recebidos no período, o que equivale a uma taxa de 11,11% ao ano de rendimento.

## Como se calcula o preço de uma Letra do Tesouro Nacional?

No mercado de renda fixa os títulos são negociados levando-se em conta a sua taxa de rendimento e não o seu preço.

Na prática, o comportamento das taxas e preços se dará da seguinte maneira:

- Quanto maior for a procura por um título, **menor será sua taxa de rendimento e maior será o seu preço atual**; e
- Quanto menor for a procura por um título, **maior será sua taxa de rendimento e menor será o seu preço atual**.

Se quiser se apronfundar mais a respeito, leia o artigo sobre a [marcação a mercado](/aprenda/renda-fixa/generalidades/preco-de-ativo-de-renda-fixa).

No caso das LTN, conhecida a taxa de rendimento, o preço atual será dado pela resposta à seguinte pergunta:



***"Qual o valor que aplicado hoje rendendo a taxa acordada resultará em R\$1.000,00 na data do vencimento do título?"***

### Preço Unitário

Ao preço presente de um título de renda fixa é dado o nome de **preço unitário (PU)**.

A fórmula para o cálculo do PU de uma Letra do Tesouro Nacional é a seguinte:

$$

PU = { 1.000  \over { \bigg(1 + \Large {taxa \over 100}\bigg)^{du \over 252} }}

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do PU de uma LTN.</p>

Onde:


- **taxa** = taxa de juros que remunera o título; e
- **du** = dias úteis até o vencimento do título.



**OBS**: Para fins oficiais, o cálculo do PU é feito com oito casas decimais (pois este é o parâmetro exigido para registro do preço do título no SELIC).

### Exemplo

Olhando o [*site*](http://www.tesouro.gov.br/tesouro-direto-precos-e-taxas-dos-titulos) do Tesouro Direto em 22/10/2019, encontramos os seguintes valores para negociação das LTN:

<div class = "overflow responsiveTable" id="figura1">

|  Título                | Vencimento | Taxa de Rendimento (% a.a.) | Valor Mínimo | Preço Unitário |
|------------------------|------------|-----------------------------|--------------|----------------|
| Tesouro Prefixado 2022 | 01/01/2022 | 4,99                        | 35,96        | 899,17         |
| Tesouro Prefixado 2025 | 01/01/2025 | 6,19                        | 36,64        | 732,87         |

</div>

<p class="legenda" style="text-align:center">Figura 1 - Tesouro Prefixado disponíveis para venda em 22/10/2019.</p>



Vamos calcular o preço da LTN com vencimento em 01/01/2022, cuja taxa de rendimento é de 4,99% ao ano.

**1. Cálculo dos dias úteis**

Em cálculos que envolvem títulos de renda fixa, o mercado conveciona utilizar 252 dias úteis como sendo o período de um ano.

Para calcular os dias úteis pode-se utilizar o EXCEL, utilizando-se uma planilha que contenha os feriados (disponível no *site* da [ANBIMA](https://www.anbima.com.br/feriados/feriados.asp))  e a fórmula *DIATRABALHOTOTAL*.

O cálculo a ser feito envolve o período entre a **data de liquidação da compra** e o **dia do vencimento do título**.

Para **a data de liquidação da compra, utilizamos o primeiro dia útil após a data da compra**. No nosso caso, será o dia 23/10/2019 (pois estamos comprando o título em 22/10/2019).

Dessa forma teremos:

$$

du = 550

$$

**2. Cálculo do PU**

Agora basta inserir os dados na fórmula do PU:

$$

PU = { 1.000  \over { \bigg(1 + \Large {4,99 \over 100}\bigg)^{550 \over 252} }} = 899,17410453

$$


## Fluxo

O fluxo de um título é a representação da movimentação dos valores ao longo do tempo. No caso das LTN, o fluxo é representado pela Figura 2:

<div style="text-align:center" id="figura2">
<svg viewBox="0 0 313.9 144">
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
	<text id="XMLID_6_" transform="matrix(1 0 0 1 226 42)"><tspan x="0" y="0" class="st0td st1td">R$1.000,00</tspan></text>
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


<p class="legenda" style="text-align:center">Figura 2 - Fluxo de pagamento de uma Letra do Tesouro Nacional. Setas para baixo indicam dinheiro que saiu do bolso do investidor. Setas para cima indicam dinheiro que entrou no bolso do investidor.</p>

O que a figura 2 representa é que, na data da compra, o investidor terá um fluxo de saída de valores e só terá algum recebimento na data do vencimento do título, quando receberá o valor de face do título (R\$1.000,00), que equivalerá ao valor investido mais os juros.

## Valor Mínimo de Compra

O valor mínimo de investimento permitido no Tesouro Direto é o que for maior entre:

- R\$30,00; ou
- 0,01 título.

Deve-se considerar também que a fração mínima a ser comprada de um título é de 0,01 título.

Observe novamente a tabela de títulos disponíveis para venda em 22/10/2019:

<div class = "overflow responsiveTable" id="figura3">

|  Título                | Vencimento | Taxa de Rendimento (% a.a.) | Valor Mínimo | Preço Unitário |
|------------------------|------------|-----------------------------|--------------|----------------|
| Tesouro Prefixado 2022 | 01/01/2022 | 4,99                        | 35,96        | 899,17         |
| Tesouro Prefixado 2025 | 01/01/2025 | 6,19                        | 36,64        | 732,87         |

</div>

<p class="legenda" style="text-align:center">Figura 3 - Tesouro Prefixado disponíveis para venda em 22/10/2019.</p>

Considere o título com vencimento em 01/01/2022.

O valor equivalente a 0,01 título seria de R\$8,99, abaixo de R\$30,00. Logo, não é possível comprar apenas 0,01 título.

O valor equivalente a 0,02 título seria de R\$17,98, também abaixo dos R\$30,00.

Para cumprir os requisitos de no mínimo R\$30,00 e frações de 0,01 título, será preciso comprar pelo menos 0,04 títulos ao valor de R\$35,96, conforme é mostrado na tabela de títulos à venda.

## Riscos Específicos

Ao comprar um título prefixado, o investidor fica com seu rendimento travado até o vencimento do título.

**Aumento da Inflação**

Caso ocorra alguma alteração econômica onde haja, por exemplo, aumento da taxa de inflação, o [rendimento real](/aprenda/financas/iniciantes/rendimento) do seu investimento será afetado, podendo, inclusive, ficar negativo.

**Marcação a Mercado**

Como discutido, mudanças nas taxas de juros que remuneram as LTN causam mudanças no preço do título.

Caso o investidor deseje vender seu título antes do vencimento, terá de fazê-lo pelo PU atual que **pode estar abaixo do seu preço de compra**.

Isso ocorrerá em um cenário onde as taxas de juros se reduziram entre o período da compra do título e a data da venda antecipada.

## Estratégia de Investimento

Devido às suas características particulares as LTN são úteis para:

- Investidores que desejam ter uma taxa de rendimento conhecida no momento da compra do título; e
- Investidores que carregarão o título até o seu vencimento.

<div class="referencias">

**Referências**:

<p id="1">BERGER, Paulo Lamosa. <strong>Mercado de Renda Fixa no Brasil: ênfase em títulos públicos</strong>. 1 ed. Rio de Janeiro. Interciência, 2015.</p>

<p id="2">Escola de Administração Fazendária - ESAF. <strong>Curso do Tesouro Direto</strong>. Disponível em <a href="http://www.tesouro.gov.br/-/curso-do-tesouro-direto">http://www.tesouro.gov.br/-/curso-do-tesouro-direto</a></p>

</div>
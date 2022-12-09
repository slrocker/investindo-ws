---
title: "Duration"
date: "2019-12-05"
section: "Enciclopédia"
sectionSlug: "enciclopedia"
category: "Termos"
categorySlug: "termos"
subcategory: "D"
subcategorySlug: "d"
featuredImage: "enciclopedia-featured"
pageType: "page"
order: 0
---

## O que é *duration*?

*Duration* é um termo inglês que indica a sensibilidade de um título de renda fixa à variação da taxa de juros.

Investimentos de renda fixa possuem dois riscos principais:

- **Risco de Crédito**: risco de que o devedor não honre o pagamento; e
- **Risco dos Juros**: risco de variação nas taxas de juros que modifique o preço do título ou torne o rendimento real negativo.

O *duration* analisa o risco representado pela variação dos juros.

Há algumas maneiras distintas de se analisar o *duration*. Neste artigo falaremos sobre duas delas:

- *Duration* de Macaulay; e
- *Duration* modificado.

## Valor Presente

Tìtulos de renda fixa sofrem variações em [seu preço](/aprenda/renda-fixa/generalidades/preco-de-ativo-de-renda-fixa) de maneira inversamente proporcional à taxa de juros:

- **Juros sobem**: preço dos titulos cai; e
- **Juros caem**: preço dos títulos sobe.

Isso ocorre porque o preço de um ativo de renda fixa é dado pelo valor presente do seu fluxo de pagamentos (fórmula 1). 

A variação nos preços será maior quanto maior for o prazo para o pagamento .

$$

VP = {Vf \over (1 + t)^n}

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do valor presente de um pagamento futuro.</p>

Onde:

- **Vf**: valor do pagamento em data futura;
- **t**: taxa de juros que remunera o título; e
- **n**: período entre a data de hoje e a data de pagamento.





## *Duration* de Macaulay

O *Duration* de Macaulay (MacD) é um indicador criado pelo economista canadense [Frederick Macaulay](https://en.wikipedia.org/wiki/Frederick_Macaulay).

Este indicador calcula uma **média ponderada do período de pagamentos de um título de renda fixa** considerando o fluxo dos valores a serem pagos e o período para o seu pagamento.

O resultado será um número de períodos. Se o cálculo foi feito considerando semestres, o resultado será em semestres. Se o cálculo foi feito em anos, o resultado será em anos etc.

Em títulos prefixados que pagam cupons (tal como a [NTN-F](/aprenda/renda-fixa/tesouro-direto/tesouro-prefixado-com-juros-semestrais)) parte do pagamento do título será feito antes do vencimento, através dos cupons e parte será feito no dia do vencimento, quando é pago o valor de face do título mais o último cupom.

Para tentar entender como uma variação na taxa de juros pode influenciar o preço desses títulos seria preciso analisar seu efeito para cada pagamento de cupom além do pagamento final.

O *duration* de Macaulay simplifica esse processo obtendo um valor médio (uma média aritmética ponderada pelos prazos) para o prazo de todos os pagamentos que o título realizará.

Ou seja, pagamentos com prazos mais longos terão mais peso na média (justamente, porque, conforme é possível visualizar na fórmula 1, quanto mais longe o pagamento, mais uma variação na taxa de juros afetará o valor presente), enquanto pagamentos com prazos mais curtos terão menos peso.

Dessa forma, o *duration* de Macaulay sempre será:

- Maior ou igual a zero; e
- Menor do que o prazo de vencimento do título (quando houver o pagamento de cupons).

Uma representação gráfica do *duration* de Macaulay pode ser vista na figura 1.

O indicador é uma espécie de ponto médio que equilibra os fluxos de pagamento. Caso os pagamentos mais próximos sejam de valor mais elevados, o *duration* será menor e vice-versa.

<div style="text-align:center">
<svg  viewBox="0 0 250 150">
<style type="text/css">
	.st0modDmacd{fill:#FFFFFF;}
	.st1modDmacd{font-family:'Arial';}
	.st2modDmacd{font-size:10px;}
</style>
<rect x="9" y="81.9" width="205.9" height="1"/>
<circle cx="212.8" cy="48.7" r="28.2"/>
<g>
	<circle cx="68" cy="66" r="12.1"/>
	<text transform="matrix(1 0 0 1 58.3459 69.5023)" class="st0modDmacd st1modDmacd st2modDmacd">VP1</text>
</g>
<g>
	<circle cx="132.4" cy="66" r="12.1"/>
	<text transform="matrix(1 0 0 1 122.7555 69.5023)" class="st0modDmacd st1modDmacd st2modDmacd">VP2</text>
</g>
<text transform="matrix(1 0 0 1 204.1561 51.137)" class="st0modDmacd st1modDmacd st2modDmacd">VP3</text>
<text transform="matrix(1 0 0 1 58.3459 101.739)" class="st1modDmacd st2modDmacd">T=1</text>
<text transform="matrix(1 0 0 1 122.7553 101.7389)" class="st1modDmacd st2modDmacd">T=2</text>
<text transform="matrix(1 0 0 1 202.8517 101.7387)" class="st1modDmacd st2modDmacd">T=3</text>
<polyline points="150.7,129.5 173.6,83.9 196.4,129.4 "/>
<text transform="matrix(1 0 0 1 159.627 122.559)" class="st0modDmacd st1modDmacd st2modDmacd">MacD</text>
</svg>
</div>

<p class="legenda" style="text-align:center">Figura 1 - Representação gráfica do MacD. VP: valor presente; T: período do pagamento.</p>



Assim, um título que não paga cupons terá o *duration* igual ao prazo de vencimento, enquanto títulos que pagam cupons terão *duration* menores do que o prazo de vencimento.


### Cálculo do *Duration* de Macaulay

O cálculo do *duration* de Macaulay funciona da seguinte maneira (fórmula 2):

- Descobre-se o valor presente de cada pagamento considerando a taxa de juros praticada no momento;
- Multiplica-se esse valor pelo período de pagamento;
- Divide-se o resultado pelo valor presente dos pagamentos (que o é o preço pelo qual o título está sendo negociado) ;e
- Soma-se o total obtido.


$$

MacD = { \displaystyle\sum_{t=1}^n \Bigg ( ti \times {VPi \over V} \Bigg) }

$$

<p class="legenda" style="text-align:center">Fórmula 2 - Cálculo do <em>duration</em> de Macaulay (MacD).</p>

Onde:

- **ti**: tempo em períodos até o pagamento i;
- **VPi**: valor presente do pagamento i; e
- **V**: valor presente de todos os fluxos de pagamento (preço do título).



### Exemplo *Duration* de Macaulay

Considere um título que vencerá em 5 anos e que pague cupons anuais com taxa de 4,00% ao ano, sendo seu [valor de face](/enciclopedia/termos/v/valor-de-face) de R\$1.000,00.

Considerando que a taxa de juros a que o título negocia atualmente seja de 4,50%, vamos calcular o MacD.

O fluxo de caixa esperado desse título é:

|Período (ti)|Pgto (R\$)|
|-------|-----|
|1|40,00|
|2|40,00|
|3|40,00|
|4|40,00|
|5|1040,00|


<p class="legenda" style="text-align:center">Figura 2 - Exemplo de fluxo de pagamento de título de renda fixa com cupons semestrais.</p>

Em seguida, é preciso calcular o valor presente (VP) de cada pagamento. Por exemplo, para o pagamento do primeiro cupom teremos:

$$

VP = {40 \over {(1+0,045)^1}} = 38,28

$$

<p class="legenda" style="text-align:center">Fórmula 2 - Cálculo do VP do primeiro cupom.</p>

O próximo passo é ponderar o valor pelo tempo:

$$

ti \times VPi = {1 \times 38,28} = 38,28

$$

Em seguida, repetimos o processo para todos os pagamentos chegando à tabela da figura 2:

|Período (ti)|Pgto (R\$)|VPi(R\$)|Ti x VPi|
|-------|-----|---------|---------|
|1|40,00|38,28|38,28|
|2|40,00|36,63|73,26|
|3|40,00|35,05|105,16|
|4|40,00|33,54|134,17|
|5|1040,00|834,55|4.172,75|
|**Total**||**978,05**|**4.523,61**|

<p class="legenda" style="text-align:center">Figura 3 - Valor presente dos fluxos ponderados pelo tempo até o pagamento.</p>

A partir daí, basta dividir o total dos valores presentes ponderados (Ti x VPi) pelo total dos valores presentes (VPi):

$$

MacD = {4.523,61 \over 978,05} = 4,63

$$

Concluímos, então, que este titulo possui um MacD de 4,63 anos.

### Análise

O Macd pode ser utilizado para comparar dois títulos.

Por exemplo, considere um título A cujo MacD seja de 4,63 anos e um título B cujo Macd seja de 5,00 anos.

Por possuir um Macd maior, o título B possui mais sensibilidade à variações na taxa de juros quando comparado ao título A.

## *Duration* Modificado

Esse indicador reflete a relação entre o preço de um título e a taxa de juros que o remunera.

Assim, supondo um título com *duration* modificado (ModD) de 4,50, teremos que, para cada 1,00% de variação na taxa de juros, o preço do título irá variar em 4,50%.

O ModD pode ser entendido como a derivada da curva preço-taxa (figura 4):

<div style="text-align:center">
<svg  viewBox="0 0 250 150" >
<style type="text/css">
	.st0modD{fill:#FFFFFF;stroke:#000000;stroke-width:0.7572;stroke-miterlimit:10;}
	.st1modD{font-family:'Arial';}
	.st2modD{font-size:10px;}
	.st3modD{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
	.st4modD{fill:none;stroke:#000000;stroke-miterlimit:10;}
</style>
<polyline class="st0modD" points="199.9,118.3 69.1,118.3 69.1,18.3 "/>
<text transform="matrix(0 -1 1 0 57.8226 101.4614)" class="st1modD st2modD">Preço do Título</text>
<text transform="matrix(1 0 0 1 149.4388 131.6943)" class="st1modD st2modD">Taxa</text>
<path class="st3modD" d="M174.5,108.6c-53.2,0-84.7-33.8-86.3-75.8"/>
<line class="st4modD" x1="81" y1="50.3" x2="125" y2="108.6"/>
</svg>
</div>

<p class="legenda" style="text-align:center">Figura 4 - Representação gráfica do ModD.</p>


Dessa forma, quanto maior o ModD, maior o risco relativo à variação na taxa do título. 

### Cálculo do *Duration* Modificado

A forma mais simples de calcular  o ModD é utilizando o MacD, através da fórmula 3:

$$

ModD = { MacD \over  {1 + {\Large Yk \over k}}}

$$

<p class="legenda" style="text-align:center">Fórmula 3 - Cálculo do <em>duration</em> modificado.</p>

Onde:

- **MacD**: *duration* de Macaulay do título;
- **Yk**: Rendimento até o vencimento; e
- **k**: período de apuração do rendimento.

Por exemplo, para um título que paga juros equivalentes de 6,00% ao ano, Yk será 6,00% e k será 1.

Já para um título que cuja apuração do rendimento fosse semestral a uma taxa equivalente de 6,00% ao ano, Yk serial igual a 6,00% e k seria igual a 2.


### Exemplo *Duration* Modificado


Vamos calcular o ModD para o título cujo MacD calculamos anteriormente, considerando a taxa de rendimento atual do título como sendo 4,50%.

$$

ModD = {4,63 \over {1 + {\Large 0,045 \over 1} }} = 4,43

$$

<p class="legenda" style="text-align:center">Fórmula 4 - Exemplo de cálculo do <em>duration</em> modificado.</p>

Para descobrir a relação entre o preço do ativo e variações na taxa de juros, utiliza-se a fórmula 5:

$$

Variação \% = -1 \times ModD \times Variação\,na\,taxa

$$


<p class="legenda" style="text-align:center">Fórmula 5 - Cálculo da variação no preço utiliando o ModD.</p>

Assim, digamos que a taxa do título subiu em 100 [pontos base](/enciclopedia/termos/p/pontos-base), chegano a 5,60%. Teremos então:

$$

Variação \% = -1 \times 4,43 \times 0,01 = 4,43\%

$$

O que esse resultado nos diz é que, para cada variação de 1,00% na taxa, o preço do título sofrerá uma variação inversa de 4,43%.

## Prazo Médio Ponderado e *Duration*

No Brasil, uma determinação do Conselho Monetário Nacional define a fórmula oficial para o cálculco do prazo médio ponderado (PMP) — fórmula 6:


$$

PMP = { \displaystyle\sum_{t=1}^n \Bigg ( ti \times {PVi \over V} \Bigg) \times {1 \over 252} }

$$

<p class="legenda" style="text-align:center">Fórmula 6 - Cálculo do prazo médio ponderado.</p>

Onde:

- **ti**: tempo em dias úteis até o pagamento i;
- **VPi**: valor presente do pagamento i; e
- **V**: valor presente de todos os fluxos de pagamento (preço do título).


Observe que a fórmula 6 é basicamente a mesma fórmula do *duration* de Macaulay (fórmula 2), porém considerando os períodos dos fluxos em dias úteis.

Utilizando a fórmula do PMP, podemos calcular o prazo médio para qualquer frequência de pagamentos, mesmo aqueles que não sejam periódicos.

### Carteira de Investimentos

Através da fórmula do PMP pode-se, também, calcular o prazo médio de uma carteira de títulos, utilizando a participação do título na carteira como um fator de ponderação (Figura 5):

|Título|Peso na Carteira|PMP|Peso x PMP|
|------|----------------|---|----------|
|1      |10,00%         |1,85| 0,185|
|2      |25,00%         |2,00| 0,5|
|3      |65,00%         |3,30| 2,145|
|       |**PMP da Carteira**|      | **2,83**|



<p class="legenda" style="text-align:center">Figura 5 - Cálculo do prazo médio ponderado de uma carteira de títulos.</p>

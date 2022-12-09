---
title: "Cálculo do Preço de um Ativo de Renda Fixa"
date: "2019-11-01"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Renda Fixa"
categorySlug: "renda-fixa"
subcategory: "Generalidades"
subcategorySlug: "generalidades"
order: 2
featuredImage: "renda-fixa"
pageType: "page"
showIndex: "false"
---

Quando raciocinamos com ativos de renda fixa, é comum que consideremos o processo do presente para o futuro, isto é:

<div class="citacao">

"Investindo R\$100,00 agora a uma taxa de 10,00% ao ano, eu receberei R\$110,00 daqui a um ano".

</div>

No entanto, em boa parte dos títulos de renda fixa, o raciocínio para cálculo do preço se inverte.

Em um título de renda fixa é comum que haja:

- Uma data de vencimento;
- Um valor de face (ou valor nominal) que é o preço do título no seu vencimento; e
- Uma taxa de rendimento.

Assim, suponha que a INVESTINDO S.A. emita um título de dívida cujo valor de face é de R\$1.000,00 e a data de vencimento em 31/12/20XX.

Isso significa que esse título pagará R\$1.000,00 ao seu portador no dia 31/12/20XX.

Suponha agora que esse título, no momento da sua emissão, pague uma taxa de 10,00% ao ano.

Para descobrir qual o preço do título na data da emissão, será preciso descobrir o **valor presente** do valor de face do título considerando a taxa de rendimento.

Em outras palavras, o preço do título em uma data qualquer antes do vencimento será a resposta para a seguinte pergunta:


***"Qual o valor que rendendo a taxa de juros contratada, de hoje até a data de vencimento do título, resultará em R\$1.000,00?"***



Por exemplo: digamos que o título da INVESTINDO S.A. irá vencer em um prazo de um ano e promete pagar 10,00% ao ano de juros.

Para saber qual o preço do título no dia de hoje precisamos saber qual o valor que rendendo 10,00% ao ano resultará em R\$1.000,00 daqui a um ano.

## Preço Unitário

Ao preço de um título de renda fixa para uma data qualquer é dado o nome de **preço unitário (PU)**.

A fórmula para fazer esse cálculo é a seguinte:

$$

PU = {Valor\,de\,face \over \Bigg ( 1+ \large {taxa \over 100}  \Bigg )^ {\Large du \over 252}}

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do PU de um título de renda fixa.</p>

Onde:

- **PU**: preço unitário do título no dia do cálculo;
- **Valor de Face**: valor do título no seu vencimento;
- **Taxa**: taxa de juros (ou rendimento) do título; e
- **du**: dias úteis entre a data do cálculo e data de vencimento do título.

**OBS: O mercado financeiro utiliza como padrão 252 dias úteis em um ano.**

Utilizando a fórmula do PU, podemos calcular qual será o preço do título da INVESTINDO S.A. um ano antes do seu vencimento:

$$

PU = {1.000 \over \Bigg ( 1+ \large {10 \over 100}  \Bigg )^ {\Large 252 \over 252}} = 909,0909...

$$



Ou seja, R\$909,0909 aplicados a uma taxa de 10,00% ao ano resultarão em R\$1.000,00 após o período de um ano.

## Curva de Rendimento

Utilizando a fórmula do PU, é possível calcular qual seria o preço do título da INVESTINDO S.A. em qualquer dia entre a data de compra e o vencimento do título, bastando alterar os dias úteis. Por exemplo:

- Decorridos 6 meses da compra (126 dias úteis), o PU seria igual a: R\$953,47
- Faltando 21 dias úteis (um mês) para o vencimento, o PU seria igual a: R\$992,16

Calculando o PU para cada dia até o vencimento, obtemos o gráfico da **curva de preço** do título durante seu "período de vida":

<div style="text-align:center">

<svg  viewBox="0 0 250 150">
<style type="text/css">
	.st0purf{fill:#FFFFFF;stroke:#000000;stroke-width:0.7572;stroke-miterlimit:10;}
	.st1purf{font-family:'Arial';}
	.st2purf{font-size:10px;}
	.st4purf{font-size:8px;}
</style>
<line class="st0purf" x1="46.2" y1="109.4" x2="46.2" y2="9.4"/>
<text transform="matrix(0 -1 1 0 17.6369 92.561)" class="st1purf st2purf">Preço Unitário</text>
<text transform="matrix(1 0 0 1 81.2805 140.4341)" class="st1purf st2purf">DU (dias úteis) para o vencimento</text>
<text transform="matrix(1 0 0 1 43.8433 123.2297)" class="st1purf st4purf">252</text>
<text transform="matrix(1 0 0 1 107.4907 123.229)" class="st1purf st4purf">168</text>
<text transform="matrix(1 0 0 1 172.9621 123.2294)" class="st1purf st4purf">84</text>
<text transform="matrix(1 0 0 1 238.4338 123.2296)" class="st1purf st4purf">0</text>
<line class="st0purf" x1="46.2" y1="109.4" x2="240.8" y2="108.4"/>
<text transform="matrix(1 0 0 1 26.8012 13.0603)" class="st1purf st4purf">1000</text>
<text transform="matrix(1 0 0 1 30.9053 111.4699)" class="st1purf st4purf">900</text>
<rect x="35.6" y="54.5" transform="matrix(0.9014 -0.4331 0.4331 0.9014 -10.135 67.576)" width="215.3" height="3"/>
</svg>
</div>

<p class="legenda" style="text-align:center">Figura 1 - Gráfico da curva de preço de um título de renda fixa.</p>

## Taxas e Preços

Observe a fórmula 1 acima e repare que, **considerando o mesmo período de dias úteis**:

- Quanto maior a taxa, menor será o PU do título; e
- Quanto menor a taxa, maior será o PU do título.

Por exemplo, suponha que ao invés de pagar 10,00% ao ano, o título da INVESTINDO S.A. pagasse 15,00% ao ano. O PU seria:

$$

PU = {1.000 \over \Bigg ( 1+ \large {15 \over 100}  \Bigg )^ {\Large 252 \over 252}} = 869,56...

$$

Da mesma forma, se o rendimento oferecido fosse de 5,00% ao ano, o PU seria:

$$

PU = {1.000 \over \Bigg ( 1+ \large {5 \over 100}  \Bigg )^ {\Large 252 \over 252}} = 952,38...

$$

Temos então:

|Taxa de Rendimento|Dias úteis|PU|
|------------------|----------|--|
|5,00% a.a.|252|952,38|
|10,00% a.a.|252|909,09|
|15,00% a.a.|252|869,56|

<p class="legenda" style="text-align:center">Figura 2 - Relação entre PU e taxa de rendimento.</p>

Conforme esperado, com a taxa de rendimento aumentando, o PU diminui e vice-versa.




## Mercado Secundário

É comum que títulos de renda fixa sejam negociados em mercados secundários, isto é, um mercado onde investidores compram e vendem títulos de outros investidores.

No mercado secundário, o preço dos títulos obedecerá às leis de oferta e demanda:

- Quanto mais compradores, mais caro os títulos serão vendidos; e
- Quanto menos compradores, mais baratos os títulos serão vendidos.

Acontece que quando você está negociando um título, é muito mais fácil raciocinar com a taxa de rendimento do que com o preço do mesmo.

Por exemplo, digamos que você quisesse comprar um título da INVESTINDO S.A. e alguém lhe oferecesse vendê-lo por R\$950,00.

Para conhecer a taxa de rendimento seria preciso utilizar a fórmula do PU e isolar o parâmetro *taxa* para o número de dias úteis considerado.

Para facilitar, o mercado costuma precificar os títulos **utilizando a taxa de rendimento**.

No entanto, **sabemos que a taxa de rendimento e o PU dos títulos tem uma relação inversa**, isto é:

- Taxas sobem, PU cai; e
- Taxas caem, PU sobe.

Logo:

- Em um mercado com muita demanda (muitos compradores) ou pouca oferta (poucos vendedores), os preços (PU) subirão e as taxas dos títulos se reduzirá; e
- Em um mercado com pouca demanda(poucos compradores) ou muita oferta (muitos vendedores), os preços (PU) cairão e as taxas dos títulos aumentará.

**Ou seja, o preço do título no mercado secundário pode ser diferente do preço da curva de rendimento que o investidor possui**.

### Exemplo

Considere o título da INVESTINDO S.A. com prazo de 252 dias úteis e rendimento de 10,00% que você comprou no exemplo anterior.

Suponha que, decorrido 126 dias úteis, você resolva vender o título no mercado secundário.

Como calculamos anteriormente, o PU do seu título **na curva** faltando 126 dias úteis para o vencimento seria de R\$953,47.

No entanto, você vê que no mercado secundário os títulos estão sendo negociados a uma taxa de rendimento de 11,00% ao ano.

Considerando essa taxa de rendimento e os 126 dias úteis restantes para o vencimento do título teríamos um PU de:

$$

PU = {1.000 \over \Bigg ( 1+ \large {11 \over 100}  \Bigg )^ {\Large 126 \over 252}} = 949,2168...

$$

Ou seja, você teria de vender seu título por um preço menor do que o PU teórico esperado. Em outras palavras, você acabaria tendo um rendimento menor do que 10,00% ao ano caso fizesse essa venda.

Suponha que você fizesse a venda, seu lucro para o período de 126 dias úteis em que manteve o título seria de:

$$

Lucro = 949,21 - 909,09 = 40,12

$$

O seu rendimento foi de:

$$

Rendimento = {40,12 \over 909,09} = 0,044 = 4,4\%

$$

Como esse valor é o rendimento para um período de 126 dias úteis, precisamos transformá-lo em uma taxa anual:

$$

taxa = {[(1 + 4,4) ^ { 252 \over 126} - 1] \times 100} = 8,99\%

$$

Observe como você acabou tendo um rendimento menor do que os 10,00% ao ano devido a queda dos preços no mercado secundário.

## Marcação

Há situações (por exemplo na divulgação de balanços ou no preço das cotas de fundos de investimento) em que é preciso saber qual o preço de um título de renda fixa em uma data qualquer entre a compra e a data de vencimento do título.

Ao processo de determinar o preço do título é dado o nome de **marcação**.

Há duas possibilidades para se fazer a marcação:

- **Marcação na Curva**: utiliza-se o preço da curva de rendimento contratado do título; e
- **Marcação a Mercado**: utiliza-se o preço do título no mercado secundário.

### Marcação na Curva

Como vimos anteriormente, uma vez conhecido o valor de face do título e a taxa de rendimento é possível calcular o PU do título para qualquer data entre o dia da compra e o dia do vencimento do título.

Se fizermos esse cálculo para todos os dias entre a data da compra e a data do vencimento, obtemos um gráfico chamado de **curva de rendimento** (figura 1).

Quando alguém precifica um título utilizando-se a taxa de rendimento contratada na compra do título, diz-se que está **marcando o título na curva**.

### Marcação a Mercado

Considere um Fundo de Investimento que precisa divulgar o valor das suas cotas diariamente.

Para fazer isso, ele calcula o valor total do seu patrimônio e divide pelo número total de cotas.

Suponha que esse fundo **marque seus títulos de renda fixa na curva**, isto é, utilizando-se a taxa de rendimento contratada na compra do título.

Considere, no entanto, que o preço desses títulos no mercado secundário tenha se reduzido drasticamente em virtude de uma alta no juros.

Temos aí uma situação irreal onde o Fundo diz que sua cota vale X, quando, na verdade, se ele precisar vender seus ativos, acabará recebendo um valor menor do que X.

Essa diferença pode acabar beneficiando ou prejudicando os cotistas de alguma maneira.

Por isso, existe a **marcação a mercado**, onde os ativos **são precificados de acordo com os preços praticados no mercado**.

Assim, para precificar seus ativos, o Fundo consideraria os preços dos títulos sendo negociados no mercado secundário e calcularia seu patrimônio de acordo com esses valores.

**Dessa forma, quando dizemos que um ativo é marcado a mercado, queremos dizer que seu resgate será feito pelo preço praticado no mercado naquele momento e não no preço teórico baseado na taxa de rendimento contratada.**

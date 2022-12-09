---
title: "Estrutura a Termo de Taxa de Juros"
date: "2019-12-09"
section: "Enciclopédia"
sectionSlug: "enciclopedia"
category: "Termos"
categorySlug: "termos"
subcategory: "E"
subcategorySlug: "e"
featuredImage: "enciclopedia-featured"
pageType: "page"
order: 0
---

## O que é a estrutura a termo de taxa de juros?

A Estrutura a Termo de Taxa de Juros (ETTJ) é uma maneira de se tentar obter valores de taxas de juros para um período cuja taxa é desconhecida mas se encontra entre dois períodos com taxas conhecidas (chamados de vértices).

Por exemplo, em uma situação onde você conheça a taxa de juros para um título com vencimento em três anos e um título com vencimento em cinco anos, como saber qual será a taxa para um título com vencimento em quatro anos?

<table style="width: 60%; margin: 40px auto 40px;">
<thead>
<tr>
<td style="text-align:center;">Vencimento</td>
<td style="text-align:center;">Taxa</td>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center;">3 anos</td>
<td style="text-align:center;">10,00%</td>
</tr>
<tr>
<td style="text-align:center;">4 anos</td>
<td style="text-align:center;">?</td>
</tr>
<tr>
<td style="text-align:center;">5 anos</td>
<td style="text-align:center;">11,20%</td>
</tr>
</tbody>
</table>

<p class="legenda" style="text-align:center;">Como saber a taxa para o título com vencimento em 4 anos?</p>

A lógica por trás da teoria da ETTJ nos diz que a taxa de juros para o título de quatro anos está ímplicita nas outras duas taxas e que, a partir de uma fórmula matemática que envolve os valores conhecidos, podemos chegar a ela.

## Cálculo da ETTJ

A ETTJ é determinada através de um estudo estatístico de regressão.

O cálculo pode ser feito através do Excel. Para isso:

1. Encontre os vértices (em dias úteis); 
2. Encontre a taxa para cada vértice;
3. Plote os valores em um gráfico de dispersão (DU x Taxa);
4. Retire valores que fogem da curva através de uma avaliação visual do gráfico do passo 3;
5. Gere a linha de tendência: clique com o botão direito sobre o gráfico > adicionar linha de tendência > selecione regressão polinomial de ordem 4.
6. Após clicar em OK, o Excel calculará a linha de tendência e a plotará no gráfico.

## Análise da ETTJ

Um uso comum da ETTJ é a obtenção da curva dos juros pagos pelos títulos públicos federais.

Ao se plotar em um gráfico a ETTJ desses títulos, obtêm-se uma curva que pode ser indicativa de algumas tendências econômicas.

### Curva Positiva

Em situações normais, espera-se que títulos cujo vencimento se dê em prazos mais longos, paguem juros (rendimentos) maiores do que aqueles cujo vencimento seja mais próximo.

Quanto mais tempo o investidor fica sem o seu dinheiro, mais exposto aos riscos e eventos imprevisíveis ele estará, portanto, é natural que ele exija um prêmio maior.

Por isso, ao plotarmos uma ETTJ, o normal é que ela tenha um curva ascendente, com os títulos de vencimento mais próximo oferecendo taxas menores do que aqueles de vencimento mais longo (Figura 1).

<div style="text-align:center">

<svg class="svg-vertical-limit" enable-background="new 0 0 250 150" version="1.1" viewBox="0 0 250 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">
	.stwhite{fill:#FFFFFF;}
	.st1{font-family:'MyriadPro-Regular';}
	.st2{font-size:10px;}
	.st3{font-size:8px;}
</style>
	<rect class="stwhite" x="46.2" y="9.4" width="194.1" height="100"/>
	<path d="M240.7,109.8H45.8V9h194.8V109.8z M46.6,109h193.3V9.8H46.6V109z"/>
<text class="st1 st2" transform="matrix(6.1232e-17 -1 1 6.1232e-17 17.637 92.561)">Taxa (% ao ano)</text>
<text class="st1 st2" transform="translate(110.41 140.43)">DU (dias úteis)</text>
<text class="st1 st3" transform="translate(43.843 122.07)">0</text>
<text class="st1 st3" transform="translate(102.19 122.07)">100</text>
<text class="st1 st3" transform="translate(166.7 123.23)">200</text>
<text class="st1 st3" transform="translate(231.2 122.07)">400</text>
	<line class="stwhite" x1="46.2" x2="240.8" y1="85.5" y2="84.5"/>
	<rect transform="matrix(1 -.0051546 .0051546 1 -.4361 .7408)" x="46.2" y="84.6" width="194.5" height=".8"/>
	<line class="stwhite" x1="46.2" x2="240.3" y1="59.5" y2="59.5"/>
	<rect x="46.2" y="59.1" width="194.1" height=".8"/>
	<line class="stwhite" x1="46.2" x2="240.8" y1="34.5" y2="34.5"/>
	<rect x="46.2" y="34.2" width="194.5" height=".8"/>
<text class="st1 st3" transform="translate(25.711 13.06)">21,00</text>
<text class="st1 st3" transform="translate(25.711 37.663)">19,50</text>
<text class="st1 st3" transform="translate(25.711 62.265)">18,00</text>
<text class="st1 st3" transform="translate(25.711 86.868)">16,50</text>
<text class="st1 st3" transform="translate(25.711 111.47)">15,00</text>
<rect x="56" y="92.8" width="4.7" height="4.7"/>
<rect x="71.5" y="78.7" width="4.7" height="4.7"/>
<rect x="112.5" y="52.9" width="4.7" height="4.7"/>
<rect x="159.6" y="38.9" width="4.7" height="4.7"/>
<rect x="217.8" y="32.8" width="4.7" height="4.7"/>
<path d="m60.3 95.9l-1.4-1.4c4.9-5 10.1-9.8 15.6-14.2 37.7-30.8 88.5-46.7 147-46.1v2c-58-0.6-108.3 15.1-145.7 45.6-5.5 4.4-10.7 9.1-15.5 14.1z"/>
</svg>

</div>

<p class="legenda" style="text-align: center">Figura 1 - ETTJ positiva.</p>

### Curva Neutra ou Negativa

Se a ETTJ resulta em uma curva neutra (taxas próximas iguais às taxas distantes) ou descendente (taxas próximas maiores do que taxas distante) há alguma característica que afetou a percepção de risco do investidores, fazendo a curva se alterar.

<div style="text-align:center">
<svg class="svg-vertical-limit" enable-background="new 0 0 250 150" version="1.1" viewBox="0 0 250 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">
	.stwhite{fill:#FFFFFF;}
	.st1{font-family:'MyriadPro-Regular';}
	.st2{font-size:10px;}
	.st3{font-size:8px;}
</style>
	<rect class="stwhite" x="46.2" y="9.4" width="194.1" height="100"/>
	<path d="M240.7,109.8H45.8V9h194.8V109.8z M46.6,109h193.3V9.8H46.6V109z"/>
<text class="st1 st2" transform="matrix(6.1232e-17 -1 1 6.1232e-17 17.637 92.561)">Taxa (% ao ano)</text>
<text class="st1 st2" transform="translate(110.41 140.43)">DU (dias úteis)</text>
<text class="st1 st3" transform="translate(43.843 122.07)">0</text>
<text class="st1 st3" transform="translate(102.19 122.07)">100</text>
<text class="st1 st3" transform="translate(166.7 123.23)">200</text>
<text class="st1 st3" transform="translate(231.2 122.07)">400</text>
	<line class="stwhite" x1="46.2" x2="240.8" y1="85.5" y2="84.5"/>
	<rect transform="matrix(1 -.0051546 .0051546 1 -.4361 .7408)" x="46.2" y="84.6" width="194.5" height=".8"/>
	<line class="stwhite" x1="46.2" x2="240.3" y1="59.5" y2="59.5"/>
	<rect x="46.2" y="59.1" width="194.1" height=".8"/>
	<line class="stwhite" x1="46.2" x2="240.8" y1="34.5" y2="34.5"/>
	<rect x="46.2" y="34.2" width="194.5" height=".8"/>
<text class="st1 st3" transform="translate(25.711 13.06)">21,00</text>
<text class="st1 st3" transform="translate(25.711 37.663)">19,50</text>
<text class="st1 st3" transform="translate(25.711 62.265)">18,00</text>
<text class="st1 st3" transform="translate(25.711 86.868)">16,50</text>
<text class="st1 st3" transform="translate(25.711 111.47)">15,00</text>
<rect x="56" y="50.8" width="4.7" height="4.7"/>
<rect x="71.5" y="46.7" width="4.7" height="4.7"/>
<rect x="112.5" y="48.9" width="4.7" height="4.7"/>
<rect x="159.6" y="46.9" width="4.7" height="4.7"/>
<rect x="217.8" y="41.8" width="4.7" height="4.7"/>
<path d="m58.7 55.2l-0.8-1.8c5.4-2.5 11.1-4.5 16.9-5.7 19.1-4.1 35 0 40.2 1.4l0.6 0.2c20.2 5.2 55.6 3.1 105.4-6.1l0.4 2c-50.1 9.3-85.8 11.3-106.3 6.1l-0.6-0.2c-5.1-1.3-20.6-5.4-39.3-1.4-5.6 1.1-11.2 3-16.5 5.5z"/>
</svg>
</div>

<p class="legenda" style="text-align: center">Figura 2 - ETTJ neutra.</p>

<div style="text-align:center">
<svg class="svg-vertical-limit" enable-background="new 0 0 250 150" version="1.1" viewBox="0 0 250 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">
	.stwhite{fill:#FFFFFF;}
	.st1{font-family:'MyriadPro-Regular';}
	.st2{font-size:10px;}
	.st3{font-size:8px;}
</style>
	<rect class="stwhite" x="46.2" y="9.4" width="194.1" height="100"/>
	<path d="M240.7,109.8H45.8V9h194.8V109.8z M46.6,109h193.3V9.8H46.6V109z"/>
<text class="st1 st2" transform="matrix(6.1232e-17 -1 1 6.1232e-17 17.637 92.561)">Taxa (% ao ano)</text>
<text class="st1 st2" transform="translate(110.41 140.43)">DU (dias úteis)</text>
<text class="st1 st3" transform="translate(43.843 122.07)">0</text>
<text class="st1 st3" transform="translate(102.19 122.07)">100</text>
<text class="st1 st3" transform="translate(166.7 123.23)">200</text>
<text class="st1 st3" transform="translate(231.2 122.07)">400</text>
	<line class="stwhite" x1="46.2" x2="240.8" y1="85.5" y2="84.5"/>
	<rect transform="matrix(1 -.0051546 .0051546 1 -.4361 .7408)" x="46.2" y="84.6" width="194.5" height=".8"/>
	<line class="stwhite" x1="46.2" x2="240.3" y1="59.5" y2="59.5"/>
	<rect x="46.2" y="59.1" width="194.1" height=".8"/>
	<line class="stwhite" x1="46.2" x2="240.8" y1="34.5" y2="34.5"/>
	<rect x="46.2" y="34.2" width="194.5" height=".8"/>
<text class="st1 st3" transform="translate(25.711 13.06)">21,00</text>
<text class="st1 st3" transform="translate(25.711 37.663)">19,50</text>
<text class="st1 st3" transform="translate(25.711 62.265)">18,00</text>
<text class="st1 st3" transform="translate(25.711 86.868)">16,50</text>
<text class="st1 st3" transform="translate(25.711 111.47)">15,00</text>
<rect x="56" y="50.8" width="4.7" height="4.7"/>
<rect x="71.5" y="41.7" width="4.7" height="4.7"/>
<rect x="112.5" y="48.9" width="4.7" height="4.7"/>
<rect x="159.6" y="60.9" width="4.7" height="4.7"/>
<rect x="217.8" y="76.8" width="4.7" height="4.7"/>
<path d="m221.2 80.6c-48.4-7.2-84.3-16.8-106.8-28.4l-0.8-0.4c-6.9-3.6-22.9-11.9-39.6-6.8-5.4 1.7-10.5 4.7-15.1 8.9l-1.4-1.5c4.8-4.5 10.1-7.6 15.9-9.4 17.4-5.4 34.6 3.6 41.1 6.9l0.7 0.4c22.3 11.5 58 21 106.2 28.2l-0.2 2.1z"/>
</svg>
</div>

<p class="legenda" style="text-align: center">Figura 3 - ETTJ negativa.</p>

Quando a curva passa de sua forma positiva para uma forma negativa, diz-se que houve uma **inversão da curva** de juros, que é basicamente o mesmo que dizer que as taxas de juros com vencimento próximo se tornaram mais altas do que as taxas de vencimento longo.

Por que isso ocorre?

### Inversão 

**Visão dos Investidores**

Quando ocorre uma recessão econômica, o governo interfere na [taxa de juros](/aprenda/financas/economia/taxa-selic) reduzindo-a de forma a tentar aumentar o crédito disponível e estimular um crescimento. Isso acaba refletindo nas taxas de rendimento pagas pelos títulos públicos, que ficam menores.

Os investidores sabendo disso, ao vislumbrarem que uma recessão irá ocorrer no futuro, se antecipam às quedas e passam a comprar os títulos de longo prazo enquanto eles ainda estão pagando taxas altas.

Ocorre, então, um aumento da demanda por títulos públicos de longo prazo. O aumento da demanda gera um aumento no preço — em títulos de renda fixa, como os títulos públicos, juros e preço são inversamente proporcionais, isto é, se o preço sobe os juros caem e vice-versa.

Com os preços dos títulos de longo prazo subindo, as taxas caem. Já com os títulos de curto prazo, ocorre o contrário. Há uma queda na demanda por esses títulos, gerando uma redução no preço e um aumento nas taxas.

Assim, **uma inversão das taxas de juros pode ser um sinal de que o mercado financeiro prevê uma recessão em breve (Figura 4)**.

<div class="iframe-container">
<iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=morW&width=700&height=475" allowTransparency="true"></iframe>
</div>


<p class="legenda" style="text-align: center">Figura 4 - Taxas de juros dos títulos curto prazo (azul) e de longo prazo (vermelha) dos títulos público americandos. Repare que o cruzamento das taxas antecede as áreas em cinza (períodos de recessão).</p>

**Visão dos Empreendedores**

Através da [política monetária](/aprenda/financas/economia/politica-monetaria) o Banco Central controla a oferta de dinheiro.

A partir do momento em que ele resolve reduzir a expansão da [base monetária](/aprenda/financas/economia/inflacao#base-monetC3%A1ria-m), ocorre redução da oferta de dinheiro sem que necessariamente haja uma redução na demanda. Fica mais difícil conseguir dinheiro emprestado.

Redução da oferta sem redução na demanda gera aumento de preços, que no caso do dinheiro é representado pelos juros cobrados nos empréstimos.

Com o aumento dos juros, os empreendedores precisam reavaliar seus projetos e começam a perceber que ficou mais caro dar continuidade a eles. Querendo terminá-los antes que as coisas se tornem inviáveis, eles correm atrás de empréstimos de curto prazo.

Ao mesmo tempo, deixam de tomar empréstimos de longo prazo pois já não tem mais certeza se serão capazes de honrá-los no futuro.

Ocorre então:

- Aumento na demanda por empréstimos de curto prazo, elevando o preço (juros) do dinheiro de curto prazo; e
- Redução na demanda por empréstimos de longo prazo, reduzindo os juros de longo prazo.

**Oferta e Demanda**

Repare que a visão dos investidores é a visão da oferta de dinheiro e a visão dos empreendedores a visão da demanda.

Investir nada mais é do que emprestar seu dinheiro para alguém e ser pago no futuro com algum juro, que no caso dos investimentos é chamado de taxa de rendimento.

Em períodos que antecedem uma recessão, há um aumento da demanda por empréstimos de curto prazo pelos empreendedores e uma redução na demanda pelos de longo prazo enquanto, os investidores (quem empresta o dinheiro), estão querendo emprestar mais a longo prazo, aumentado a oferta, e reduzindo seus empréstimos de curto prazo, reduzindo a oferta.

Teoricamente, todo esse movimento pode ser percebido observando a ETTJ dos títulos públicos, ou comparando as taxas de juros de um título de curto prazo com a de um de longo prazo.





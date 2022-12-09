---
title: "Gráficos"
date: "2019-09-21"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Renda Variável"
categorySlug: "renda-variavel"
subcategory: "Homebroker"
subcategorySlug: "homebroker"
featuredImage: "renda-variavel"
pageType: "page"
order: 4
---

Uma das maneiras mais intuitivas e eficientes de se observar o preço de algum ativo financeiro ao longo do tempo é através de um gráfico.

Dependendo do tipo de análise que se deseja fazer, pode-se utilizar diferentes tipos de gráficos. Neste artigo discutiremos alguns deles.

## Gráfico de Linha

O gráfico de linha é uma representação do preço de cada negócio realizado com o ativo ao longo do tempo.

- O eixo vertical indica o preço; e
- O eixo horizontal indica o tempo.

O eixo de tempo pode ser ajustado para o período desejado. Por exemplo: diário, mensal, hora, segundo etc. O preço utilizado será o preço do último negócio no período selecionado.

<div style="text-align:center">

<svg class="svg-vertical-limit" viewBox="0 0 250 150">
<style type="text/css">
	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:0.7572;stroke-miterlimit:10;}
	.st1{font-family:'Arial';}
	.st2{font-size:6px;}
</style>
<polyline class="st0" points="222 125 28 125 28 25"/>
<text class="st1 st2" transform="matrix(0 -1 1 0 17.046 86.624)">Preço</text>
<text class="st1 st2" transform="translate(110.61 141.43)">Tempo</text>
<path class="st0" d="m240.8 84.5"/>
<path class="st0" d="m46.2 85.5"/>
<path class="st0" d="m240.3 59.5"/>
<path class="st0" d="m46.2 59.5"/>
<path class="st0" d="m240.8 34.5"/>
<path class="st0" d="m46.2 34.5"/>
<rect x="39.3" y="95.2" width="4.7" height="4.7"/>
<rect x="76.2" y="84.3" width="4.7" height="4.7"/>
<rect x="117.2" y="66.8" width="4.7" height="4.7"/>
<rect x="159.6" y="50.5" width="4.7" height="4.7"/>
<rect x="208.2" y="66.8" width="4.7" height="4.7"/>
<polygon points="40.8 98.4 40.2 96.5 77 85.5 118.1 68.1 160.8 51.6 209.8 68.1 209.1 70 160.9 53.8 118.8 70 77.7 87.4"/>
</svg>
</div>

<p class="legenda" style="text-align:center;">Figura 1 - Gráfico de linha.</p>

Vantagens:

- Fácil de interpretar;
- Fornece uma visão geral do movimento dos preços.


## Gráfico de Velas

O gráfico de velas (*candlestick*) é uma forma de representar os preços inventada por um mercador japonês por volta do ano 1700.

Uma vela é composta de três partes:

- Cauda/Pavio superior;
- Corpo; e
- Cauda/Pavio inferior.

Para desenhar uma vela você deve:

1. Escolher um período de tempo;
2. Encontrar o preço do primeiro negócio no período (preço de abertura);
3. Encontrar o preço do último negócio no período (preço de fechamento);
4. Encontrar o maior preço do período; e
5. Encontrar o menor preço do período.

O corpo da vela será codificado de acordo com a relação entre o preço de abertura e de fechamento. Por exemplo:

- Preço de abertura menor que o preço de fechamento = vela branca ou verde; e
- Preço de abertura maior que o preço de fechamento = vela preta ou vermelha.

Com essas informações em mãos, basta desenhar a vela:

<div style="text-align:center">
<svg class="svg-vertical-limit svg-horizontal-limit" viewBox="0 0 125 75">
<style type="text/css">
	.st3{fill:none;stroke:#000000;stroke-width:0.5;stroke-miterlimit:10;}
</style>
<path class="st0" d="M240.8,47"/>
<path class="st0" d="M240.3,22"/>
<path class="st0" d="M240.8-3"/>
<text transform="matrix(1 0 0 1 33.9488 6.1433)" class="st1 st2">Máximo</text>
<text transform="matrix(1 0 0 1 33.9488 16.8303)" class="st1 st2">Fechamento</text>
<text transform="matrix(1 0 0 1 33.9488 61.3123)" class="st1 st2">Abertura</text>
<text transform="matrix(1 0 0 1 33.9488 72.3787)" class="st1 st2">Mínimo</text>
<line class="st3" x1="57.4" y1="4.7" x2="80.3" y2="4.7"/>
<line class="st3" x1="68.4" y1="15.5" x2="71.9" y2="15.5"/>
<line class="st3" x1="57.8" y1="59.6" x2="71.9" y2="59.6"/>
<line class="st3" x1="57.4" y1="70.3" x2="80.3" y2="70.3"/>
<path d="M83.9,15.5V4.7h-3v10.8h-7.1v44h7.1v10.8h3V59.5h7.1v-44H83.9z M87.9,56.5h-11v-38h11V56.5z"/>
</svg>
</div>
<p class="legenda" style="text-align:center;">Figura 2 - Vela com preço de abertura menor do que preço de fechamento.</p>

<div style="text-align:center">
<svg class="svg-vertical-limit svg-horizontal-limit" viewBox="0 0 125 75">

<path class="st0" d="m240.8 47"/>
<path class="st0" d="m240.3 22"/>
<path class="st0" d="m240.8-3"/>
<polygon points="91.1 15.5 83.9 15.5 83.9 4.7 80.9 4.7 80.9 15.5 73.8 15.5 73.8 59.5 80.9 59.5 80.9 70.3 83.9 70.3 83.9 59.5 91.1 59.5"/>
<text class="st1 st2" transform="translate(33.949 6.1433)">Máximo</text>
<text class="st1 st2" transform="translate(33.949 16.83)">Abertura</text>
<text class="st1 st2" transform="translate(33.949 61.312)">Fechamento</text>
<text class="st1 st2" transform="translate(33.949 72.379)">Mínimo</text>
<line class="st3" x1="57.4" x2="80.3" y1="4.7" y2="4.7"/>
<line class="st3" x1="57.4" x2="71.9" y1="15.5" y2="15.5"/>
<line class="st3" x1="67.8" x2="71.9" y1="59.6" y2="59.6"/>
<line class="st3" x1="57.4" x2="80.3" y1="70.3" y2="70.3"/>
</svg>
</div>
<p class="legenda" style="text-align:center;">Figura 3 - Vela com preço de abertura maior do que preço de fechamento.</p>

Quando o preço máximo ou mínimo coincide com o preço de abertura ou fechamento, a vela fica sem o pavio:

<div style="text-align:center">
<svg class="svg-vertical-limit svg-horizontal-limit" viewBox="0 0 125 75">
<style type="text/css">
	
	.st4{fill:none;}
</style>
<path class="st0" d="M240.8,47"/>
<path class="st0" d="M240.3,22"/>
<path class="st0" d="M240.8-3"/>
<text transform="matrix(1 0 0 1 31.0094 6.8303)"><tspan x="0" y="0" class="st1 st2">Fechamento\</tspan><tspan x="0" y="7.2" class="st1 st2">Máximo</tspan></text>
<text transform="matrix(1 0 0 1 31.0001 59.3123)" class="st1 st2">Abertura</text>
<text transform="matrix(1 0 0 1 31.0001 71.3787)" class="st1 st2">Mínimo</text>
<line class="st3" x1="67" y1="5.5" x2="71.9" y2="5.5"/>
<line class="st3" x1="56" y1="57.6" x2="71.9" y2="57.6"/>
<line class="st3" x1="52" y1="70.3" x2="80.3" y2="70.3"/>
<rect x="76.9" y="18.5" class="st4" width="11" height="38"/>
<path d="M84.7,4.7h-0.7h-3h-0.2h-6.9v52.6h7.1v13h3v-13h7.1V4.7H84.7z M87.9,53.8h-11V8.3h11V53.8z"/>
</svg>
</div>
<p class="legenda" style="text-align:center;">Figura 4 - Vela com preço de fechamento igual ao preço máximo.</p>

Plotando-se as velas em um gráfico com eixo vertical de preço e eixo horizontal de tempo, obtem-se o gráfico de velas.

Observe que em um gráfico de velas é possível ajustar dois períodos:

- O período da vela;
- O período do gráfico.

Assim, você pode, por exemplo, ter um gráfico que engloba um ano inteiro e com velas cujo período é de um dia.

<div style="text-align:center">
<svg class="svg-vertical-limit" viewBox="0 0 250 150">

<polyline class="st0" points="222,125 28,125 28,25 "/>
<text transform="matrix(0 -1 1 0 17.0465 86.624)" class="st1 st2">Preço</text>
<text transform="matrix(1 0 0 1 110.6098 141.4341)" class="st1 st2">Tempo</text>
<path class="st0" d="M240.8,84.5"/>
<path class="st0" d="M240.3,59.5"/>
<path class="st0" d="M240.8,34.5"/>
<path class="st0" d="M46.2,34.5"/>
<path d="M67.9,73.5h-0.4H66h-0.1h-3.5v26.3H66v6.5h1.5v-6.5h3.6V73.5H67.9z M69.5,98H64V75.3h5.5V98z"/>
<polygon points="57.1,44.3 53.5,44.3 53.5,38.9 52,38.9 52,44.3 48.5,44.3 48.5,66.3 52,66.3 52,71.7 53.5,71.7 53.5,66.3 
	57.1,66.3 "/>
<path d="M95.5,61.7v-5.4H94v5.4h-3.6v22H94v5.4h1.5v-5.4H99v-22H95.5z M97.5,82.2H92v-19h5.5V82.2z"/>
<polygon points="141,52.2 137.4,52.2 137.4,46.8 135.9,46.8 135.9,52.2 132.4,52.2 132.4,74.2 135.9,74.2 135.9,79.6 137.4,79.6 
	137.4,74.2 141,74.2 "/>
<polygon points="211,40.5 207.4,40.5 207.4,35.1 205.9,35.1 205.9,40.5 202.3,40.5 202.3,62.5 205.9,62.5 205.9,67.9 207.4,67.9 
	207.4,62.5 211,62.5 "/>
<polygon points="169,78.1 165.4,78.1 165.4,72.7 163.9,72.7 163.9,78.1 160.4,78.1 160.4,100.1 163.9,100.1 163.9,105.5 
	165.4,105.5 165.4,100.1 169,100.1 "/>
<polygon points="155,71.3 151.4,71.3 151.4,63.2 149.9,63.2 149.9,71.3 146.4,71.3 146.4,104.1 149.9,104.1 149.9,112.2 
	151.4,112.2 151.4,104.1 155,104.1 "/>
<path d="M179.8,61.8h-0.4h-1.5h-0.1h-3.5v26.3h3.6v6.5h1.5v-6.5h3.6V61.8H179.8z M181.4,86.4h-5.5V63.6h5.5V86.4z"/>
<path d="M193.4,52.6v-5.4h-1.5v5.4h-3.6v22h3.6V80h1.5v-5.4h3.6v-22H193.4z M195.4,73.1h-5.5v-19h5.5V73.1z"/>
<path d="M123.5,44.3v-5.4H122v5.4h-3.5v22h3.5v5.4h1.5v-5.4h3.6v-22H123.5z M125.5,64.8H120v-19h5.5V64.8z"/>
<polygon points="85.1,67.2 81.5,67.2 81.5,61.8 80,61.8 80,67.2 76.4,67.2 76.4,78.2 85.1,78.2 "/>
<polygon points="113.1,56.9 109.5,56.9 109.5,51.5 108,51.5 108,56.9 104.4,56.9 104.4,67.9 113.1,67.9 "/>
</svg>
</div>

<p class="legenda" style="text-align:center;">Figura 5 - Gráfico de velas.</p>

A medida que os preços vão evoluindo ao longo do tempo, as velas formam diversos tipos diferentes de desenho. Alguns analistas utilizam esses [padrões](https://www.investopedia.com/articles/active-trading/092315/5-most-powerful-candlestick-patterns.asp) como uma maneira de tentar antecipar os movimentos de preço.

Vantagens:

- Permite uma visão geral dos movimentos de preço;
- Permite uma visão mais específica dentro do período das velas; e
- Permite identificar padrões.

## Gráfico de Barras

Gráficos de barras, também chamados de OHLC (*Open-High-Low-Close*) funcionam de maneira semelhante ao gráfico de velas, sendo a diferença principal o fato de que as barras não são coloridas.

<div style="text-align:center">
<svg class="svg-vertical-limit" viewBox="0 0 125 75" >

<path class="st0" d="M240.8,47"/>
<path class="st0" d="M240.3,22"/>
<path class="st0" d="M240.8-3"/>
<text transform="matrix(1 0 0 1 35.9366 6.1433)" class="st1 st2">Máximo</text>
<text transform="matrix(1 0 0 1 35.9456 51.9267)" class="st1 st2">Abertura</text>
<text transform="matrix(1 0 0 1 35.9367 26.9268)" class="st1 st2">Fechamento</text>
<text transform="matrix(1 0 0 1 35.9366 72.3787)" class="st1 st2">Mínimo</text>
<line class="st3" x1="57.4" y1="4.7" x2="80.3" y2="4.7"/>
<line class="st3" x1="71.9" y1="25.5" x2="79.9" y2="25.5"/>
<line class="st3" x1="60.6" y1="50.6" x2="72.9" y2="50.6"/>
<line class="st3" x1="57.4" y1="70.3" x2="80.3" y2="70.3"/>
<polygon points="93,23.6 85.6,23.6 85.6,4.7 82.6,4.7 82.6,49.5 75.3,49.5 75.3,52.5 82.6,52.5 82.6,70.3 85.6,70.3 85.6,26.6 
	93,26.6 "/>
</svg>
</div>
<p class="legenda" style="text-align:center;">Figura 6 - Barra com preço de abertura menor que preço de fechamento.</p>


Um barra é composta de três partes:

- Bara horizontal à esquerda (preço de abertura);
- Corpo; e
- Barra horizontal à direita (preço de fechamento).

<div style="text-align:center">
<svg class="svg-vertical-limit" viewBox="0 0 250 150">

<polyline class="st0" points="222,125 28,125 28,25 "/>
<text transform="matrix(0 -1 1 0 17.0465 86.624)" class="st1 st2">Preço</text>
<text transform="matrix(1 0 0 1 110.6098 141.4341)" class="st1 st2">Tempo</text>
<path class="st3" d="M240.8,34.5"/>
<path class="st3" d="M46.2,34.5"/>
<polygon points="41.5,42.5 37.4,42.5 37.4,39.5 36.4,39.5 36.4,57.5 32.3,57.5 32.3,58.5 36.4,58.5 36.4,60.7 37.4,60.7 37.4,43.5 
	41.5,43.5 "/>
<polygon points="57.9,62.7 53.8,62.7 53.8,52.7 52.8,52.7 52.8,70.7 48.7,70.7 48.7,71.7 52.8,71.7 52.8,73.9 53.8,73.9 53.8,63.7 
	57.9,63.7 "/>
<polygon points="90.8,69.5 86.1,69.5 86.1,69.5 85.6,69.5 85.6,87.5 81.5,87.5 81.5,88.5 85.6,88.5 85.6,90.7 86.6,90.7 86.6,70.5 
	90.8,70.5 "/>
<polygon points="156.4,55.7 152.3,55.7 152.3,52.7 151.3,52.7 151.3,70.7 147.2,70.7 147.2,71.7 151.3,71.7 151.3,73.9 152.3,73.9 
	152.3,56.7 156.4,56.7 "/>
<polygon points="140,63.7 135.9,63.7 135.9,60.7 134.9,60.7 134.9,66.7 130.7,66.7 130.7,67.7 134.9,67.7 134.9,72.2 135.9,72.2 
	135.9,64.7 140,64.7 "/>
<polygon points="123.6,76.9 119.5,76.9 119.5,73.9 118.5,73.9 118.5,91.9 114.3,91.9 114.3,92.9 118.5,92.9 118.5,95 119.5,95 
	119.5,77.9 123.6,77.9 "/>
<polygon points="172.8,65.3 168.7,65.3 168.7,62.4 167.7,62.4 167.7,72.4 163.6,72.4 163.6,73.4 167.7,73.4 167.7,74.6 168.7,74.6 
	168.7,66.3 172.8,66.3 "/>
<polygon points="107.2,92.5 103,92.5 103,75.6 102,75.6 102,85.6 97.9,85.6 97.9,86.6 102,86.6 102,96.7 103,96.7 103,93.5 
	107.2,93.5 "/>
<polygon points="189.3,73 185.1,73 185.1,65 184.1,65 184.1,83 180,83 180,84 184.1,84 184.1,86.2 185.1,86.2 185.1,74 189.3,74 "/>
<polygon points="205.7,76.7 201.5,76.7 201.5,59.7 200.5,59.7 200.5,62.8 196.4,62.8 196.4,63.8 200.5,63.8 200.5,80.9 201.5,80.9 
	201.5,77.7 205.7,77.7 "/>
<polygon points="74.3,75.9 70.2,75.9 70.2,58.9 69.2,58.9 69.2,61.9 65.1,61.9 65.1,62.9 69.2,62.9 69.2,80.1 70.2,80.1 70.2,76.9 
	74.3,76.9 "/>
<polygon points="222.1,75.1 218,75.1 218,72.1 217,72.1 217,82.1 212.8,82.1 212.8,83.1 217,83.1 217,85.3 218,85.3 218,76.1 
	222.1,76.1 "/>
</svg>
</div>
<p class="legenda" style="text-align:center;">Figura 7 - Gráfico de barras.</p>

Vantagens:

- Permite uma visão geral dos movimentos de preço;
- Permite uma visão mais específica dentro do período das barras; e
- Não influencia emocionalmente o operador com as cores.

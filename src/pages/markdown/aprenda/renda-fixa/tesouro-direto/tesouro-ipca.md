---
title: "Nota do Tesouro Nacional Série B Principal (NTN-B Principal) - Tesouro IPCA+"
date: "2019-10-23"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Renda Fixa"
categorySlug: "renda-fixa"
subcategory: "Tesouro Direto"
subcategorySlug: "tesouro-direto"
order: 4
featuredImage: "renda-fixa"
pageType: "page"
showIndex: "false"
---

## O que são as Notas do Tesouro Nacional Série B Principal?

As Notas do Tesouro Nacional Série B Principal (NTN-B Principal), também chamadas de Tesouro IPCA+, são títulos [pós-fixados](/aprenda/financas/iniciantes/rendimento) do governo federal disponíveis para negociação no Tesouro Direto.

## Rendimento

No vencimento de uma NTN-B Principal, o investidor receberá o valor pago na compra do título corrigido pela variação do [IPCA](/aprenda/financas/economia/indice-de-precos) mais o rendimento contratado na data da compra.

Dessa forma, o preço de uma NTN-B é composto de duas partes:

- **Valor Nominal Atualizado**:  parte do preço que é corrigida pela variação do IPCA; e
- **Cotação**: parte do preço que considera os juros a serem pagos como rendimento.

O Tesouro Nacional padronizou que o **valor nominal** de uma NTN-B seria computado a partir do dia 15/07/2000 (data-base), quando o valor nominal seria de R\$1.000,00. A partir daí, esse valor é atualizado pela variação do IPCA. 

Supondo que a variação do IPCA do dia 15/07/2000 para o dia 15/08/2000 foi de 1,00%, no dia 15/08/2000 uma NTN-B custaria R\$1.010,00 e assim por diante.

Ao preço da NTN-B corrigido pela variação do IPCA a partir da data-base de 15/07/2000 é dado o nome de **VALOR NOMINAL ATUALIZADO (VNA)**.

Observe os títulos disponíveis para venda no dia 24/10/2019:


<div class = "overflow responsiveTable" id="figura1">

| Título             |  Vencimento | Taxa de Rendimento | Valor Mínimo | Preço Unitário |
|--------------------|-------------|--------------------|--------------|----------------|
| Tesouro IPCA+ 2024 | 15/08/2024  | IPCA + 2,19        | 58,39        | 2919,94        |
| Tesouro IPCA+ 2035 | 15/05/2035 | IPCA + 3,14        | 40,12        | 2006,08        |
| Tesouro IPCA+ 2045 | 15/05/2045  | IPCA+ 3,14         | 44,21        | 1473,84        |

</div>


<p class="legenda" style="text-align:center">Figura 1 - Tesouro IPCA+ disponíveis para venda em 24/10/2019.</p>

Um investidor que comprar , por exemplo, um título Tesouro IPCA+ 2024 nesse dia, receberá **na data de vencimento do título**, o valor do seu investimento corrigido pela variação do IPCA no período entre a compra e o vencimento mais os juros referentes a taxa de 2,19% ao ano.

**NOTA**: Ainda que a expressão do rendimento seja feita como "IPCA + taxa", o rendimento bruto de um determinado período será calculado pela fórmula:

$$

Rendimento\,Bruto = [(1 + ipca) \times (1+taxa)] - 1

$$

## Como se calcula o preço de uma Nota do Tesouro Nacional Série B Principal?

Ao preço presente de um título de renda fixa é dado o nome de **preço unitário (PU)**.

No caso das NTN-B Principal, o PU tem dois fatores:

- **VNA**: é o valor nominal do título atualizado pelo IPCA desde a data base (15/07/2000); e
- **Cotação**: é o "preço" que o mercado está pagando no título.

A fórmula para o cálculo do PU de uma NTN-B Principal é a seguinte:

$$

PU = {Cotação \over 100} \times VNA

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do PU de uma NTN-B Principal.</p>

**OBS**: o preço do título é truncado em 2 casas decimais.

### Valor Nominal Atualizado

Como o IPCA só é apurado mensalmente e divulgado no dia 15 de cada mês, o cálculo do VNA de uma NTN-B envolve duas etapas:

1. Cálculo do VNA considerando o IPCA divulgado; e
2. Cálculo do VNA projetado, que considera o período compreendido entre o último dia 15 (último IPCA divulgado) e a data de negociação do título.

#### 1. VNA


O valor nominal atualizado de uma NTN-B pode ser obtido no [*site*](http://www.tesouro.gov.br/-/balanco-e-estatisticas) do Tesouro Direto;

O VNA é o equivalente a R\$1.000,00 corrigidos pela variação do IPCA do dia 15/07/2000 até o último dia com IPCA disponível.

Seu cálculo é feito através da seguinte fórmula:

$$

VNA = 1.000 \times \prod {n \atop \small 1} \Bigg (1 + {IPCA \over 100} \Bigg ) ^ {\large 1 \over 252} 

$$

<p class="legenda" style="text-align:center">Fórmula 2 - Cálculo do VNA de uma NTN-B Principal.</p>

**OBS**: o VNA do título é truncado em 6 casas decimais.



#### 2. VNA Projetado

Como a negociação dos títulos não se limita aos dias em que há divulgação do IPCA, o VNA utilizado para calcular o preço dos títulos que aparece no sistema do Teosuro Direto é o **VNA Projetado**, que faz uma projeção do IPCA (baseado em pesquisas com participantes do mercado) para o período compreendido entre as divulgações oficiais do IPCA.

$$

VNA\,Projetado = VNA \times \Bigg [ \Bigg ( 1 + {Proj.\,Índice \over 100} \Bigg ) ^ {\large DUdia \over DUmês} \Bigg ] 

$$

<p class="legenda" style="text-align:center">Fórmula 3 - Cálculo do VNA projetado de uma NTN-B Principal.</p>


Onde:

- **DUdia** = dias corridos entre a data do último VNA disponível e a data de liquidação da compra; e
- **DUmês** = dias corridos entre a data do último VNA disponível e o dia 15 do mês seguinte.


O índice prejetado pelo mercado pode ser encontrado no [*site*](https://www.anbima.com.br/pt_br/informar/estatisticas/precos-e-indices/projecao-de-inflacao-gp-m.htm) da ANBIMA. No mesmo [*site*](https://www.anbima.com.br/pt_br/informar/valor-nominal-atualizado.htm)  é possível encontrar o VNA projetado para alguma data específica.


### Cotação

A cotação equivale ao percentual do VNA pelo qual os investidores estão negociando a NTN:

- **Cotação de 100%**: diz-se que o título está sendo negociado **ao par**. O preço da NTN será igual ao VNA;
- **Cotação acima de 100%**: diz-se que o título está sendo negociado com **ágio**. O preço da NTN será maior do que o VNA; e
- **Cotação abaixo de 100%**: diz-se que o título está sendo negociado com **deságio**. O preço da NTN será menor do que o VNA.

Seu cálculo é feito através da seguinte fórmula:

$$

Cotação = { 100  \over { \bigg(1 + \Large {taxa \over 100}\bigg)^{du \over 252} }}

$$

<p class="legenda" style="text-align:center">Fórmula 4 - Cálculo da cotação de uma Nota do Tesouro Nacional.</p>

Onde:

- **taxa** = taxa de juros que remunera o título; e
- **du** = dias úteis entre a data de liquidação da compra (inclusive) e a data de vencimento do título (exclusive).



**OBS**: a cotação do título é truncado em 4 casas decimais.

### Exemplo

Vamos calcular o preço da NTN-B Principal com vencimento em 15/08/2024, supondo a compra em 24/10/2019 e considerando as informações disponíveis no *site* do Tesouro Direto para a taxa de rendimento que é de IPCA + 2,19% a.a.

**1. Cálculo do VNA**

Acessando o [*site*](http://www.tesouro.gov.br/-/balanco-e-estatisticas) do Tesouro Direto obtemos o seguinte VNA para o dia 15/10/2019:

$$

VNA = 3.237,814470 

$$

**2. Cálculo do VNA projetado**

Acessando o [*site*](https://www.anbima.com.br/pt_br/informar/estatisticas/precos-e-indices/projecao-de-inflacao-gp-m.htm) da ANBIMA, obtemos a projeção de 0,08% para o IPCA de outubro/2019.

Em seguida, calculamos os dias corridos entre a data do último VNA disponível (15/10/2019) e a data da liquidação (25/10/2019)

obtemos então:

$$

DUdia = 10

$$

O próximo passo é calcular o número de dias entre a data do último VNA disponível (15/10/2019) e o dia 15 do próximo mês (15/11/2019)

$$

DUmês = 31

$$

A partir daí, podemos calcular o VNA projetado:

$$

VNA\,Projetado = 3.237,814470 \times \Bigg [ ( 1 + 0,0008 ) ^ {\large 10 \over 31} \Bigg ] = 3.238,649808

$$

**3. Cálculo dos dias úteis**

Em cálculos que envolvem títulos de renda fixa, o mercado conveciona utilizar 252 dias úteis como sendo o período de um ano.

Para calcular os dias úteis pode-se utilizar o EXCEL, utilizando-se uma planilha que contenha os feriados (disponível no *site* da [ANBIMA](https://www.anbima.com.br/feriados/feriados.asp))  e a fórmula *DIATRABALHOTOTAL*.

O cálculo a ser feito envolve o período entre a **data de liquidação da compra (inclusive)** e o **dia do vencimento do título (exclusive)**.

Para **a data de liquidação da compra, utilizamos o primeiro dia útil após a data da compra**. No nosso caso, será o dia 25/10/2019 (pois estamos comprando o título em 24/10/2019).

Dessa forma teremos:

$$

du = 1.205

$$

**4. Cálculo da Cotação**

$$

Cotação = { 100  \over { \bigg(1 + \Large {2,19 \over 100}\bigg)^{1.205 \over 252} }} = 90,1594

$$


**5.Cálculo do PU**

$$

PU = {90,1594 \over 100} \times 3.238,649808 = 2.919,94

$$

Observe na figura 1 que esse é o preço pelo qual estão sendo vendidas as NTN-B Principal com vencimento em 15/08/2024.


## Fluxo

O fluxo de um título é a representação da movimentação dos valores ao longo do tempo. No caso das NTN-B Principal, o fluxo é representado pela Figura 2:

<div style="text-align:center" id="figura2">
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

<p class="legenda" style="text-align:center">Figura 2 - Fluxo de pagamento de uma NTN-B Principal. Setas para baixo indicam dinheiro que saiu do bolso do investidor. Setas para cima indicam dinheiro que entrou no bolso do investidor.</p>

O que a figura 2 representa é que, na data da compra, o investidor terá um fluxo de saída de valores e só terá algum recebimento na data do vencimento do título, quando receberá o valor de face do título (R\$1.000,00) corrigidos pela variação do IPCA e o juros.

## Valor Mínimo de Compra

O valor mínimo de investimento permitido no Tesouro Direto é o que for maior entre:

- R$30,00; ou
- 0,01 título.

Deve-se considerar também que a fração mínima a ser comprada de um título é de 0,01 título.

Observe novamente a tabela de títulos disponíveis para venda em 24/10/2019:

<div class = "overflow responsiveTable" id="figura3">

| Título             |  Vencimento | Taxa de Rendimento | Valor Mínimo | Preço Unitário |
|--------------------|-------------|--------------------|--------------|----------------|
| Tesouro IPCA+ 2024 | 15/08/2024  | IPCA + 2,19        | 58,39        | 2919,94        |
| Tesouro IPCA+ 2035 | 15/05/2035 | IPCA + 3,14        | 40,12        | 2006,08        |
| Tesouro IPCA+ 2045 | 15/05/2045  | IPCA+ 3,14         | 44,21        | 1473,84        |

</div>


<p class="legenda" style="text-align:center">Figura 3 - Tesouro IPCA+ disponíveis para venda em 24/10/2019.</p>


Considere o título com vencimento em 15/08/2024 da figura 3.

O valor equivalente a 0,01 título seria de R\$29,19, abaixo de R\$30,00. Logo, não é possível comprar apenas 0,01 título.

O valor equivalente a 0,02 título seria de R\$58,39, acima de R\$30,00 e, portanto, o valor mínimo a ser investido, conforme é mostrado na própria tabela do Tesouro.

## Riscos Específicos

Em títulos NTN-B há correlação inversa entre a taxa de rendimento e o preço do título:

- Quando a taxa de rendimento aumenta, o preço do título diminui; e
- Quando a taxa de rendimento diminui, o preço do título aumenta.

Essa variação, chamada de **marcação a mercado**, faz com que não seja possível conhecer qual será o rendimento obtido caso o investidor venda o título antes da data de vencimento.

Um investidor que tenha de fazer a venda antecipada dos seus títulos pode até mesmo acabar vendendo seus títulos por um preço menor do que comprou, tendo um prejuízo.

Também é possível que, no caso de uma redução nas taxas de rendimento, um investidor que venda seus títulos antecipadamente possa obter um retorno maior do que o esperado.

Dessa forma, **a taxa de rendimento contratada no momento da compra do título só será recebida se o mesmo for levado até o seu vencimento**.

## Estratégia de Investimento

Devido às suas características particulares as NTN-B são úteis para:

- Investimentos de longo prazo;
- Investidores que desejam se proteger da inflação; e
- Investidores que carregarão o título até o vencimento.

<div class="referencias">

**Referências**:

<p id="1">BERGER, Paulo Lamosa. <strong>Mercado de Renda Fixa no Brasil: ênfase em títulos públicos</strong>. 1 ed. Rio de Janeiro. Interciência, 2015.</p>

<p id="2">Escola de Administração Fazendária - ESAF. <strong>Curso do Tesouro Direto</strong>. Disponível em <a href="http://www.tesouro.gov.br/-/curso-do-tesouro-direto">http://www.tesouro.gov.br/-/curso-do-tesouro-direto</a></p>

</div>
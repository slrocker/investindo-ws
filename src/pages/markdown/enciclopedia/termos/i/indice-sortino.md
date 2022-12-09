---
title: "Índice Sortino"
date: "2019-11-29"
section: "Enciclopédia"
sectionSlug: "enciclopedia"
category: "Termos"
categorySlug: "termos"
subcategory: "I"
subcategorySlug: "i"
featuredImage: "enciclopedia-featured"
pageType: "page"
order: 0
---

## O que é Índice Sortino?

O Índice Sortino é uma variação do [Índice Sharpe](/enciclopedia/termos/i/indice-sharpe) que, ao invés de considerar toda a volatilidade do ativo como fator de risco, tenta isolar apenas a volatilidade "negativa".

O índice foi criado para ser utilizado na análise do risco-retorno de um ativo financeiro ou de um *portfolio* de ativos (tal como a carteira de um fundo de investimento).

O nome do índice vem do seu criador, Frank A. Sortino.

## Como calcular o Índice Sortino?

O Índice Sortino de  um ativo é calculado com a fórmula 1:

$$

IS = { {Rp - Rf} \over \sigma}

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do Índice Sortino.</p>

Onde:

- **Rp**: retorno do ativo ou do *portfolio* de investimentos;
- **Rf**: [taxa livre de risco](/enciclopedia/termos/t/taxa-livre-de-risco); e
- **σ**: desvio padrão  dos retornos negativos.

### Taxa Livre de Risco

A taxa livre de risco é o rendimento do ativo com menor risco disponível no mercado financeiro. No Brasil é comum utilizar-se a [taxa DI](/enciclopedia/termos/t/taxa-di) (também chamada de CDI).

### Desvio Padrão das Retornos Negativos

O cálculo deste parâmetro pode ser feito através da raíz quadrada da variância (σ²) sobre o número de amostras (n):

$$

\sigma = { \sqrt {{σ^2} \over {n}}}

$$

<p class="legenda" style="text-align:center">Fórmula 2 - Cálculo do fator de risco do Índice Sortino.</p>


Por exemplo:

- Um Fundo de Investimento teve um retorno anual conforme a figura 1 (R); e
- A taxa de retorno livre de risco foi de 6,00% (Rf).

**Nota**: Rf pode ser definido pelo investidor como uma taxa de rendimento a ser obtida no investimento.

|Mês|Retorno|R-Rf|{R-Rf)^2|
|---|-------|----|--------|
|1|10%|-|0|
|2|12%|-|0|
|3|7%|-|0|
|4|-3%|-9%|0,81%|
|5|8%|-|0|
|6|-4%|-10%|1,00%|
|7|15%|-|0|
|8|20%|-|0|
|9|12%|-|0|
|10|6%|-|0|
|11|-3%|-9%|0,81%|
|12|2%|-4%|0,16%|
|**Total**|||**2,78%**|
|Retorno Médio|6,83%|||

<p class="legenda" style="text-align:center;">Figura 1 - Exemplo do cálculo do desvio padrão de rendimentos negativos.</p>

Utilizando os dados da figura 1, fazemos o cálculo do desvio padrão das quedas:

$$

\sigma = { \sqrt {{2,78\%} \over {12}}} = 4,81\%

$$

Observe na figura 1 que o retorno médio do fundo para o período foi de 6,83%. 

Agora que já temos todos os dados, podemos calcular o Índice Sortino:

$$

IS = { {6,83 - 6} \over 4,81\%} = 0,16.

$$

## Interpretando o Índice

O Índice Sortino informa **qual foi o retorno obtido para cada percentual de risco em excesso tomado pelo investidor**.

Assim:

- **Resultados acima de 100% ou 1**: indicam que para cada 1,00% de risco adicionado à carteira, houve 1,00% ou mais de rendimento obtido em relação à taxa livre de risco; e
- **Resultados abaixo de 100% ou 1**: indicam que para cada 1,00% de risco adicionado à carteira, houve 1,00% ou menos de rendimento obtido em relação à taxa livre de risco;

O ideal seria sempre obter valores acima de 1 ou 100%. No entanto, o mais comum é encontrar valores abaixo de 1.

Considere o **fundo de investimento A**, com rendimento de 15,00% e um σ de 10,00% e o **fundo de investimento B** com rendimento de 10,00% e um σ de 4,5%.

Se a **taxa de retorno livre de risco** for de 5,00%, teremos:

$$

IS\, Fundo\,A = { {15\% - 5\%} \over 10\%} = 1,0.

$$
$$

IS\, Fundo\,B = { {10\%-5\%} \over 4,5\%} = 1,11.

$$

Esse resultado nos mostra que:

- O Fundo A possui maior retorno, porém apresenta volatilidade negativa maior;
- O Fundo B possui menor retorno, porém apresenta volatilidade negativa menor; e
- O fundo B tem uma maior eficiência em obter retornos em relação ao risco que está tomando.

## Índice Sortino e o Investidor

O Índice Sortino é muito utilizado por investidores de fundos de investimento, os quais utilizam o índice como uma forma de analisar se o risco tomado pelo gestor do fundo em suas estratégias têm gerado resultado superior.

É importante ter em mente que o índice leva em conta dois princípios:

- Considera-se que o preço dos ativos obedecen à uma distribuição normal; e
- A [volatilidade](/enciclopedia/termos/v/volatilidade) é entendida como o risco de um ativo.

Esses dois princípios nem sempre são verdadeiros no mundo aleatório do mercado financeiro. Assim, a análise puramente matemática de um ativo pode acabar gerando impressões erradas.

Quando utilizar o índice para comparar dois ativos, tome o cuidado de fazer uma comparação adequada, utilizando ativos cuja expectativa de risco-retorno seja semelhante.

Não faz sentido, por exemplo, comparar o Índice Sortino de um fundo multimercado com o de um fundo de renda fixa.

Além disso, ao analisar um fundo de investimento, é importante também fazer uma análise profunda da estratégia utilizada pelo gestor.

Quando comparado ao Índice Sharpe, o Índice Sortino é mais eficiente em analisar a performance de fundos cujas variações tendem a ser preponderantemente positivas, pois o índice ignora essas variações no cálculo da volatilidade.


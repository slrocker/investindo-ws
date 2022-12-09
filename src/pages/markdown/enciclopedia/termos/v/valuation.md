---
title: "Valuation"
date: "2019-12-11"
section: "Enciclopédia"
sectionSlug: "enciclopedia"
category: "Termos"
categorySlug: "termos"
subcategory: "V"
subcategorySlug: "v"
featuredImage: "enciclopedia-featured"
pageType: "page"
order: 0
---

## O que é *valuation*?

*Valuation* é o processo de determinar o preço  de um ativo ou empresa.

O *valuation* é utilizado por analistas e investidores para tentar determinar o preço adequado a ser pago por uma ação ou ativo financeiro.

## Como é feito o *valuation*?

O *valuation* pode ser feito utilizando diversas técnicas ou modelos.

Qual modelo utilizar dependerá da preferência do analista.

Podemos dividir a análise em dois grupos:

- **Análise absoluta**: são considerados apenas as características da empresa sendo analisada, sem levar em conta outras empresas; e
- **Análise relativa**: compara-se a empresa analisada com outras empresas semelhantes.

### Análise Absoluta

Dentro desse tipo de análise estão modelos que consideram os fundamentos da empresa, como ativo, dívidas, geração de receitas, taxa de crescimento etc.

São modelos como fluxo de caixa descontado, modelo de Gordon, modelo de avaliação pelos lucros residuais etc.

De maneira geral, esses modelos tentam **projetar os ganhos da empresa** para o futuro, **estimar o valor** desses ganhos no presente e encontrar um preço pelo qual o investidor não estaria pagando mais caro do que o potencial de ganhos da empresa.

### Análise Relativa

Dentro desse tipo de análise utilizam-se múltiplos e índices fundamentalistas de forma a comparar a empresa analisada com outras empresas utilizando uma "medida" padrão.

Assim, comparando uma empresa com empresas semelhantes ou que atuam em setores parecidos, os analistas estimam como o mercado está precificando a empresa em relação à seus pares.

## Exemplo

Vamos apresentar um exemplo do cálculo do fluxo de caixa descontado bastante simplificado, apenas para que você tenha uma ideia geral do que seria fazer um *valuation*.

Suponha que você vai comprar a empresa INVESTINDO S.A.

Qual o preço que você pagaria por ela?

A princípio, poderíamos dizer que o preço da empresa é igual ao preço de todos os móveis, imóveis e maquinários que ela possui menos aquilo que ela possui de dívidas e despesas. Em resumo, os seus ativos menos os seus passivos.

No entanto, a INVESTINDO S.A. está em um setor de mercado que tem excelente perspectivas de crescimento para o futuro. Além disso, a INVESTINDO S.A. tem uma vantagem competitiva que outras empresas do ramo não possuem: a sua marca é referência entre os consumidores, a tal ponto que a empresa pode aumentar o preço dos seus produtos acima da inflação e as vendas continuarem subindo.

Essas características devem adicionar algum valor na empresa, certo?

Como seria muito difícil tentar precificar essas coisas sem usar algum aspecto concreto de análise, vamos tentar encontrar uma preço adequado para a empresa considerando a sua perspectiva de ganhos futuros. 

Assim, analisando o patrimônio da empresa e a sua perspectiva de ganhos, chegaríamos a um **preço justo** a pagar pela empresa.

Acima desse preço, o comprador estaria pagando caro e reduzindo a possibilidade de ter bons retornos futuros com a empresa.

Abaixo desse valor, o vendedor estaria recebendo menos do que a empresa valeria.

Para saber quanto seria justo pagar pelas ações dessa empresa vamos projetar o seus lucros futuros e encontrar o seu valor presente, através do método do **fluxo de caixa descontado**.


### Projeção do Lucro

Digamos que o lucro da empresa no ano tenha sido de R\$10.000,00.

Através de cálculos cuja complexidade vai além do escopo deste exemplo, estimamos uma taxa de crescimento de 10% para o lucro dos anos vindouros.

Teremos, então, a seguinte perspectiva de lucros:

|Ano|Lucro|
|---|-----|
|0|10.000|
|1|11.000|
|2|12.100|
|3|13.310|
|4|14.641|
|5|16.105,10|
|...|....|

<p class="legenda" style="text-align:center">Figura 1 - Exemplo de projeção de lucros.</p>

Teoricamente, teríamos de considerar os lucros para a eternidade (não sabemos quanto tempo a empresa existirá). Na prática, não temos como fazer isso. Assim, podemos escolher considerar os lucros dos próximos 5 anos e, após esse período, considerar um valor residual, que seria o preço dos fluxos de lucro a partir do quinto ano.

O próximo passo é estimar quanto os valores de lucros futuros valeriam na data de hoje. Para isso, precisamos estimar diversos aspectos como:

- A inflação;
- [Custo de carregamento](/enciclopedia/termos/t/taxa-livre-de-risco);
- Custo de capital da empresa; e
- Prêmio de risco.

A partir daí, determinamos uma **taxa de desconto** ([custo médio ponderado de capital - WACC](/enciclopedia/termos/w/wacc)), ou seja, uma taxa pela qual traremos os valores futuro para valor presente. Digamos que essa taxa seja de 5,00%.

Utilizando a fórmula do valor presente (fórmula 1), encontramos os valores presentes dos primeiros 5 anos de lucro:

$$

VP = {VF \over (1+ t)^n}

$$

<p class="legenda" style="text-align:center">Fórmula 1 - Cálculo do Valor Presente.</p>

Onde:

- **VP** : valor presente;
- **VF** : valor futuro;
- **t** : taxa de desconto; e
- **n**: número de períodos.

Por exemplo, vamos calcular o valor presente do primeiro ano de lucros:


$$

VP = {11.000 \over (1+0,05)^1} = 10.476,19

$$

Repetindo o processo para os demais anos, obtemos:

|Ano|Lucro|VP|
|---|-----|--|
|1|11.000|10.476,19|
|2|12.100|10.975,06|
|3|13.310|11.497,68|
|4|14.641|12.045,19|
|5|16.105,10|12.618,77|
|...|....|

<p class="legenda" style="text-align:center">Figura 2 - Exemplo de projeção de lucros eo valor presente considerando uma taxa de desconto de 5,00% a.a.</p>

### Valor Residual

Precisamos, agora, estimar o valor residual referente aos valores de lucros futuros além de cinco anos. 

Há diferentes maneiras de se estimar esse valor. Para simplificar, vamos dizer que o valor calculado tenha sido de R\$90.000,00.

Teremos então:

|Ano|Lucro|VP|
|---|-----|--|
|1|10.000|10.476,19|
|2|11.000|10.975,06|
|3|12.100|11.497,68|
|4|13.310|12.045,19|
|5|14.641|12.618,77|
|Valor Residual||90.000|
|**TOTAL**||**147.560,80**|

<p class="legenda" style="text-align:center">Figura 3 - Valor presente do fluxo e do valor residual.</p>

### Conclusão

Nossos cálculos e projeções nos mostram que, pelo método do fluxo de caixa descontado, a projeção de lucros da empresa vale R\$147.560,80.

O próximo passo é juntar essa análise com a dos ativos e passivos da empresa para, então, chegar a um preço que consideraríamos adequado para ela.

## *Valuation* e o Investidor

Grande investidores da história, em especial [Warren Buffett](https://pt.wikipedia.org/wiki/Warren_Buffett), são famosos por afirmarem utilizar técnicas de *valuation* para fazer a análise de empresas e escolher onde investir.

A estratégia utilizada por esses investidores consiste em encontrar **boas empresas** cujo preço esteja **subvalorizado** pelo mercado.

De maneira geral, essa estratégia de utilizar *valuation* para encontrar "promoções" de empresas também é utilizada pelos analistas em suas recomendações e "vendida" pelo mercado financeiro como sendo a que o pequeno investidor deve utilizar.

Essas influências levam grande parte dos pequenos investidores a tentarem fazer esse tipo de análise em detrimento de estratégias mais simples de investimento.

No entanto, o *valuation*:

- Depende de cálculos relativamente complexos;
- Depende de fatores subjetivos escolhidos pelo analista;
- Pode ter resultados muito discrepantes com apenas uma pequena mudança nos fatores de cálculo; e
- Não oferece garantia de acerto.

Assim, **a correção da análise depende muito mais da habilidade do analista em estimar os parâmetros corretos**, do que na técnica ou na fórmula utilizada. Investidores inexperientes certamente não terão essa habilidade bem desenvolvida.

Antes de sair querendo se aproveitar da "ineficiência do mercado", o investidor iniciante precisa verificar qual o custo-benefício em se manter fora do mercado buscando "ações com desconto" em relação à outras estratégias mais simples como a diversificação, formação de preço-médio etc.


Alguns investidores optam por seguir as recomendações dos analistas profissionais.

Sempre que utilizar análises de terceiros, é importante que o investidor verifique os parâmetros e premissas utilizadas pelo analista para ver se concorda com elas.



Por fim, além de não haver garantias de acerto na análise, a estratégia também não garante maiores retornos.

 Há muitas empresas consideradas "caras" ou sobrevalorizadas que continuam dando retorno e satisfação aos seus acionistas ano após ano. Nesses casos, o critério **boa empresa** mostrou-se mais importante do que o **estar subvalorizado** para o rendimento final do investidor.


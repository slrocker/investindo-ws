---
title: "Tipos de Ordem"
date: "2019-09-19"
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

Ao enviar uma ordem pelo *homebroker* você terá várias opções. Você pode, por exemplo:

- Determinar um preço específico;
- Determinar a validade da ordem; e
- Programar a ordem para ser enviada somente quando certos pré-requisitos forem atendidos.

As opções disponíveis dependerão da corretora que você esteja utilizando. Neste artigo falaremos sobre as mais comuns.

## Quanto ao Preço

Ao enviar uma ordem pelo *homebroker* você tem duas opções:

- Especificar o preço pelo qual deseja que a ordem seja executada; ou
- Enviar uma ordem para ser executada pela melhor oferta disponível (**ordem a mercado**).

### Preço Específico

Digamos que voce queira comprar 1K ativos cujo livro de ofertas é representado abaixo (figura 1):

<table class="regularTable" style="max-width:60%;margin-right:auto;margin-left:auto;" id="figura1">
<thead>
<tr>
<td colspan="4">Livro de Ofertas</td>
</tr>
<tr>
<td colspan="2" >Compra</td>
<td colspan="2" >Venda</td>
</tr>
</thead>
<tbody>
<tr>
<td >Preço</td>
<td >Qtd</td>
<td >Qtd</td>
<td >Preço</td>

</tr>
<tr>
<td >R$10,00</td>
<td >1K</td>
<td >2K</td>
<td >R$10,05</td>

</tr>
<tr>
<td >R$9,99</td>
<td >1,5K</td>
<td >1K</td>
<td >R$10,06</td>

</tr>
<tr>
<td >R$9,97</td>
<td >5K</td>
<td >500</td>
<td >R$10,08</td>

</tr>
</tbody>
</table>

<p class="legenda" style="text-align:center;">Figura 1 - Livro de Ofertas.</p>

Digamos que você só aceite pagar R\$10,03 por esse ativo. A melhor oferta de venda é de R\$10,05. Assim, você terá de especificar qeu deseja pagar R\$10,03 na sua ordem.

Após enviá-la, ela será registrada no livro de ofertas com prioridade e você terá de aguardar surgir algum outro investidor disposto a vender o ativo por R\$10,03 para que o negócio seja concretizado.

### Ordem a Mercado

Uma **ordem a mercado** é uma ordem enviada para ser executada ao preço da melhor oferta disponível.

Suponha que você queira comprar 1K ativos cujo livro de ofertas é representado pela [figura 1](#figura1).

Nesse caso, você enviará uma ordem sem preço específico de execução e ela será executada imediatamente pelo melhor preço disponível, que no exemplo é de R\$10,03.

Ordens a mercado são também chamadas de **ordens agressoras do livro de ofertas**. Assim, diz-se que um investidor que envia uma ordem a mercado está **agredindo o livro**.

## Quanto a Validade

Ao enviar uma ordem, você pode especificar quanto tempo quer que ela permaneça registrada no sistema da Bolsa. Assim você pode especificar:

- Uma data específica;
- Que deseja mantê-la até que você comande o cancelamento (válida até cancelar); ou
- Que ela dure somente até o fim do pregão.

Essa caracterísitica só se aplica para aquelas ordens envidas com um preço específico de execução.

Mesmo as ordens válidas até cancelar (VAC) não ficam para sempre no sistema. Volta e meia a Bolsa realiza *resets* no sistema ou, então, ocorrem [leilões](/renda-variavel/bolsa-de-valores/leiloes) que zeram todas as ordens registradas.

## Programadas

Ordens programadas são aquelas que o investidor deseja que sejam enviadas apenas se certos pré-requisitos sejam atendidos.

Normalmente, programa-se a ordem para ser enviada quando determinado preço é atingido.

Por exemplo, digamos que você comprou ativos a R\$10,00 e deseje vendê-los a R\$12,50. Você não precisa enviar uma ordem com o preço de R\$12,50 imediatamente, podendo enviar uma ordem cujo **disparo** (envio) será feito somente quando o preço chegar a, digamos, R\$12,48.

Da mesma forma, digamos que você queira limitar seu prejuízo e não queira vender o ativo abaixo de R\$9,00. Você pode programar uma ordem de venda por R\$9,00 que será disparada somente quando o preço do ativo cair para patamares próximos a esse preço.

O uso dessas ordens confude-se dependendo da estratégia que se está fazendo (por exemplo, ao operar vendido, o raciocínio se inverte). Podemos dizer que:

- Ordens START: ordens disparadas quando o preço está subindo; e
- Ordens STOP: ordens disparadas quando o preço está descendo.

### Ordens START

De maneira genérica, as ordens START funcionam assim:

1. Estabelece-se um **preço de disparo** (*trigger*) acima do preço atual;
2. Estabelece-se um **preço limite** (acima do de disparo);
3. Quando o ativo atinge o preço de disparo, a ordem é enviada; e
4. O sistema tentará executar a ordem a partir do preço de disparo e limitado ao preço limite.

Por exemplo:

- Você está acompanhando uma ação cujo preço vem caindo mas que você acredita estar próxima de uma reversão com provavél início de subida no preço;
- Você acha que se a ação chegar no preço de R\$10,00 é um bom sinal de que a reversão ocorreu — esse será o seu **preço de disparo**; e
- Você não quer pagar mais caro do que R\$11,00 pois acha que a partir desse preço não será mais possível conseguir lucro na operação — esse será o seu **preço limite**.

<table class="regularTable" id="figura2">
<thead >
<tr>
<td  >Preço</td>
<td  >Ação</td>
<td  >Ordens</td>
</tr>
</thead>
<tbody >
<tr>
<td  >R$9,50</td>
<td  >Nenhuma</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$9,80</td>
<td  >Nenhuma</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$10,00</td>
<td  >Preço de disparo atingido</td>
<td  >Compra por R$11,00</td>
</tr>
<tr>
<td  >R$10,05</td>
<td  >Ordem executada</td>
<td  >Nenhuma</td>
<tr>
<td  >R$10,07</td>
<td  >Preço da ação continua subindo</td>
<td  >-</td>
</tr>
</tr>
</tbody>
</table>

<p class="legenda" style="text-align:center;">Figura 2 - Fluxo de uma ordem START.</p>

Observe que a ordem pode ser tanto de COMPRA quanto de VENDA, o funcionamento é mesmo.

As ordens START podem ser utilizadas para estratégias como:

- Compra no início de uma reversão de preço;
- Garantir um preço de venda com lucro; e
- Proteger uma posição vendida de ter prejuízo.

Algumas corretoras chamam essa ordem de ***STOP GAIN***, pois caracteriza um preço de disparo para garantir o lucro de uma posição comprada.

- Preço de disparo: preço que faz o sistema enviar a ordem; e
- Preço limite: preço limite para a ordem enviada ser executada;

### Ordens STOP

De maneira genérica, as ordens STOP funcionam assim:

1. Estabelece-se um **preço de disparo** (*trigger*) abaixo do preço atual;
2. Estabelece-se um **preço limite** (abaixo do disparo);
3. Quando o ativo atinge o preço de disparo, a ordem é enviada; e
4. O sistema tentará executar a ordem a partir do preço de disparo e limitado ao preço limite.

Por exemplo:

- Você comprou uma açao por R\$10,00 visando ter lucro na venda por um preço acima de R\$10,00;
- Você deseja limitar o seu prejuízo caso o preço da ação comece a cair, não desejando vender abaixo de R\$9,00 — esse será o seu **preço limite**;
- Ao mesmo tempo, você não pode vender muito cedo, digamos, por R\$9,90, pois pode ser que esse seja apenas um pequeno movimento de baixa antes de uma recuperação;
- Você determina, então, que se o preço chegar a R\$9,50 esse será um sinal de que a ação entrou em uma tendência de queda e é hora de vender — esse será seu **preço de disparo**;


<table class="regularTable" id="figura3">
<thead >
<tr>
<td  >Preço</td>
<td  >Ação</td>
<td  >Ordens</td>
</tr>
</thead>
<tbody >
<tr>
<td  >R$9,90</td>
<td  >Nenhuma</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$9,60</td>
<td  >Nenhuma</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$9,50</td>
<td  >Preço de disparo atingido</td>
<td  >Venda por R$9,00</td>
</tr>
<tr>
<td  >R$9,45</td>
<td  >Ordem executada</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$9,30</td>
<td  >Preço da ação continua caindo</td>
<td  >-</td>
</tr>
</tbody>
</table>

<p class="legenda" style="text-align:center;">Figura 3 - Fluxo de uma ordem STOP.</p>

Observe que a ordem pode ser tanto de COMPRA quanto de VENDA, o funcionamento é mesmo.

As ordens STOP podem ser utilizadas para estratégias como:

- Venda a descoberto no início de uma reversão de preço;
- Garantir um preço de recompra com lucro numa posição vendida; e
- Proteger uma posição comprada de ter prejuízo.

Algumas corretoras chamam essa ordem de ***STOP LOSS***, pois caracteriza um preço de disparo para evitar um prejuízo muito grande em uma posição comprada.

Nessa ordem são especificados:

- Preço de disparo: preço que faz o sistema enviar a ordem; e
- Preço limite: preço limite para a ordem enviada ser executada;


### Ordens START/STOP Móvel

Uma ordem móvel é uma ordem onde os preços de disparo e limite vão sendo atualizados de acordo com a movimentação dos preços no mercado.

Por exemplo:

- Você comprou uma ação por R\$10,00;
- Você estabelece um **preço de disparo** de venda em R\$9,50 para evitar ter prejuízo elevado;
- Você estabelece um **preço limite** de venda em R\$9,00;
- Você deseja que, caso o preço da ação no mercado suba para, por exemplo, R\$10,50 — **preço de início** —, os preços de disparo e limite do STOP acompanhem essa variação positiva de R\$0,50, passando a serem R\$10,00 e R\$9,50, respectivamente, aumentando a sua proteção.
- A partir daí, você quer que para cada movimentação de R$0,50 — **preço de ajuste** — o valor das suas ordens também seja ajustado nesse montante.

<table class="regularTable" id="figura4">
<thead>
<tr>
<td>Preço</td>
<td>Ação</td>
<td  >Ordens</td>
</tr>
</thead>
<tbody>
<tr>
<td  >R$10,00</td>
<td  >Disparo ajustado para R$9,50</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$10,20</td>
<td  >Disparo ajustado para R$9,50</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$10,50</td>
<td  >Disparo ajustado para R$10,00</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$10,80</td>
<td  >Disparo ajustado para R$10,00</td>
<td  >Nenhuma</td>
</tr>
<tr>
<td  >R$11,00</td>
<td  >Disparo ajustado para R$10,50</td>
<td  >Nenhuma</td>

</tr>
</tbody>
</table>

<p class="legenda" style="text-align:center;">Figura 4 - Fluxo de uma ordem STOP Móvel</p>

Ordens móveis podem ser utilizadas para:

- Ajustar os preços de compra e venda dinamicamente, passando de uma proteção de prejuízo para uma proteção de lucros caso o preço no mercado se movimente a favor da sua posição.

Nessa ordem são especificados:

- Preço de disparo: preço que faz o sistema enviar a ordem;
- Preço limite: preço limite para a ordem enviada ser executada;
- Preço de início da movimentação: preço a partir do qual o sistema ajusta a ordem; e
- Preço de ajuste: montante pelo qual a ordem será ajustada.
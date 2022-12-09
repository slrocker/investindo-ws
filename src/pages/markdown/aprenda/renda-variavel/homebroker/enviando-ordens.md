---
title: "Envio de Ordens"
date: "2019-10-18"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Renda Variável"
categorySlug: "renda-variavel"
subcategory: "Homebroker"
subcategorySlug: "homebroker"
featuredImage: "renda-variavel"
pageType: "page"
order: 5
---

Mostraremos aqui um exemplo prático do envio de uma ordem de compra de uma ação pelo *homebroker*.

O procedimento é mesmo para qualquer outro tipo de ativo negociado em Bolsa, como, por exemplo, os Fundos de Investimento Imobiliários.

O procedimento para venda também é muito semelhante.

## Processo

O processo de compra de uma ação se divide nos seguintes passos:

1. Decidir qual ação comprar;
2. Decidir o valor a ser investido;
3. Verificar o livro de ofertas;
4. Decidir por qual preço comprará;
5. Optar pelo mercado à vista ou fracionário (exclusivo para ações);
6. Preencher a boleta de ordem;
7. Checar o envio da ordem; e
8. Acompanhar a execução da ordem.

## Decidir o que Comprar

Suponha que você deseja **comprar R\$1.000,00 em ações ordinárias do Itaú Unibanco**.

O [código de negociação](/aprenda/renda-variavel/bolsa-de-valores/codigos-de-negociacao) dessas ações é ITUB3.

## Verificar o Livro de Ofertas

O [livro de ofertas](/aprenda/renda-variavel/homebroker/livro-de-ofertas) é a área do *homebroker* que mostras as ordens de compra e venda registradas no sistema da Bolsa e o último preço de negociação.

Suponha que, no momento da compra, o livro de ITUB3 fosse conforme a figura 1:

<table style="border: 1px solid black; width:60%; margin:50px auto;" id="figura1">
<thead style="border: 1px solid black; text-align:center;">
<tr>
<td colspan="4" style="border: 1px solid black;text-align:center;padding:0.3rem;">ITUB3</td>
</tr>
<tr>
<td colspan="4" style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,57</td>
</tr>
<tr>
<td colspan="2" style="border: 1px solid black;text-align:center;padding:0.3rem;">Compra</td>
<td colspan="2" style="border: 1px solid black;text-align:center;padding:0.3rem;">Venda</td>
</tr>
</thead>
<tbody style="border: 1px solid black; text-align:center;">
<tr>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Preço</td>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Qtd</td>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Qtd</td>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Preço</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,52</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">200</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">100</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,68</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,51</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">100</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">100</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,69</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,51</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">600</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">100</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,70</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,50</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">400</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">100</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,74</td>
</tr>


</tbody>
</table>

<p class="legenda" style="text-align:center;">Figura 1 - Livro de Ofertas hipotético para ITUB3.</p>


Observe que o último negócio foi a R\$33,57 e a melhor oferta de venda é a R\$33,68.

## Decidir o Preço

Nesse caso você terá duas opções:

- **Comprar a mercado**: enviando uma ordem para comprar pelo preço da melhor oferta de venda (R\$33,68); ou
- **Estabelecer um preço de compra**: enviando uma ordem para comprar a um preço determinado e aguardar que apareça alguém disposto a vender por esse preço.

Para este exemplo, vamos supor que você deseja pagar o preço do último negócio, R\$33,57.

## Mercado à Vista ou Fracionário

No caso de operação com ações, será preciso verificar se a quantidade a ser negociada se aplica ao mercado à vista (múltiplos de 100) ou no fracionário ( de 1 a 99).

Como queremos investir R\$1.000,00 e desejamos pagar R\$33,57 por cada ação, basta fazer a divisão para obter a quantidade de ações a ser comprada:

$$
Quantidade = {R\$1.000 \over R\$33,57} = 29.
$$

Para comprar 29 ações, teremos de utilizar o mercado fracinário.

### Mercado Fracionário

Para verificar o livro de ofertas de ITUB3 no fracionário, basta digitar o código ITUB3**F**:

<table style="border: 1px solid black; width:60%; margin:50px auto;" id="figura2">
<thead style="border: 1px solid black; text-align:center;">
<tr>
<td colspan="4" style="border: 1px solid black;text-align:center;padding:0.3rem;">ITUB3F</td>
</tr>
<tr>
<td colspan="4" style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,60</td>
</tr>
<tr>
<td colspan="2" style="border: 1px solid black;text-align:center;padding:0.3rem;">Compra</td>
<td colspan="2" style="border: 1px solid black;text-align:center;padding:0.3rem;">Venda</td>
</tr>
</thead>
<tbody style="border: 1px solid black; text-align:center;">
<tr>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Preço</td>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Qtd</td>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Qtd</td>
<td style="border: 1px solid black; text-align:center;padding:0.3rem;">Preço</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,52</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">2</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">9</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,64</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,51</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">50</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">60</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,65</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,49</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">6</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">99</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$34,99</td>
</tr>

<tr>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$33,48</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">99</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">10</td>
<td style="border: 1px solid black;text-align:center;padding:0.3rem;">R$35,00</td>
</tr>


</tbody>
</table>

<p class="legenda" style="text-align:center;">Figura 2 - Livro de Ofertas hipotético para ITUB3F.</p>

Observe que, como a liquidez no fracionário é menor, há uma maior variação de preço entre cada ordem registrada no sistema.

**Na maioria dos casos, ordens enviadas por preço próximo do negociado no mercado à vista são rapidamente executadas no mercado fracionário.**

## Boleta

O boleto ou boleta é a janela do *homebroker* onde se preenchem as informações da compra que desejamos executar.

No nosso exemplo, os dados seriam:

- **Ativo**: ITUB3F;
- **Operação**: COMPRA;
- **Preço**: 33,57;
- **Quantidade**: 29;
- **Agendamento**: Enviar Agora;
- **Validade**: Até Cancelar;

Como não queremos agendar a ordem para outra data, selecionamos a opção "enviar agora". Para não ter que reenviar a ordem no dia seguinte, escolhemos a opção "válida até cancelar", assim, a ordem permanecerá no sistema até ser executada totalmente.

## Acompanhamento

O acompanhamento da ordem é feito através da janela do *homebroker* chamada CESTA DE ORDENS.

![homebroker - Cesta de Ordens](./img/homebroker-ordens.jpg)

<p class="legenda" style="text-align:center;">Figura 3 - Cesta de Ordens.</p>

Após clicar em "ENVIAR" na boleta, os dados da sua ordem aparecerão na CESTA DE ORDENS.

Inicialmente , a ordem estará "em análise", onde o sistema avalia se não há nenhum erro.

A seguir, a ordem passa para "aceita pela Bolsa", e você poderá ver sua ordem aparecendo no LIVRO.

Quando sua ordem for executada, informações como a quantidade comprada e o preço serão mostradas na CESTA DE ORDENS.

**O sistema executa sua ordem à medida em que ofertas pelo preço desejado vão sendo registradas. Ou seja, a ordem pode ser executada somente parcialmente.**

Se tudo der certo, aparecerão vendedores dispostos a vender 29 ITUB3F pelo preço de R\$33,57 e sua ordem será executada totalmente.

### Ordens Parcialmente Executadas

Caso a ordem seja parcialmente executada, ela permanecerá no sistema enquanto durar sua validade.

No nosso exemplo, como se trata de uma ordem "até cancelar", mesmo que ela termine o dia apenas parcialmente executada (por exemplo, o sistema só conseguiu comprar 10 das 29 ações pretendidas), ela ainda continuará no sistema para o dia seguinte, quando pode terminar de ser executada.

### Corretagem

Algumas corretoras cobram corretagem por ordem, mesmo que ela seja parcialmente executada em dois dias diferentes.

Outras corretoras cobrarão uma corretagem para cada dia em que a ordem for parcialmente executada, ainda que tenha sido enviada apenas uma ordem.
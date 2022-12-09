---
title: "Registro de Operações"
date: "2019-06-11"
section: "Planilhas"
sectionSlug: "planilhas"
category: "Excel"
categorySlug: "excel"
subcategory: "Instruções"
subcategorySlug: "instrucoes"
featuredImage: "excel"
pageType: "page"
order: 6
---


<div class="iframe-container">
<iframe src="https://www.youtube.com/embed/nkd9ycXZSyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Visão Geral

Para registrar uma operação de COMPRA (DEPÓSITO) ou VENDA (RETIRADA), utilize o formulário de registro de operação, acessível através do menu REGISTRO > OPERAÇÃO:

![Tabela Excel - Menu Registro](../img/planilha-inicial-excel-005.jpg)

<p class="legenda" style="text-align:center">Figura 1 - Menu Registro.</p>

Você também pode utilizar o atalho CTRL+O.

O formulário consiste em campos a serem preenchidos pelo usuário com os dados da operação.

É possível navegar pelos campos utilizando a tecla TAB.

Alguns campos são desabilitados para o usuário. Quando este for o caso:

- Os campos são desnecessários; ou
- São campos de cálculo automático.

O formulário possui dois botões:

![Tabela Excel - Formulário de Registro](../img/registro-operacoes-excel-002.jpg)

<p class="legenda" style="text-align:center">Figura 2 - Botões do formulário de registro de operações.</p>

- **CALENDÁRIO**: abre um calendário para seleção da data; e
- **CONFIG**: abre um formulário de configuração.

### Configurações

![Tabela Excel - Configurações](../img/registro-operacoes-excel-003.jpg)

<p class="legenda" style="text-align:center">Figura 3 - Formulário de configurações.</p>

O formulário de configurações permite alterar as informações constantes da planilha "CONFIGURAÇÕES", onde ficam gravadas informações utilizadas no cálculo automático tais como:

- taxas de corretagem; e
- taxas da bolsa.

O usuário pode editar as informações no próprio formulário. Ao clicar em "OK", elas serão gravadas na planilha "CONFIGURAÇÕES".


![Tabela Excel - Planilha Configurações](../img/registro-operacoes-excel-004.jpg)

<p class="legenda" style="text-align:center">Figura 4 - Planilha CONFIGURAÇÕES.</p>


<div class="borderBox" style="border: 1px dashed red">

<h4>ATENÇÃO</h4>

Não utilize "." para registrar os valores.

Valores percentuais devem ser registrados como percentual. Ex: 2,00% e não 0,02.

Não deixe campos em branco. Quando for o caso, preencha com R\$0,00 ou 0,00%.

</div>

## Compra

### Ação

Para registrar a compra de uma ação:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > AÇÃO;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "C" para compra;
5. Digite a quantidade comprada;
6. Digite o código (*ticker*) da ação;
7. Digite o preço de compra;
8. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
9. Preencha os campos OUTRAS TAXAS e IRRF quando houver;
10. Confira se o cálculo do VALOR TOTAL está correto;
11. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos;

![Tabela Excel - Registro de Operação](../img/registro-operacoes-excel-005.jpg)

<p class="legenda" style="text-align:center">Figura 5 - Registro de compra de ação.</p>

12. Após clicar em OK, aguarde a mensagem de confirmação de registro:

![Tabela Excel - Confirmação](../img/registro-operacoes-excel-006.jpg)

<p class="legenda" style="text-align:center">Figura 6 - Mensagem de confirmação de registro.</p>

13. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Fundos Imobiliários (FII)

Para registrar a compra de um FII:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > FII;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "C" para compra;
5. Digite a quantidade comprada;
6. Digite o código (*ticker*) do FII;
7. Digite o preço de compra;
8. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
9. Preencha os campos OUTRAS TAXAS e IRRF quando houver;
10. Confira se o cálculo do VALOR TOTAL está correto;
11. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:

![Tabela Excel - Registro de Operação](../img/registro-operacoes-excel-007.jpg)

<p class="legenda" style="text-align:center">Figura 7 - Registro de compra de FII.</p>

12. Após clicar em OK, aguarde a mensagem de confirmação de registro:

![Tabela Excel - Confirmação](../img/registro-operacoes-excel-008.jpg)

<p class="legenda" style="text-align:center">Figura 8 - Mensagem de confirmação de registro.</p>

13. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Tesouro Direto

Para registrar a compra de um título público:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > TESOURO DIRETO;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "C" para compra;
5. Digite a quantidade comprada;
6. Selecione o tipo de título;
7. Digite a data de vencimento do título;
8. Digite o preço de compra;
9. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
10. Preencha os campos OUTRAS TAXAS e IRRF quando houver.
11. Preencha as informações de rentabilidade do título caso deseje:

O registro dos índices que remuneram os títulos é opcional e segue a seguinte lógica:

- IPCA + 5,00%%: será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>IPCA</td>
<td>+</td>
<td>5,00</td>
</tr>
</tbody>
</table>

- 120% do CDI será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>CDI</td>
<td>x</td>
<td>120</td>
</tr>
</tbody>
</table>



12. Confira se o cálculo do VALOR TOTAL está correto;
13. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:

![Tabela Excel - Registro de Operação](../img/registro-operacoes-excel-009.jpg)

<p class="legenda" style="text-align:center">Figura 9 - Registro de compra de Tesouro Direto.</p>

14. Após clicar em OK, aguarde a mensagem de confirmação de registro:

![Tabela Excel - Confirmação](../img/registro-operacoes-excel-010.jpg)

<p class="legenda" style="text-align:center">Figura 10 - Mensagem de confirmação de registro.</p>

15. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Renda Fixa

Para registrar a compra de um título de renda fixa:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > RENDA FIXA;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "D" para depósito;
5. Selecione o tipo de ativo;
6. Digite uma descrição para diferenciar o ativo;
7. Digite a data de vencimento do título quando houver;

**OBS**: caso deixe este campo em branco, ao clicar em OK, você será questionado se deseja registrar a data de vencimento do título:

Caso não deseje, clique em "NÃO"; e

Caso tenha esquecido, cliquem "SIM" e preencha a data.

8. Digite o valor investido;
9. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
10. Preencha os campos OUTRAS TAXAS e IRRF quando houver.
11. Preencha as informações de rentabilidade do título caso deseje:

O registro dos índices que remuneram os títulos é opcional e segue a seguinte lógica:

- IPCA + 5,00%%: será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>IPCA</td>
<td>+</td>
<td>5,00</td>
</tr>
</tbody>
</table>

- 120% do CDI será registrado como:

<table class="regularTable">
<thead>
<tr>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>CDI</td>
<td>x</td>
<td>120</td>
</tr>
</tbody>
</table>



12. Confira se o cálculo do VALOR TOTAL está correto;
13. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:

![Tabela Excel - Registro de Operação](../img/registro-operacoes-excel-011.jpg)

<p class="legenda" style="text-align:center">Figura 11 - Registro de compra de renda fixa.</p>

14. Após clicar em OK, aguarde a mensagem de confirmação de registro:

![Tabela Excel - Confirmação](../img/registro-operacoes-excel-012.jpg)

<p class="legenda" style="text-align:center">Figura 12 - Mensagem de confirmação de registro.</p>

15. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Fundos

Para registrar o depósito em um fundo:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > FUNDOS;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "D" para depósito;
5. Selecione o tipo de ativo;
6. Digite uma descrição para diferenciar o ativo;
7. Digite o valor depositado;
8. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
9. Preencha os campos OUTRAS TAXAS e IRRF quando houver.
10. Confira se o cálculo do VALOR TOTAL está correto;
11. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:

![Tabela Excel - Registro de Operação](../img/registro-operacoes-excel-013.jpg)

<p class="legenda" style="text-align:center">Figura 13 - Registro de compra de fundos.</p>

12. Após clicar em OK, aguarde a mensagem de confirmação de registro:

![Tabela Excel - Confirmação](../img/registro-operacoes-excel-014.jpg)

<p class="legenda" style="text-align:center">Figura 14 - Mensagem de confirmação de registro.</p>

## Venda

### Ação

Para registrar a venda de uma ação:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > AÇÃO;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "V" para venda;
5. Digite a quantidade vendida;
6. Digite o código (*ticker*) da ação;
7. Digite o preço de venda;
8. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
9. Preencha os campos OUTRAS TAXAS e IRRF quando houver;
10. Confira se o cálculo do VALOR TOTAL está correto;
11. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos;
12. Após clicar em OK, aguarde a mensagem de confirmação de registro:
13. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Fundos Imobiliários (FII)

Para registrar a venda de um FII:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > FII;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "V" para venda;
5. Digite a quantidade vendida;
6. Digite o código (*ticker*) do FII;
7. Digite o preço de venda;
8. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
9. Preencha os campos OUTRAS TAXAS e IRRF quando houver;
10. Confira se o cálculo do VALOR TOTAL está correto;
11. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:
12. Após clicar em OK, aguarde a mensagem de confirmação de registro:
13. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Tesouro Direto

Para registrar a venda de um título público:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > TESOURO DIRETO;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "V" para venda;
5. Digite a quantidade vendida;
6. Selecione o tipo de título;
7. Digite a data de vencimento do título;
8. Digite o preço de venda;
9. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
10. Preencha os campos OUTRAS TAXAS e IRRF quando houver.
11. Confira se o cálculo do VALOR TOTAL está correto;
12. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:
13. Após clicar em OK, aguarde a mensagem de confirmação de registro:
14. Verifique se os dados foram registrados corretamente na planilha 'LANÇAMENTOS".

### Renda Fixa

Para registrar a venda de um título de renda fixa:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > RENDA FIXA;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "R" para retirada;
5. Selecione o tipo de ativo;
6. Digite uma descrição para diferenciar o ativo;
7. Digite a data de vencimento do título quando houver;
8. Digite o valor resgatado;
9. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
10. Preencha os campos OUTRAS TAXAS e IRRF quando houver.
11. Confira se o cálculo do VALOR TOTAL está correto;
12. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:
13. Após clicar em OK, aguarde a mensagem de confirmação de registro:


### Fundos

Para registrar o resgate de um fundo:

1. Abra o formulário de registro;
2. Selecione o TIPO DE ATIVO > FUNDOS;
3. Digite a data da compra ou clique no "C" para abrir o calendário
4. Selecione "R" para retirada;
5. Selecione o tipo de ativo;
6. Digite uma descrição para diferenciar o ativo;
7. Digite o valor resgatado;
8. Confira se a corretagem e as taxas de CBLC e EMOLUMENTOS foram calculadas automaticamente;
9. Preencha os campos OUTRAS TAXAS e IRRF quando houver.
10. Confira se o cálculo do VALOR TOTAL está correto;
11. Clique em OK para confirmar o registro, CANCELAR para fechar o formulário ou LIMPAR para limpar os campos:
12. Após clicar em OK, aguarde a mensagem de confirmação de registro:

---
title: "Controle de Renda Fixa"
date: "2019-08-01"
section: "Aprenda"
sectionSlug: "aprenda"
category: "Finanças"
categorySlug: "financas"
subcategory: "Controle"
subcategorySlug: "controle"
featuredImage: "financas"
pageType: "page"
order: 5
---

Normalmente, você pode obter as informações de quanto possui investido, valores e rendimento nas próprias instituições onde estão os seus investimentos em Renda Fixa.

Alguns investimentos, como Debêntures, não vão lhe informar qual o valor atual do seu investimento.

Outros, como Poupança, LCI e Fundos de Investimento costumam informar os valores atuais bruto e líquidos (descontando o Imposto de Renda), ficando mais fácil para o investidor acompanhar o desempenho dos seus investimentos.

Se você deseja comparar seus investimentos em renda fixa com outros investimentos da sua carteira, você precisará passar as informações para a sua tabela de controle onde também estão os dados dos outros investimentos.

O controle de investimentos em renda fixa consiste em registrar:
- Depósitos e retiradas.

## Registro de Operações

Faça o registro de todas os seus depósitos e retiradas, especificando:

- Data;
- Tipo;
- Descrição ou nome do investimento;
- Preço; e
- Valor.

Você também pode registrar as taxas de remuneração do investimento caso queira utilizá-las para alguma coisa, assim como a data de resgate final.

Exemplo de tabela:

<div class="overflow">
<table class="controle">
<thead>
<tr class="mediumblue-bg">
<td>DATA</td>
<td>D/R</td>
<td>TIPO</td>
<td>DESCRIÇÃO</td>
<td>VENCIMENTO</td>
<td>TAXAS</td>
<td>VALOR</td>
<td>IRRF</td>
<td>ÍNDICE</td>
<td>+/x</td>
<td>%</td>
</tr>
</thead>
<tbody>
<tr>
<td>01/01/2001</td>
<td>D</td>
<td>POUPANÇA</td>
<td>POUPANÇA BANCO ABCD</td>
<td>-</td>
<td>R$0,00</td>
<td>R$10.000,00</td>
<td>R$0,00</td>
<td></td>
<td></td>
<td>0,00</td>
</tr>
<tr>
<td>01/01/2001</td>
<td>D</td>
<td>CDB</td>
<td>CDB BANCO ABCD</td>
<td>01/12/2005</td>
<td>R$0,00</td>
<td>R$10.000,00</td>
<td>R$0,00</td>
<td>CDI</td>
<td>x</td>
<td>98%</td>
</tr>
<tr>
<td>01/01/2001</td>
<td>R</td>
<td>POUPANÇA</td>
<td>POUPANÇA BANCO ABCD</td>
<td>-</td>
<td>R$0,00</td>
<td>R$5.000,00</td>
<td>R$0,00</td>
<td></td>
<td></td>
<td>0,00</td>
</tr>
</tbody>
</table>
</div>

## Controle da Custódia

Custódia vem de "conta de custódia", que é o local onde seus títulos ficam depositados na Bolsa de Valores. Muitos investidores também chamam de carteira de investimentos.

Tendo o registro das operações de compra e venda, basta utilizar as fórmulas de cálculo condicional ou a ferramenta de tabela dinâmica do Excel, para que o programa construa uma planilha com os totais.

Exemplo de tabela:

<div class="overflow">
<table class="controle">
<thead>
<tr class="lightblue-bg">
<td>DESCRIÇÃO</td>
<td>TIPO</td>
<td>VALOR APLICADO</td>
<td>%CARTEIRA</td>
<td>VALOR ATUAL</td>
<td>%CARTEIRA</td>
<td>%ALVO</p>
<td>RESULTADO</td>
<td>RESULTADO%</td>
</tr>
</thead>
<tbody>
<tr>
<td>POUPANÇA BANCO ABCD</td>
<td>POUPANÇA</td>
<td>R$5.000,00</td>
<td>33,00%</td>
<td>R$5.500,00</td>
<td>35,25%</td>
<td>30,00%</p>
<td>R$500,00</td>
<td>10,00%</td>
</tr>
<tr>
<td>CDB BANCO ABCD</td>
<td>CDB</td>
<td>R$10.000,00</td>
<td>66,00%</td>
<td>R$10.100,00</td>
<td>64,75%</td>
<td>70,00%</p>
<td>R$100,00</td>
<td>1,00%</td>
</tr>
<tr class="mediumblue-bg">
<td>TOTAL</td>
<td></td>
<td>R$15.000,00</td>
<td>100%</td>
<td>R$15.600,00</td>
<td>100%</td>
<td>
<td>R$600,00</td>
<td>3,84%</td>
</tr>
</tbody>
</table>
</div>

Nesta tabela temos:

- **DESCRIÇÃO**: Nome do investimento
- **TIPO**: Tipo de investimento
- **VALOR APLICADO**: Valor total investido no ativo
- **%CARTEIRA**: Valor percentual do investimento no ativo em relação ao total investido
- **VALOR ATUAL**: Valor atual do investimento
- **%CARTEIRA**: Valor percentual do investimento atualizado no ativo em relação ao valor investido atual
- **%ALVO**: Qual o percentual alvo que o investidor deseja atingir para aquele investimento
- **RESULTADO**: diferença entre o valor atual e o valor investido
- **RESULTADO%**: diferença percentual entre o valor atual e o valor investido
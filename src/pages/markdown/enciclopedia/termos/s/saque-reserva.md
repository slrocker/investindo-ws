---
title: "Saque-Reserva"
date: "2019-11-29"
section: "Enciclopédia"
sectionSlug: "enciclopedia"
category: "Termos"
categorySlug: "termos"
subcategory: "S"
subcategorySlug: "s"
featuredImage: "enciclopedia-featured"
pageType: "page"
order: 0
---

## O que é saque-reserva?

Saque-reserva é uma expressão utilizada pela B3 para denominar os dias úteis em operações praticadas no mercado financeiro.

A definição de dia útil é dada pelo [Conselho Monetário Nacional(CMN)](/aprenda/financas/economia/sistema-financeiro#conselho-monetário-nacional-cmn) através de suas [resoluções](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o&numero=2932).


## Dias Úteis no Mercado Financeiro

Para cálculo de operações envolvendo ativos financeiros, é a regra utilizar apenas os dias úteis, sendo adotadas as seguintes definições:

- 1 ano possui 252 dias úteis; e
- 1 mês possui 21 dias úteis.

## Como calcular os dias úteis?

Uma das maneiras mais simples de calcular os dias úteis é através do Excel utilizando a fórmula:

$$

=DIATRABALHOTOTAL(data\,1;data\,2;feriados)

$$

Onde:

- **data 1**: data de início; 
- **data 2**: data de término; e
- **feriados**: lista de feriados e dias não úteis.

A tabela contendo todos os feriados nacionais pode ser encontrada no *site* da [ANBIMA](https://www.anbima.com.br/feriados/feriados.asp).

## Inclusive e Exclusive

Quando for calcular o intervalo de dias úteis para precificar um título, informe-se quanto ao procedimento correto em relação às datas.

Há casos em que deve se considerar a data da compra e a data do resgate.

Há casos em que se considera a data de liquidação  (data em que ocorre a efetiva movimentação) e não se considera a data de resgate.

Enfim, é preciso estar atento para realizar o cálculo da maneira correta.

## Câmbio

A exceção à utilização dos dias úteis são os contratos cambiais onde são utilizados os dias corridos e:

- Um mês é considerado como tendo 30 dias; e
- Um ano é considerado como tendo 360 dias.

Como contratos de câmbio são negociados 24 horas por dia, 7 dias por semana (diferente dos demais títulos, que seguem o horário determinado pelo Banco Central para funcionamento dos mercados), faz mais sentido utilizar os dias corridos.

Os dias corridos podem ser calculados no Excel através da fórmula:

$$

=DIAS360(data\,início;data\,final;0)

$$
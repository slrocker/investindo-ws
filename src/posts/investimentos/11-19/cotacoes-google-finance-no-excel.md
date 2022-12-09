---
title: "Cotações do Google Finance no Excel"
date: "2019-11-13"
section: "Blog"
sectionSlug: "blog"
category: "Investimentos"
categorySlug: "investimentos"
subcategory: "11-19"
subcategorySlug: "11-19"
featuredImage: "cotacoes-da-bolsa-no-excel"
pageType: "page"
order: 0
---

Para obter cotações do Google Finance em uma tabela de Excel, faça o seguinte:

1. Crie uma tabela nova no Google Spreadsheets, na coluna A coloque os códigos, e na coluna B a fórmula =googlefinance(A1;”price”):

![Cotações da Bolsa no Excel](./img/googlefinance-no-excel-001.jpg)

2. Vá em Arquivo > Publicar na Web

3. Selecione “Valores separados por vírgula (.csv)” e cheque que “Republicar automaticamente quando….” esteja selecionado. Em seguida, clique em Publicar:

![Cotações da Bolsa no Excel](./img/googlefinance-no-excel-002.jpg)

4. Copie o link que apareceu.

5. Abra a tabela de Excel e crie uma planilha em branco.

6. Vá em Dados > Obter dados de Arquivos > De text/Csv:

![Cotações da Bolsa no Excel](./img/googlefinance-no-excel-003.jpg)

7. Uma janela de procura de arquivos irá abrir, cole o endereço do google como se fosse o nome do arquivo e clique em abrir.

8. Confira o layout para ver se está correto e clique em “carregar”:

![Cotações da Bolsa no Excel](./img/googlefinance-no-excel-004.jpg)

9. O Excel irá carregar os dados, mude a coluna de preço para aparecer como R\$.

![Cotações da Bolsa no Excel](./img/googlefinance-no-excel-005.jpg)

10. Depois é só usar a fórmula PROCV na planilha onde deseja ter as cotações:

$$
=PROCV(A3;Cotações!A:B;2;FALSO)
$$

10. O google atualiza as cotações na sua tabela diariamente.

##Atualizando os Dados

Para atualizar as cotações, acesse o menu Dados > Atualizar Tudo.
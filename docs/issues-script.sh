#!/bin/bash

REPO="sthefanyk/stock-flow"

criar_issue() {
  local titulo=$1
  local descricao=$2
  gh issue create --repo $REPO --title "$titulo" --body "$descricao"
}

# Gestão de Produtos
criar_issue "Gestão de Produtos - Cadastrar novo produto" \
"**Descrição:** Registrar um novo produto no sistema com todas as suas propriedades.\n**Atores:** Administrador de estoque.\n**Entidades envolvidas:** Product."

criar_issue "Gestão de Produtos - Atualizar informações do produto" \
"**Descrição:** Modificar propriedades como nome, preço, descrição e fornecedor.\n**Atores:** Administrador de estoque.\n**Entidades envolvidas:** Product."

criar_issue "Gestão de Produtos - Definir quantidade mínima de estoque" \
"**Descrição:** Estabelecer um limite mínimo de produtos em estoque para ativar alertas de reabastecimento.\n**Atores:** Administrador de estoque.\n**Entidades envolvidas:** Product."

criar_issue "Gestão de Produtos - Consultar produtos em estoque" \
"**Descrição:** Exibir uma lista de todos os produtos disponíveis com suas quantidades em estoque.\n**Atores:** Administrador de estoque.\n**Entidades envolvidas:** Product."

# Gestão de Estoque
criar_issue "Gestão de Estoque - Registrar entrada de produtos no estoque" \
"**Descrição:** Adicionar produtos ao estoque quando novos lotes forem recebidos.\n**Atores:** Administrador de estoque.\n**Entidades envolvidas:** StockMovement, Product, Batch."

criar_issue "Gestão de Estoque - Registrar saída de produtos do estoque" \
"**Descrição:** Reduzir a quantidade de produtos no estoque quando ocorrerem vendas ou perdas.\n**Atores:** Administrador de estoque.\n**Entidades envolvidas:** StockMovement, Product."

criar_issue "Gestão de Estoque - Ajustar quantidade de estoque (por contagem física)" \
"**Descrição:** Realizar ajustes no sistema após auditorias e contagens de estoque.\n**Atores:** Auditor de estoque.\n**Entidades envolvidas:** StockAdjustment, Product."

criar_issue "Gestão de Estoque - Gerar alerta de estoque baixo" \
"**Descrição:** Disparar um alerta quando a quantidade de um produto atingir o limite mínimo.\n**Atores:** Sistema.\n**Entidades envolvidas:** StockAlert, Product."

# Gestão de Vendas
criar_issue "Gestão de Vendas - Registrar nova venda" \
"**Descrição:** Criar uma nova venda e adicionar itens à venda com seus produtos e quantidades.\n**Atores:** Vendedor.\n**Entidades envolvidas:** Sale, SaleItem, Customer, Product."

criar_issue "Gestão de Vendas - Atualizar itens de uma venda" \
"**Descrição:** Adicionar, remover ou modificar itens de uma venda em andamento.\n**Atores:** Vendedor.\n**Entidades envolvidas:** Sale, SaleItem (Watched List)."

criar_issue "Gestão de Vendas - Cancelar uma venda" \
"**Descrição:** Cancelar uma venda e reverter os itens ao estoque.\n**Atores:** Vendedor.\n**Entidades envolvidas:** Sale, SaleItem, Product."

criar_issue "Gestão de Vendas - Consultar histórico de vendas" \
"**Descrição:** Exibir todas as vendas realizadas em um determinado período.\n**Atores:** Administrador de vendas.\n**Entidades envolvidas:** Sale, Customer."

criar_issue "Gestão de Vendas - Gerar relatório de vendas por produto" \
"**Descrição:** Exibir o total de produtos vendidos e o lucro gerado por cada um.\n**Atores:** Administrador de vendas.\n**Entidades envolvidas:** SalesReport, Product, SaleItem."

# Reabastecimento e Compras
criar_issue "Reabastecimento e Compras - Criar pedido de compra automático" \
"**Descrição:** Gerar um pedido de compra quando o estoque atingir o nível mínimo.\n**Atores:** Sistema.\n**Entidades envolvidas:** PurchaseOrder, Product, Supplier."

criar_issue "Reabastecimento e Compras - Atualizar status de pedido de compra" \
"**Descrição:** Modificar o status de um pedido de compra (enviado, recebido).\n**Atores:** Administrador de compras.\n**Entidades envolvidas:** PurchaseOrder, Supplier."

criar_issue "Reabastecimento e Compras - Receber nova remessa de produtos" \
"**Descrição:** Registrar a chegada de uma remessa de produtos e atualizar o estoque.\n**Atores:** Administrador de compras.\n**Entidades envolvidas:** Shipment, PurchaseOrder, Product, StockMovement."

# Integração com Fornecedores
criar_issue "Integração com Fornecedores - Receber atualizações automáticas de fornecedores" \
"**Descrição:** Receber atualizações sobre prazos de entrega e novas remessas de fornecedores.\n**Atores:** Sistema.\n**Entidades envolvidas:** Supplier, Shipment, PurchaseOrder."

criar_issue "Integração com Fornecedores - Solicitar cotação a fornecedores" \
"**Descrição:** Enviar pedidos de cotação para fornecedores com base nas necessidades de reabastecimento.\n**Atores:** Administrador de compras.\n**Entidades envolvidas:** Supplier, PurchaseOrder."

# Análise de Tendências e Relatórios
criar_issue "Análise de Tendências - Identificar produtos mais vendidos" \
"**Descrição:** Gerar um relatório dos produtos com maior volume de vendas em um período.\n**Atores:** Administrador de vendas.\n**Entidades envolvidas:** SalesReport, SalesTrend, Product, SaleItem."

criar_issue "Análise de Tendências - Observar tendências de vendas e estoque" \
"**Descrição:** Analisar a tendência de vendas e o comportamento do estoque ao longo do tempo.\n**Atores:** Administrador de vendas e estoque.\n**Entidades envolvidas:** SalesTrend, StockMovement, Product."

criar_issue "Análise de Tendências - Gerar relatório de tendências de venda e estoque" \
"**Descrição:** Emitir relatórios periódicos com base nas tendências observadas para planejamento estratégico.\n**Atores:** Administrador de vendas e estoque.\n**Entidades envolvidas:** SalesReport, StockMovement, SalesTrend, Product."

criar_issue "Análise de Tendências - Prever necessidade de reabastecimento com base em tendências de venda" \
"**Descrição:** Prever a quantidade de produtos que precisarão ser comprados com base nas tendências de venda e no estoque.\n**Atores:** Sistema.\n**Entidades envolvidas:** PurchaseOrder, SalesTrend, Product."

# Confirmação
echo "Todas as issues foram criadas no repositório $REPO!"

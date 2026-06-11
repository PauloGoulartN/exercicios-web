const produto = [
    {codigo: 4821, nome: 'caixa de som', marca: 'JBL', preco: 350.90, categoria: 'Eletrônico'},
    {codigo: 7310, nome: 'smartphone', marca: 'Samsung', preco: 2499.99, categoria: 'Eletrônico'},
    {codigo: 1598, nome: 'notebook', marca: 'Dell', preco: 4299.50, categoria: 'Informática'},
    {codigo: 8642, nome: 'mouse gamer', marca: 'Logitech', preco: 189.90, categoria: 'Informática'},
    {codigo: 2754, nome: 'teclado mecânico', marca: 'Redragon', preco: 299.90, categoria: 'Informática'},
    {codigo: 9183, nome: 'televisão 50 polegadas', marca: 'LG', preco: 3199.00, categoria: 'Eletrônico'},
    {codigo: 3467, nome: 'fone de ouvido', marca: 'JBL', preco: 220.00, categoria: 'Eletrônico'},
    {codigo: 1209, nome: 'cadeira gamer', marca: 'DXRacer', preco: 1599.99, categoria: 'Móveis'},
    {codigo: 5571, nome: 'mesa para escritório', marca: 'Politorno', preco: 799.90, categoria: 'Móveis'},
    {codigo: 6845, nome: 'impressora multifuncional', marca: 'Epson', preco: 950.75, categoria: 'Informática'},
    {codigo: 2931, nome: 'monitor 24 polegadas', marca: 'AOC', preco: 899.90, categoria: 'Informática'},
    {codigo: 7764, nome: 'air fryer', marca: 'Philips Walita', preco: 459.90, categoria: 'Eletrodoméstico'},
    {codigo: 4418, nome: 'geladeira duplex', marca: 'Brastemp', preco: 3899.00, categoria: 'Eletrodoméstico'},
    {codigo: 9932, nome: 'micro-ondas', marca: 'Electrolux', preco: 699.99, categoria: 'Eletrodoméstico'},
    {codigo: 6087, nome: 'cafeteira elétrica', marca: 'Mondial', preco: 179.90, categoria: 'Eletrodoméstico'},
    {codigo: 1573, nome: 'bicicleta aro 29', marca: 'Caloi', preco: 1890.00, categoria: 'Esporte'},
    {codigo: 8256, nome: 'bola de futebol', marca: 'Penalty', preco: 119.90, categoria: 'Esporte'},
    {codigo: 3940, nome: 'tênis esportivo', marca: 'Nike', preco: 499.99, categoria: 'Vestuário'},
    {codigo: 7102, nome: 'camiseta básica', marca: 'Adidas', preco: 89.90, categoria: 'Vestuário'},
    {codigo: 2689, nome: 'calça jeans', marca: 'Levis', preco: 249.50, categoria: 'Vestuário'},
    {codigo: 8471, nome: 'smartwatch', marca: 'Samsung', preco: 1299.00, categoria: 'Eletrônico'},
    {codigo: 5316, nome: 'tablet', marca: 'Apple', preco: 3899.90, categoria: 'Eletrônico'},
    {codigo: 9024, nome: 'roteador wifi', marca: 'TP-Link', preco: 279.90, categoria: 'Informática'},
    {codigo: 6148, nome: 'HD externo 1TB', marca: 'Seagate', preco: 420.00, categoria: 'Informática'},
    {codigo: 1835, nome: 'liquidificador', marca: 'Mondial', preco: 149.99, categoria: 'Eletrodoméstico'},
    {codigo: 7580, nome: 'ventilador', marca: 'Arno', preco: 229.90, categoria: 'Eletrodoméstico'},
    {codigo: 4703, nome: 'sofá retrátil', marca: 'Hellen', preco: 2599.90, categoria: 'Móveis'},
    {codigo: 3362, nome: 'guarda-roupa', marca: 'Moval', preco: 1799.90, categoria: 'Móveis'},
    {codigo: 8891, nome: 'mochila escolar', marca: 'Nike', preco: 199.90, categoria: 'Acessório'},
    {codigo: 2457, nome: 'garrafa térmica', marca: 'Stanley', preco: 159.90, categoria: 'Utilidades'}
]

for (p of produto){
    console.log(p.nome, p.preco)
}
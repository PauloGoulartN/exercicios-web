const pedidos = [];

const formPizza = document.getElementById('formPizza');

formPizza.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('cliente').value;
    const pedido = document.getElementById('pedido').value;
    const dtPedido = document.getElementById('data').value;
    const sabor = document.getElementById('sabor').value;
    const entregue = document.getElementById('entregue').checked;

    const tamanho = document.querySelector('input[name="tamanho"]:checked').value;

    const preco = document.getElementById('preco').value;

    const novoPedido = {
        numPed: pedido,
        data: dtPedido,
        cliente: nome,
        sabor: sabor,
        tam: tamanho,
        valor: preco,
        concluido: entregue
    };
    pedidos.push(novoPedido);
    alert("Pedido Cadastrado")
    document.getElementById('formPizza').reset()
    alert(pedidos[0].cliente);
});
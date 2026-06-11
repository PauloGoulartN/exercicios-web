let despesas = JSON.parse(localStorage.getItem("despesas")) || [];
let orcamento = Number(localStorage.getItem("orcamento")) || 0;

function formatar(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function salvarOrcamento() {
    let valor = Number(document.getElementById("orcamento").value);

    if (valor <= 0) return alert("Orçamento inválido");

    orcamento = valor;
    localStorage.setItem("orcamento", orcamento);

    document.getElementById("orcamento").value = "";

    atualizar();
}

function adicionarDespesa() {
    let nome = document.getElementById("nomeDespesa").value;
    let valor = Number(document.getElementById("valorDespesa").value);

    if (!nome || valor <= 0) return alert("Dados inválidos");

    despesas.push({
        nome,
        valor,
        data: new Date().toLocaleString("pt-BR")
    });

    localStorage.setItem("despesas", JSON.stringify(despesas));

    document.getElementById("nomeDespesa").value = "";
    document.getElementById("valorDespesa").value = "";

    atualizar();
}

function deletar(index) {
    if (!confirm("Deseja excluir esta despesa?")) return;

    despesas.splice(index, 1);
    localStorage.setItem("despesas", JSON.stringify(despesas));

    atualizar();
}

function atualizar() {
    let total = 0;
    let lista = "";

    despesas.forEach((d, i) => {
        total += d.valor;

        lista += `
        <li>
            <div>
                <strong>${d.nome}</strong><br>
                <small>${d.data}</small>
            </div>

            <div>
                ${formatar(d.valor)}
                <button class="del" onclick="deletar(${i})">✕</button>
            </div>
        </li>
        `;
    });

    document.getElementById("lista").innerHTML = lista;

    let saldo = orcamento - total;
    let porcentagem = orcamento ? (total / orcamento) * 100 : 0;

    document.getElementById("orcamentoCard").innerText = formatar(orcamento);
    document.getElementById("totalGasto").innerText = formatar(total);
    document.getElementById("saldo").innerText = formatar(saldo);

    let bar = document.getElementById("bar");
    bar.style.width = Math.min(porcentagem, 100) + "%";

    let alerta = document.getElementById("alerta");
    let texto = document.getElementById("porcentagem");

    texto.innerText = `${porcentagem.toFixed(0)}% utilizado`;

    if (porcentagem >= 100) {
        bar.style.background = "#ff4d4d";
        alerta.innerText = "🚨 Orçamento estourado";
        alerta.style.color = "#ff4d4d";
    } else if (porcentagem >= 80) {
        bar.style.background = "#ffa500";
        alerta.innerText = "⚠️ Atenção: 80% utilizado";
        alerta.style.color = "#ffa500";
    } else {
        bar.style.background = "#4f8cff";
        alerta.innerText = "✔ Tudo sob controle";
        alerta.style.color = "#51cf66";
    }
}

atualizar();
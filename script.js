 const vagas = [];
  function criarVaga() {
    const nome = document.getElementById("nomeVaga").value;
    const descricao = document.getElementById("descricaoVaga").value;
    const data = document.getElementById("dataVaga").value;
    if (nome === "" || descricao === "" || data === "") {
      alert("Preencha todos os campos!");
      return;
    }
    const novaVaga = {
      nome: nome,
      descricao: descricao,
      data: data,
      candidatos: []
    };
    vagas.push(novaVaga);
    document.getElementById("nomeVaga").value = "";
    document.getElementById("descricaoVaga").value = "";
    document.getElementById("dataVaga").value = "";
    listarVagas();
  }
  function listarVagas() {
    const div = document.getElementById("listaVagas");
    div.innerHTML = "";
    vagas.forEach((vaga, index) => {
      const vagaDiv = document.createElement("div");
      vagaDiv.className = "vaga";
      vagaDiv.innerHTML = `
        <strong>Índice:</strong> ${index} <br>
        <strong>Nome:</strong> ${vaga.nome} <br>
        <strong>Descrição:</strong> ${vaga.descricao} <br>
        <strong>Data Limite:</strong> ${vaga.data} <br>
        <strong>Candidatos (${vaga.candidatos.length}):</strong>
        <ul>
          ${vaga.candidatos.map(c => `<li>${c}</li>`).join("")}
        </ul>
      `;
      div.appendChild(vagaDiv);
    });
  }
  function inscreverCandidato() {
    const nomeCandidato = document.getElementById("nomeCandidato").value;
    const indice = document.getElementById("indiceVaga").value;
    if (!vagas[indice]) {
      alert("Vaga inválida!");
      return;
    }
    vagas[indice].candidatos.push(nomeCandidato);
    document.getElementById("nomeCandidato").value = "";
    document.getElementById("indiceVaga").value = "";
    listarVagas();
  }
  function excluirVaga() {
    const indice = document.getElementById("indiceExcluir").value;
    if (!vagas[indice]) {
      alert("Vaga inválida!");
      return;
    }
    vagas.splice(indice, 1);
    document.getElementById("indiceExcluir").value = "";
    listarVagas();
  }
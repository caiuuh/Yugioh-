function pesquisar() {

  // 1. Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // 2. Obtém o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // 3. Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem de erro
    section.innerHTML = "<p>Precisamos digitar o nome da carta</p>";
    return; // Interrompe a função
  }

  // 4. Converte o termo de pesquisa para minúsculas para facilitar a comparação
  campoPesquisa = campoPesquisa.toLowerCase();

  // 5. Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // 6. Itera sobre cada carta no array de cartas
  for (let dado of cartas) {
    // 7. Verifica se o termo de pesquisa está presente no nome, tipo ou descrição da carta
    if (dado.nome.toLowerCase().includes(campoPesquisa) ||
        dado.tipo.toLowerCase().includes(campoPesquisa) ||
        dado.descricao.toLowerCase().includes(campoPesquisa)) {
      // 8. Se encontrar uma correspondência, cria o HTML para exibir a carta
      resultados += `
        <div class="item-resultado">
          <h2><a target="_blank">${dado.nome}</a></h2>
          <h2>${dado.tipo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank"> Mais informações</a>
        </div>
      `;
    }
  }

  // 9. Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
  section.innerHTML = resultados;
}
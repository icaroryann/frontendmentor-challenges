fetch('data.json')
  .then(response => response.json())
  .then(dados => {
    // Inserir os dados na página
    const ul = document.querySelector('.component');
    if (ul && Array.isArray(dados)) {
      ul.innerHTML = '';
      let soma = 0;
      dados.forEach(item => {
        soma += item.score;
        const li = document.createElement('li');
        li.className = item.category.toLowerCase();
        li.innerHTML = `
          <img src="assets/images/icon-${item.category.toLowerCase()}.svg" alt="${item.category} icon">
          <h3>${item.category}</h3>
          <div class="score"><p><strong>${item.score}</strong> / 100</p></div>
        `;
        ul.appendChild(li);
      });
      // Calcular média e mostrar na div.res
      const media = Math.round(soma / dados.length);
      const resDiv = document.querySelector('.res > span > strong');
      if (resDiv) {
        resDiv.textContent = media;
      }
    }
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));

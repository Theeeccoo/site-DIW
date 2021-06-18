const API_KEY = `ba8e60767505ad81085e5be6a17a6f1f`;

window.onload = () =>{
    let id = location.href.split('#')[1];

    var xhr = new XMLHttpRequest();
    xhr.onload = exibeInfoFilme;
    xhr.onerror = error;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
    xhr.send();
}

function exibeInfoFilme(){
    let conteudoInfo = document.getElementById('conteudo');
    let dado = JSON.parse(this.responseText);
    let data = new Date(dado.release_date);

    conteudoInfo.innerHTML = `
    <div class="c-2">
        <h1>${dado.original_title}</h1>
        <img src="https://image.tmdb.org/t/p/original/${dado.poster_path}" alt="Poster do filme: ${dado.original_title}" />
        <p>Data de Lançamento: ${data.toLocaleDateString()}</p>
        <h3>${dado.original_title}</h3>
        <p>
        ${dado.overview}
        </p>
        <p><strong>Produzido por:</strong> "${dado.production_companies[0].name}"</p>
        <p><strong>Avaliação:</strong> ${dado.vote_average} -> TheMovieDB</p>
        <span>${dado.genres[0].name}</span>
        <a href="https://www.themoviedb.org/movie/${dado.id}"" target="_blank"><button class="btn-informacoes">Mais informações</button></a>
    </div>
    `
}
function error(){
    console.log('Erro', err);
}
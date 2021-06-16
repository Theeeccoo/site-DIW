const API_KEY = `ba8e60767505ad81085e5be6a17a6f1f`;

function exibeFilme(){
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    console.log(dados);
    for(let i = 0; i < dados.results.length; i++){
        let noticia = dados.results[i];

            texto += `
            <div class="card">
                <div class="imgBx">
                    <img src="https://image.tmdb.org/t/p/original/${noticia.poster_path}" alt="Poster do filme: ${noticia.original_title}" />
                </div>
                <div class="content">
                    <h2>${noticia.original_title}</h2>
                    <p>
                        ${noticia.overview}
                    </p>
                    <a href="../layouts/filme.html#${noticia.id}">Ver mais</a>
                </div>
            </div>
            `;

    };
    divTela.innerHTML = texto;
}
function error(err){
    console.log('Erro', err);
}

function executaPesquisa(){
    var info = document.getElementById('pesquisa').value
    var xhr = new XMLHttpRequest();
    xhr.onload = exibeFilme;
    xhr.onerror = error;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?query=${info}&api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

document.getElementById('pesquisa').addEventListener('keypress', executaPesquisa);
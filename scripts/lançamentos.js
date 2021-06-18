const API_KEY = `ba8e60767505ad81085e5be6a17a6f1f`;
function mostrarPesquisa(dados) {
    let conteudoCarousel = document.getElementById(`conteudo-carousel`);
    let texto = '';
    let teste = '';
    console.log(dados);
    for (let i = 0; i <= 4; i++) {
        let noticias = dados.results[i];
        let data = new Date(noticias.release_date);

        texto += `
        <div class="carousel-item">
            <h1 class="lancamentos" id="lancamentos">LANÇAMENTOS</h1>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">

                <img src="https://image.tmdb.org/t/p/original/${noticias.poster_path}" alt="Poster do filme: ${noticias.original_title}" />

                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="container-info">
                        <h2>${noticias.original_title}</h2>

                        <p><strong>Sinopse:</strong> ${noticias.overview}
                        </p>
                        <span><strong>Data lançamento:</strong> ${data.toLocaleDateString()}</span>
                                <div class="container-avaliacao">
                                    <h5><strong>Avaliação:</strong></h5>
                                    <div class="rating">
                                    <p>${noticias.vote_average} -> TheMovieDB</p>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
        `;
        teste = `<div class="carousel-item active">
        <h1 class="lancamentos">LANÇAMENTOS</h1>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <img scr="../images/shang_chi.jpeg" alt="Poster shangChi" />
                            </div>

                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="container-info">
                                    <h2>SHANG-CHI e a lenda dos dez aneis</h2>
                                    <p><strong>Sinopse:</strong> Shang-Chi é um jovem chinês criado por seu pai em
                                        reclusão, sendo treinado em artes marciais. Quando ele tem a chance de entrar em
                                        contato com o resto do mundo, logo percebe que seu pai não é o humanitário que
                                        dizia ser, vendo-se obrigado a se rebelar.
                                    </p>
                                    <span><strong>Ano:</strong> 03/09/2021</span>
                                        <h5><strong>Avaliação:</strong></h5>
                                        <div class="rating">
                                            <p>8.7 -> TheMovieDB</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
        </div>`
    }
    conteudoCarousel.innerHTML = texto + teste;
}

function erro(err) {
    console.log('Erro', err);
}


var xhr = new XMLHttpRequest;
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dados = JSON.parse(this.responseText);
        mostrarPesquisa(dados);
    }
};
xhr.onerror = erro;
xhr.open('GET', `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1`, true);
xhr.send();




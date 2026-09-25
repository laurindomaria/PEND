/* ==============================
   NOTÍCIAS
============================== */

const botaoNoticias = document.querySelector("#btnNoticias");
const resultadoNoticias = document.querySelector("#resultadoNoticias");


async function buscarNoticias() {

    const apiKey = "190a9191cb1f4cdb8250967f45f70bdf";

    const url =
        `https://newsapi.org/v2/everything?q=negócios&language=pt&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

    try {

        resultadoNoticias.innerHTML = `
            <p>Consultando notícias...</p>
        `;


        const resposta = await fetch(url);

        const dados = await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.message || "Não foi possível consultar a API."
            );

        }


        if (
            !dados.articles ||
            dados.articles.length === 0
        ) {

            resultadoNoticias.innerHTML = `
                <p>
                    Nenhuma notícia encontrada.
                </p>
            `;

            return;
        }


        resultadoNoticias.innerHTML = `

            <h3>
                Principais notícias de negócios
            </h3>

            ${dados.articles.map((noticia) => `

                <article class="noticia-api">

                    ${
                        noticia.urlToImage
                            ? `
                                <img
                                    src="${noticia.urlToImage}"
                                    alt="Imagem da notícia"
                                >
                              `
                            : ""
                    }

                    <div>

                        <h4>
                            ${noticia.title}
                        </h4>

                        <p>
                            ${
                                noticia.description ||
                                "Descrição não disponível."
                            }
                        </p>

                        <a
                            href="${noticia.url}"
                            target="_blank"
                        >
                            Ler notícia
                        </a>

                    </div>

                </article>

            `).join("")}

        `;

    } catch (erro) {

        resultadoNoticias.innerHTML = `

            <p>
                Não foi possível consultar as notícias.
            </p>

            <p>
                <strong>Erro:</strong>
                ${erro.message}
            </p>

        `;

        console.error(
            "Erro na NewsAPI:",
            erro
        );

    }

}


/* ==============================
   BOTÃO DE NOTÍCIAS
============================== */

botaoNoticias.addEventListener(
    "click",
    buscarNoticias
);


/* ==============================
   CLIMA
============================== */

const botaoClima = document.querySelector("#btnClima");
const resultadoClima = document.querySelector("#resultadoClima");


async function buscarClima() {

    const latitude = -21.4678;
    const longitude = -47.0028;


    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&timezone=America%2FSao_Paulo`;


    try {

        resultadoClima.innerHTML = `
            <p>
                Consultando o clima...
            </p>
        `;


        const resposta = await fetch(url);


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível consultar a API."
            );

        }


        const dados = await resposta.json();


        const temperatura =
            dados.current.temperature_2m;

        const umidade =
            dados.current.relative_humidity_2m;

        const vento =
            dados.current.wind_speed_10m;


        resultadoClima.innerHTML = `

            <h3>
                Clima atual em Mococa
            </h3>

            <p>
                <strong>Temperatura:</strong>
                ${temperatura} °C
            </p>

            <p>
                <strong>Umidade:</strong>
                ${umidade}%
            </p>

            <p>
                <strong>Velocidade do vento:</strong>
                ${vento} km/h
            </p>

        `;

    } catch (erro) {

        resultadoClima.innerHTML = `

            <p>
                Não foi possível consultar o clima.
                Tente novamente.
            </p>

        `;

        console.error(
            "Erro no clima:",
            erro
        );

    }

}


/* ==============================
   BOTÃO DO CLIMA
============================== */

botaoClima.addEventListener(
    "click",
    buscarClima
);
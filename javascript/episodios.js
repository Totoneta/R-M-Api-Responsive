document.addEventListener("DOMContentLoaded", function () {
    const episodios = document.querySelector(".episodios")

    function mostrarEpisodios(datos) {
        let numParaBusqueda = `${datos.id}`

        /* Crear el elemento que contendrá a cada episodio individualmente */
        let divEpisodio = document.createElement("div");
        divEpisodio.classList.add("episodio");
        let divenEpisodio = document.createElement("div");
        divenEpisodio.classList.add("datos-episodio")
        let nombreEpisodio = document.createElement("h3");
        let numeroEpisodio = document.createElement("span");
        let estrenoEpisodio = document.createElement("p");
        divEpisodio.setAttribute("numdeepisodio", numParaBusqueda);

        /* Texto */
        nombreEpisodio.textContent = `Nombre: ${datos.name}`
        numeroEpisodio.textContent = `Número: ${datos.id}`
        estrenoEpisodio.textContent = `Estreno: ${datos.air_date}`

        /* Unír todo lo que se creó al div */
        divenEpisodio.appendChild(nombreEpisodio);
        divenEpisodio.appendChild(numeroEpisodio);
        divenEpisodio.appendChild(estrenoEpisodio);
        divEpisodio.appendChild(divenEpisodio)
        episodios.appendChild(divEpisodio);

    };

    /* Barra de búsqueda */
    const inputValor = document.querySelector(".input-buscar");
    const inputBtn = document.querySelector(".btn-buscar");

    function barraBusqueda(datos) {
        inputBtn.addEventListener("click", (e) => {
            e.preventDefault()
            const valorBusqueda = inputValor.value;

            if (valorBusqueda <= 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Introduzca un número de capítulo válido.",
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else {
                datos.forEach((episodio) => {
                    const episodioElemento = document.querySelector(`[numdeepisodio="${episodio.id}"]`);

                    if (valorBusqueda === episodioElemento.getAttribute("numdeepisodio")) {
                        episodioElemento.classList.remove("none");
                    } else {
                        episodioElemento.classList.add("none");
                    };
                });
            }
        });
    };


    /*const datosindpersonajes = personaje.name.toLowerCase();
    const personajeElemento = document.querySelector(`[nombre="${personaje.name.toLowerCase().split(" ")}"]`);
    if (datosindpersonajes.includes(valorBusqueda)) {
        personajeElemento.style.display = "flex";
    } else {
        personajeElemento.style.display = "none";
    };


/* Llamada a la Api de Rick&Morty */
    let url = "https://rickandmortyapi.com/api/episode"
    fetch(url)
        .then(respuesta => respuesta.json())
        .then((data) => {
            const datos = data.results
            datos.forEach((e) => {
                mostrarEpisodios(e);
            });
            barraBusqueda(datos)
        })
        .catch(error => console.log(error))
})
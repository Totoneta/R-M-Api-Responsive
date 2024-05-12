document.addEventListener("DOMContentLoaded", function () {
    /* Personajes */
    const personajes = document.querySelector(".personajes");
    const personajeDom = document.querySelectorAll(".personaje")

    function mostrarPersonajes(datos) {
        let nomDePersSinEspacios = `${datos.name.toLowerCase().split(" ")}`
        /* Crear el elemento que contendrá a cada personaje individualmente */
        let divPersonaje = document.createElement("div");
        divPersonaje.classList.add("personaje");
        let imgPersonaje = document.createElement("img");
        let divenPersonaje = document.createElement("div");
        divenPersonaje.classList.add("datos-personaje");
        let nomPersonaje = document.createElement("h3");
        let estadoPersonaje = document.createElement("span");
        let especiePersonaje = document.createElement("p");

        divPersonaje.setAttribute("nombre", (nomDePersSinEspacios))



        /* Texto */
        imgPersonaje.src = `${datos.image}`
        nomPersonaje.textContent = `${datos.name}`
        estadoPersonaje.textContent = `${datos.status}`
        especiePersonaje.textContent = `${datos.species}`

        /* Status styles */
        if (datos.status === "Alive") {
            estadoPersonaje.classList.add("alive")
        } else if (datos.status === "Dead") {
            estadoPersonaje.classList.add("dead")
        } else if (datos.status === "unknown") {
            estadoPersonaje.classList.add("unknown")
        }

        /* Species styles */
        if (datos.species === "Human") {
            especiePersonaje.classList.add("humano")
        } else if (datos.species === "Alien") {
            especiePersonaje.classList.add("alien")
        } else if (datos.species === "unknown") {
            especiePersonaje.classList.add("unknown")
        }

        /* Unír todo lo que se creó al div */
        divPersonaje.appendChild(imgPersonaje);
        divenPersonaje.appendChild(nomPersonaje);
        divenPersonaje.appendChild(estadoPersonaje);
        divenPersonaje.appendChild(especiePersonaje);
        divPersonaje.appendChild(divenPersonaje);
        personajes.appendChild(divPersonaje);

    };

    /* Barra de búsqueda */
    const inputValor = document.querySelector(".input-buscar");
    const inputBtn = document.querySelector(".btn-buscar");

    function barraBusqueda(datos) {
        inputBtn.addEventListener("click", (e) => {
            e.preventDefault()
            const valorBusqueda = inputValor.value.toLowerCase();
            datos.forEach((personaje) => {
                const datosindpersonajes = personaje.name.toLowerCase();
                const personajeElemento = document.querySelector(`[nombre="${personaje.name.toLowerCase().split(" ")}"]`);
                if (datosindpersonajes.includes(valorBusqueda)) {
                    personajeElemento.style.display = "flex";
                } else {
                    personajeElemento.style.display = "none";
                };
            });
        });
    };


    /* Llamada a la Api de Rick&Morty */
    let url = "https://rickandmortyapi.com/api/character"
    fetch(url)
        .then(respuesta => respuesta.json())
        .then((data) => {
            const datos = data.results
            datos.forEach((e) => {
                mostrarPersonajes(e);
            });
            barraBusqueda(datos)
        })
        .catch(error => console.log(`Error de llamada a la API: ${error}`))

});











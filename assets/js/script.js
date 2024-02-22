// Creamos la clase Multimedia (Padre)
class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

//creamos la clase hija

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  get id() {
    return this._id;
  }

  playMultimedia() {
    modulo.agregarVideoPublic(this._url, this._id);
  }

  setInicio(tiempo) {
    this.id.setAtribute("src", `${this.url}?start=${tiempo}`);
  }
}

//Implementar el Patron de Modulo de la IIFE

let modulo = (() => {
  let agregarVideoPrivate = (url, id) => {
    let element = document.getElementById(id);
    element.setAttribute("src", url);
    }


    return {
      agregarVideoPublic: (url, id) => {
        agregarVideoPrivate(url, id);
      },
    };
    



})();

//Instanciar

let pelicula = new Reproductor(
  "https://www.youtube.com/embed/iQdfp7cK17Q?si=YU_2Y6thoRTCxssD",
  "peliculas"
);


let serie = new Reproductor(
  "https://www.youtube.com/embed/zsjRLJsqI8g?si=gkmeikwZhAtTOy17", "series"
);


let musica = new Reproductor("https://www.youtube.com/embed/6ZfuNTqbHE8", "musica");

// llamar a los metodos

pelicula.playMultimedia();
serie.playMultimedia()
musica.playMultimedia()

//llamar al metodo SetInicio

pelicula.setInicio(10)
serie.setInicio(15)
musica.setInicio(10)

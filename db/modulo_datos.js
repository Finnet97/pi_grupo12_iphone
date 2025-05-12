const data = {
  usuario: {
    email: "usuario@ejemplo.com",
    usuario: "usuarioDemo",
    password: "password123",
    fechaNacimiento: "1990-05-15",
    documento: "12345678",
    fotoPerfil: "/images/users/default-image.png"
  },
  productos: [
    {
      nombre: "Rolex Submariner",
      imagen: "/images/products/img-rolex-submariner.jpg",
      descripcion: "Reloj de buceo icónico con caja de acero inoxidable y bisel giratorio unidireccional.",
      comentarios: [
        {
          usuario: "MarianoL",
          foto: "/images/users/def_user.jpg",
          texto: "Impresionante calidad, lo uso todos los días y sigue como nuevo."
        },
        {
          usuario: "Vale93",
          foto: "/images/users/def_user.jpg",
          texto: "Un clásico atemporal, vale cada centavo."
        },
        {
          usuario: "LucasG",
          foto: "/images/users/def_user.jpg",
          texto: "Lo heredé de mi padre, y todavía funciona perfecto. Increíble."
        }
      ]
    },
    {
      nombre: "Omega Speedmaster",
      imagen: "/images/products/speedmaster.png",
      descripcion: "Cronógrafo legendario conocido como el 'Moonwatch', usado en misiones espaciales.",
      comentarios: [
        {
          usuario: "SofiWatches",
          foto: "/images/users/def_user.jpg",
          texto: "Es hermoso, muy cómodo y con una historia única."
        },
        {
          usuario: "TomiTime",
          foto: "/images/users/def_user.jpg",
          texto: "Mi favorito del día a día. El cronógrafo es muy preciso."
        },
        {
          usuario: "Rami86",
          foto: "/images/users/def_user.jpg",
          texto: "Ideal para quienes valoran la tradición y la precisión suiza."
        }
      ]
    },
    {
      nombre: "Tag Heuer Carrera",
      imagen: "/images/products/img-tag-heuer-carrera.jpg",
      descripcion: "Diseño deportivo inspirado en las carreras, con cronógrafo y cristal de zafiro.",
      comentarios: [
        {
          usuario: "AnaSpeed",
          foto: "/images/users/def_user.jpg",
          texto: "El diseño deportivo es lo que más me gusta. Elegante pero informal."
        },
        {
          usuario: "NicoDR",
          foto: "/images/users/def_user.jpg",
          texto: "Muy cómodo en la muñeca, y se ve increíble."
        }
      ]
    },
    {
      nombre: "Seiko Prospex",
      imagen: "/images/products/img-seiko-prospex.jpg",
      descripcion: "Reloj japonés automático resistente al agua, ideal para aventuras extremas.",
      comentarios: [
        {
          usuario: "FedeAventura",
          foto: "/images/users/def_user.jpg",
          texto: "Lo usé para bucear en Brasil, ni una falla. Lo recomiendo fuerte."
        },
        {
          usuario: "MatiTech",
          foto: "/images/users/def_user.jpg",
          texto: "Gran relación precio-calidad. Seiko nunca decepciona."
        },
        {
          usuario: "Juli87",
          foto: "/images/users/def_user.jpg",
          texto: "Un tanque en la muñeca. Resistente y con estilo."
        }
      ]
    },
    {
      nombre: "Casio G-Shock",
      imagen: "/images/products/img-casio-gshock.jpg",
      descripcion: "Reloj digital ultrarresistente con funciones múltiples y estilo urbano.",
      comentarios: [
        {
          usuario: "UrbanMan",
          foto: "/images/users/def_user.jpg",
          texto: "Lo uso para entrenar y para salir. No lo cambio por nada."
        },
        {
          usuario: "SantiB",
          foto: "/images/users/def_user.jpg",
          texto: "Muy práctico, resistente y con un diseño que llama la atención."
        }
      ]
    },
    {
      nombre: "Tissot PRX",
      imagen: "/images/products/img-tissot-prx.jpg",
      descripcion: "Diseño retro con movimiento suizo y brazalete integrado.",
      comentarios: [
        {
          usuario: "LuchoRetro",
          foto: "/images/users/def_user.jpg",
          texto: "Un guiño al pasado con tecnología moderna. Me encanta."
        },
        {
          usuario: "EmiZ",
          foto: "/images/users/def_user.jpg",
          texto: "El brazalete es muy cómodo y el diseño es precioso."
        },
        {
          usuario: "CamiB",
          foto: "/images/users/def_user.jpg",
          texto: "Luce muy bien con ropa casual o elegante."
        }
      ]
    },
    {
      nombre: "Citizen Eco-Drive",
      imagen: "/images/products/img-citizen-ecodrive.jpg",
      descripcion: "Reloj solar que no necesita cambio de batería, con estilo clásico.",
      comentarios: [
        {
          usuario: "LeoGreen",
          foto: "/images/users/def_user.jpg",
          texto: "Me encanta no tener que cambiar la batería nunca."
        },
        {
          usuario: "NatyEco",
          foto: "/images/users/def_user.jpg",
          texto: "Elegante, cómodo y ecológico. 10 puntos."
        }
      ]
    },
    {
      nombre: "Breitling Navitimer",
      imagen: "/images/products/img-breitling-navitimer.jpg",
      descripcion: "Reloj para pilotos con regla de cálculo y diseño robusto.",
      comentarios: [
        {
          usuario: "PilotMax",
          foto: "/images/users/def_user.jpg",
          texto: "Lo uso en vuelo. Precisión y estilo en uno solo."
        },
        {
          usuario: "JulianRelojes",
          foto: "/images/users/def_user.jpg",
          texto: "La regla de cálculo es un detalle espectacular."
        },
        {
          usuario: "EugeT",
          foto: "/images/users/def_user.jpg",
          texto: "Robusto pero refinado. Uno de mis favoritos."
        }
      ]
    },
    {
      nombre: "Hamilton Khaki Field",
      imagen: "/images/products/img-hamilton-khaki.jpg",
      descripcion: "Estética militar con precisión suiza, ideal para uso casual.",
      comentarios: [
        {
          usuario: "AndyK",
          foto: "/images/users/def_user.jpg",
          texto: "Tiene una onda militar muy copada. Se nota la calidad."
        },
        {
          usuario: "FlorTime",
          foto: "/images/users/def_user.jpg",
          texto: "Perfecto para el día a día, sin exageraciones."
        },
        {
          usuario: "BrunoC",
          foto: "/images/users/def_user.jpg",
          texto: "Buen precio y excelente fabricación."
        }
      ]
    },
    {
      nombre: "Daniel Wellington Classic",
      imagen: "/images/products/img-dw-classic.jpg",
      descripcion: "Minimalista y elegante, perfecto para ocasiones formales.",
      comentarios: [
        {
          usuario: "ClauElegance",
          foto: "/images/users/def_user.jpg",
          texto: "Sencillo, pero con mucha presencia. Ideal para reuniones."
        },
        {
          usuario: "TatiDW",
          foto: "/images/users/def_user.jpg",
          texto: "Lindo diseño, combina con todo."
        }
      ]
    }
  ]    
};

module.exports = data;
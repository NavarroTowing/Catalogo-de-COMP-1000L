
// ========================================
// PC ATLAS 2.0
// Catalogo educativo interactivo
// HTML + CSS + JavaScript
// ========================================

// 1. COMPONENTES DE COMPUTADORAS

const componentes = [
    {
        id: 1,
        nombre: "Procesador (CPU)",
        simbolo: "CPU",
        categoria: "Procesamiento",
        descripcion: "Ejecuta instrucciones y procesa datos.",
        especificaciones: [
            "Nucleos e hilos",
            "Frecuencia en GHz",
            "Memoria cache",
            "Socket del procesador"
        ],
        compatibilidad: "Verificar socket, chipset y BIOS."
    },
    {
        id: 2,
        nombre: "Memoria RAM",
        simbolo: "RAM",
        categoria: "Memoria",
        descripcion: "Almacena temporalmente los datos del sistema.",
        especificaciones: [
            "DDR4 o DDR5",
            "Capacidad en GB",
            "Velocidad en MT/s",
            "Latencia CAS"
        ],
        compatibilidad: "Verificar tipo DDR y capacidad soportada."
    },
    {
        id: 3,
        nombre: "Placa base",
        simbolo: "MB",
        categoria: "Conectividad",
        descripcion: "Interconecta los componentes de la PC.",
        especificaciones: [
            "Socket",
            "Chipset",
            "Ranuras PCIe",
            "Puertos SATA y M.2"
        ],
        compatibilidad: "Verificar CPU, RAM, gabinete y fuente."
    },
    {
        id: 4,
        nombre: "Unidad SSD",
        simbolo: "SSD",
        categoria: "Almacenamiento",
        descripcion: "Almacena informacion mediante memoria flash.",
        especificaciones: [
            "SATA o NVMe",
            "Capacidad GB/TB",
            "Lectura y escritura",
            "Resistencia TBW"
        ],
        compatibilidad: "Verificar interfaz y formato fisico."
    },
    {
        id: 5,
        nombre: "Tarjeta grafica (GPU)",
        simbolo: "GPU",
        categoria: "Procesamiento",
        descripcion: "Procesa graficos y operaciones paralelas.",
        especificaciones: [
            "VRAM",
            "PCI Express",
            "Consumo electrico",
            "HDMI y DisplayPort"
        ],
        compatibilidad: "Verificar espacio, PSU y conectores."
    },
    {
        id: 6,
        nombre: "Fuente de poder",
        simbolo: "PSU",
        categoria: "Energia",
        descripcion: "Distribuye energia a los componentes.",
        especificaciones: [
            "Potencia en W",
            "Eficiencia",
            "Conectores ATX",
            "Protecciones electricas"
        ],
        compatibilidad: "Calcular potencia y conectores requeridos."
    },
    {
        id: 7,
        nombre: "Disco duro",
        simbolo: "HDD",
        categoria: "Almacenamiento",
        descripcion: "Almacena datos mediante platos magneticos.",
        especificaciones: [
            "Capacidad TB",
            "RPM",
            "Interfaz SATA",
            "Memoria cache"
        ],
        compatibilidad: "Verificar puertos SATA y espacio."
    },
    {
        id: 8,
        nombre: "Refrigeracion",
        simbolo: "FAN",
        categoria: "Energia",
        descripcion: "Disipa el calor de los componentes.",
        especificaciones: [
            "Aire o liquido",
            "RPM",
            "Flujo CFM",
            "Nivel sonoro"
        ],
        compatibilidad: "Verificar socket y espacio del gabinete."
    },
    {
        id: 9,
        nombre: "Tarjeta de red",
        simbolo: "NIC",
        categoria: "Conectividad",
        descripcion: "Conecta la computadora a una red.",
        especificaciones: [
            "Ethernet o Wi-Fi",
            "Velocidad",
            "Direccion MAC",
            "PCIe o USB"
        ],
        compatibilidad: "Verificar interfaz y controladores."
    }
];

// 2. GAMING PCS
// Las imagenes se cargan desde Newegg.
// Son referencias educativas de modelos anteriores.

const gamingPCs = [
    {
        id: 101,
        nombre: "ABS Stratos Aqua RTX 4070",
        categoria: "Gaming PC",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-377-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360377C",
        descripcion: "Computadora gaming con procesador Intel y tarjeta grafica dedicada.",
        cpu: "Intel Core i5-13400F",
        gpu: "NVIDIA GeForce RTX 4070",
        ram: "16 GB DDR5",
        almacenamiento: "1 TB NVMe SSD",
        componentes: [
            "Intel Core i5-13400F",
            "GeForce RTX 4070",
            "16 GB DDR5 5600",
            "SSD NVMe 1 TB",
            "PSU 700 W 80 Plus Gold"
        ]
    },
    {
        id: 102,
        nombre: "ABS Stratos Aqua RTX 4060 Ti",
        categoria: "Gaming PC",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-464-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360464C",
        descripcion: "Sistema gaming con memoria DDR5 y GPU NVIDIA.",
        cpu: "Intel Core i5-14400F",
        gpu: "NVIDIA GeForce RTX 4060 Ti",
        ram: "32 GB DDR5",
        almacenamiento: "1 TB NVMe SSD",
        componentes: [
            "Intel Core i5-14400F",
            "GeForce RTX 4060 Ti 8 GB",
            "32 GB DDR5 6000",
            "SSD NVMe 1 TB",
            "PSU 600 W 80 Plus Gold"
        ]
    },
    {
        id: 103,
        nombre: "ABS Stratos Aqua RTX 4080",
        categoria: "Gaming PC",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-262-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360262",
        descripcion: "Configuracion de alto rendimiento con refrigeracion liquida.",
        cpu: "Intel Core i7-12700F",
        gpu: "NVIDIA GeForce RTX 4080",
        ram: "16 GB DDR4",
        almacenamiento: "1 TB NVMe SSD",
        componentes: [
            "Intel Core i7-12700F",
            "GeForce RTX 4080",
            "16 GB DDR4 3200",
            "SSD NVMe 1 TB",
            "Refrigeracion liquida AIO 240 mm"
        ]
    }
];

// 3. TECNOLOGIAS DE PANTALLAS

const pantallas = [
    {
        id: "ips",
        nombre: "LCD IPS",
        simbolo: "IPS",
        categoria: "LCD",
        descripcion: "Panel LCD In-Plane Switching, destacado por sus angulos de vision y reproduccion de color.",
        fortalezas: "Angulos de vision, color y uso general.",
        limitaciones: "Contraste normalmente inferior al VA.",
        usos: "Diseño, oficina y gaming.",
        contraste: "Moderado",
        movimiento: "Bueno; depende del modelo",
        color: "Generalmente bueno",
        iluminacion: "Requiere retroiluminacion",
        especificaciones: [
            "Cristales liquidos",
            "Retroiluminacion",
            "Buenos angulos de vision",
            "Amplia variedad de frecuencias"
        ]
    },
    {
        id: "tn",
        nombre: "LCD TN",
        simbolo: "TN",
        categoria: "LCD",
        descripcion: "Twisted Nematic es una tecnologia LCD tradicionalmente utilizada en monitores rapidos.",
        fortalezas: "Respuesta rapida y bajo costo en ciertos modelos.",
        limitaciones: "Angulos de vision reducidos y color menos consistente.",
        usos: "Monitores competitivos y sistemas antiguos.",
        contraste: "Moderado",
        movimiento: "Rapido en muchos modelos",
        color: "Menor consistencia angular",
        iluminacion: "Requiere retroiluminacion",
        especificaciones: [
            "Twisted Nematic",
            "Cristales liquidos",
            "Angulos de vision limitados",
            "Respuesta rapida en muchos modelos"
        ]
    },
    {
        id: "va",
        nombre: "LCD VA",
        simbolo: "VA",
        categoria: "LCD",
        descripcion: "Vertical Alignment ofrece un contraste elevado en comparacion con muchos paneles IPS y TN.",
        fortalezas: "Negros mas profundos y mayor contraste.",
        limitaciones: "Algunos modelos presentan estelas oscuras.",
        usos: "Multimedia, peliculas y gaming.",
        contraste: "Alto para LCD",
        movimiento: "Variable; puede presentar smearing",
        color: "Bueno, segun modelo",
        iluminacion: "Requiere retroiluminacion",
        especificaciones: [
            "Vertical Alignment",
            "Buen contraste",
            "Cristales liquidos",
            "Posibles estelas en transiciones oscuras"
        ]
    },
    {
        id: "oled",
        nombre: "OLED",
        simbolo: "OLED",
        categoria: "Autoemisiva",
        descripcion: "Organic Light-Emitting Diode utiliza pixeles que emiten luz individualmente.",
        fortalezas: "Negros reales, alto contraste y respuesta rapida.",
        limitaciones: "Posible retencion permanente de imagen (burn-in).",
        usos: "Gaming premium, cine y creacion de contenido.",
        contraste: "Extremadamente alto",
        movimiento: "Respuesta de pixel muy rapida",
        color: "Amplia gama, segun modelo",
        iluminacion: "Pixeles autoemisivos",
        especificaciones: [
            "Sin retroiluminacion LCD",
            "Control individual de pixeles",
            "Negros reales",
            "Riesgo de burn-in"
        ]
    },
    {
        id: "miniled",
        nombre: "Mini-LED",
        simbolo: "MINI",
        categoria: "LCD avanzado",
        descripcion: "Tecnologia de retroiluminacion LCD con LEDs pequeños y, frecuentemente, atenuacion por zonas.",
        fortalezas: "Alto brillo HDR y mejor control de iluminacion.",
        limitaciones: "Puede mostrar halos o blooming.",
        usos: "Monitores HDR, laptops y televisores.",
        contraste: "Alto con atenuacion local",
        movimiento: "Depende del panel LCD",
        color: "Depende del panel y su calibracion",
        iluminacion: "Retroiluminacion Mini-LED",
        especificaciones: [
            "Utiliza panel LCD",
            "LEDs de menor tamaño",
            "Local dimming",
            "Alto brillo HDR",
            "Posible blooming"
        ]
    }
];

// 4. ATRIBUTOS DE PANTALLAS

const atributos = [
    {
        nombre: "Densidad de pixeles",
        unidad: "PPI",
        descripcion: "Cantidad de pixeles por pulgada. Depende de la resolucion y del tamaño fisico de la pantalla."
    },
    {
        nombre: "Frecuencia de actualizacion",
        unidad: "Hz",
        descripcion: "Cantidad de veces que la pantalla actualiza su imagen por segundo, por ejemplo 60, 144 o 240 Hz."
    },
    {
        nombre: "Resolucion",
        unidad: "PX",
        descripcion: "Numero de pixeles horizontales y verticales. Ejemplos: 1920x1080, 2560x1440 y 3840x2160."
    },
    {
        nombre: "Gama de colores",
        unidad: "GAMUT",
        descripcion: "Conjunto de colores que la pantalla puede reproducir. Se expresa respecto a espacios como sRGB, DCI-P3 y Adobe RGB."
    }
];

// 5. COMPONENTES COMPLEMENTARIOS

const extras = [
    {
        id: 201,
        nombre: "Pantalla tactil",
        simbolo: "TOUCH",
        categoria: "Interfaz",
        descripcion: "Permite interactuar con el sistema tocando la superficie de la pantalla.",
        especificaciones: [
            "Entrada tactil",
            "Multitouch",
            "Tecnologia capacitiva o resistiva",
            "Interaccion con el sistema operativo"
        ]
    },
    {
        id: 202,
        nombre: "Digitalizador",
        simbolo: "DIG",
        categoria: "Interfaz",
        descripcion: "Detecta posiciones de contacto o de un lapiz y las transforma en coordenadas digitales.",
        especificaciones: [
            "Deteccion de posicion",
            "Entrada mediante dedo o stylus",
            "Puede ser una capa separada del panel",
            "Algunos soportan presion"
        ]
    },
    {
        id: 203,
        nombre: "Inversor de pantalla",
        simbolo: "INV",
        categoria: "Energia",
        descripcion: "En pantallas LCD antiguas con lamparas CCFL, convierte energia DC en AC de alto voltaje para la retroiluminacion.",
        especificaciones: [
            "Usado con retroiluminacion CCFL",
            "Convierte DC a AC",
            "Puede causar pantalla oscura al fallar",
            "Los sistemas LED modernos usan controladores LED"
        ]
    }
];

// ========================================
// FUNCIONES AUXILIARES
// ========================================

function elemento(tag, clase, texto) {
    const el = document.createElement(tag);

    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;

    return el;
}

function agregarLista(datos, destino) {
    const ul = elemento("ul");

    datos.forEach(dato => {
        ul.appendChild(elemento("li", "", dato));
    });

    destino.appendChild(ul);
}

// ========================================
// 6. MODAL
// ========================================

const modal = document.getElementById("modalComponente");
const contenidoModal = document.getElementById("contenidoModal");

document.getElementById("cerrarModal")
    .addEventListener("click", () => modal.close());

modal.addEventListener("click", e => {
    if (e.target === modal) modal.close();
});

function abrirModal(titulo, descripcion, especificaciones, nota = "", enlace = "") {
    contenidoModal.replaceChildren();

    contenidoModal.appendChild(elemento("h2", "", titulo));
    contenidoModal.appendChild(elemento("p", "", descripcion));
    contenidoModal.appendChild(elemento("h3", "", "Especificaciones"));

    agregarLista(especificaciones, contenidoModal);

    if (nota) {
        contenidoModal.appendChild(
            elemento("h3", "", "Informacion adicional")
        );

        contenidoModal.appendChild(elemento("p", "", nota));
    }

    if (enlace) {
        const link = elemento("a", "", "Consultar producto en Newegg");
        link.href = enlace;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        contenidoModal.appendChild(link);
    }

    modal.showModal();
}

// ========================================
// 7. CREAR TARJETAS
// ========================================

function crearTarjeta(item, opciones = {}) {
    const card = elemento("article", "card");

    if (opciones.imagen && item.imagen) {
        const area = elemento("div", "card-image");
        const img = document.createElement("img");

        img.src = item.imagen;
        img.alt = item.nombre;
        img.loading = "lazy";
        img.decoding = "async";
        img.referrerPolicy = "no-referrer";

        // Si la imagen externa falla, aparece una
        // representacion de texto como alternativa.
        img.addEventListener("error", () => {
            area.replaceChildren();

            area.className = "card-visual";
            area.appendChild(
                elemento("div", "card-simbolo", "PC")
            );
        });

        area.appendChild(img);
        card.appendChild(area);
    } else {
        const area = elemento("div", "card-visual");

        area.appendChild(
            elemento("div", "card-simbolo", item.simbolo)
        );

        card.appendChild(area);
    }

    const body = elemento("div", "card-body");

    body.appendChild(
        elemento("span", "card-category", item.categoria)
    );

    body.appendChild(elemento("h3", "", item.nombre));

    body.appendChild(elemento("p", "", item.descripcion));

    const acciones = elemento("div", "card-actions");

    const boton = elemento(
        "button",
        "card-btn",
        "Ver ficha tecnica"
    );

    boton.addEventListener("click", () => {
        const lista = item.componentes || item.especificaciones || [];

        let nota = item.compatibilidad || "";

        if (item.cpu) {
            nota = `CPU: ${item.cpu}. GPU: ${item.gpu}.
                    RAM: ${item.ram}.
                    Almacenamiento: ${item.almacenamiento}.`;
        }

        if (item.fortalezas) {
            nota = `Ventajas: ${item.fortalezas}
                    Limitaciones: ${item.limitaciones}
                    Aplicaciones: ${item.usos}`;
        }

        abrirModal(
            item.nombre,
            item.descripcion,
            lista,
            nota,
            item.enlace || ""
        );
    });

    acciones.appendChild(boton);

    if (opciones.imagen && item.enlace) {
        const link = elemento("a", "card-btn secondary", "Newegg");

        link.href = item.enlace;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        acciones.appendChild(link);
    }

    body.appendChild(acciones);
    card.appendChild(body);

    return card;
}

// ========================================
// 8. CATALOGO Y FILTROS
// ========================================

const listaComponentes = document.getElementById("listaComponentes");
const buscador = document.getElementById("buscador");
const filtros = document.getElementById("filtros");
const ordenar = document.getElementById("ordenar");

let categoriaActual = "Todos";

function crearFiltros() {
    const categorias = [
        "Todos",
        ...new Set(componentes.map(c => c.categoria))
    ];

    filtros.replaceChildren();

    categorias.forEach(categoria => {
        const btn = elemento("button", "filtro", categoria);

        btn.setAttribute(
            "aria-pressed",
            String(categoriaActual === categoria)
        );

        if (categoriaActual === categoria) {
            btn.classList.add("activo");
        }

        btn.addEventListener("click", () => {
            categoriaActual = categoria;
            crearFiltros();
            mostrarComponentes();
        });

        filtros.appendChild(btn);
    });
}

function mostrarComponentes() {
    const busqueda = buscador.value.toLowerCase().trim();

    const filtrados = componentes.filter(c => {
        const categoriaValida =
            categoriaActual === "Todos" ||
            c.categoria === categoriaActual;

        const texto = [
            c.nombre,
            c.categoria,
            c.descripcion,
            ...c.especificaciones
        ].join(" ").toLowerCase();

        return categoriaValida && texto.includes(busqueda);
    });

    filtrados.sort((a, b) => {
        if (ordenar.value === "categoria") {
            return a.categoria.localeCompare(b.categoria, "es") ||
                   a.nombre.localeCompare(b.nombre, "es");
        }

        return a.nombre.localeCompare(b.nombre, "es");
    });

    listaComponentes.replaceChildren();

    filtrados.forEach(c => {
        listaComponentes.appendChild(crearTarjeta(c));
    });

    document.getElementById("resultados").textContent =
        `${filtrados.length} de ${componentes.length} componentes`;

    document.getElementById("sinResultados").hidden =
        filtrados.length !== 0;
}

buscador.addEventListener("input", mostrarComponentes);
ordenar.addEventListener("change", mostrarComponentes);

// ========================================
// 9. GAMING PCS
// ========================================

function mostrarGaming() {
    const contenedor = document.getElementById("listaGaming");
    contenedor.replaceChildren();

    gamingPCs.forEach(pc => {
        contenedor.appendChild(
            crearTarjeta(pc, { imagen: true })
        );
    });
}

// ========================================
// 10. PANTALLAS Y ATRIBUTOS
// ========================================

function mostrarPantallas() {
    const contenedor = document.getElementById("listaPantallas");
    contenedor.replaceChildren();

    pantallas.forEach(p => {
        contenedor.appendChild(crearTarjeta(p));
    });
}

function mostrarAtributos() {
    const contenedor = document.getElementById("listaAtributos");
    contenedor.replaceChildren();

    atributos.forEach(a => {
        const tarjeta = elemento("article", "attribute");

        tarjeta.appendChild(
            elemento("strong", "", a.unidad)
        );

        tarjeta.appendChild(
            elemento("h3", "", a.nombre)
        );

        tarjeta.appendChild(
            elemento("p", "", a.descripcion)
        );

        contenedor.appendChild(tarjeta);
    });
}

function mostrarExtras() {
    const contenedor = document.getElementById("listaExtras");
    contenedor.replaceChildren();

    extras.forEach(e => {
        contenedor.appendChild(crearTarjeta(e));
    });
}

// ========================================
// 11. COMPARADOR INTERACTIVO
// ========================================

const compareA = document.getElementById("compareA");
const compareB = document.getElementById("compareB");
const resultado = document.getElementById("resultadoComparacion");

function iniciarComparador() {
    pantallas.forEach(p => {
        const a = new Option(p.nombre, p.id);
        const b = new Option(p.nombre, p.id);

        compareA.add(a);
        compareB.add(b);
    });

    compareA.value = "ips";
    compareB.value = "oled";

    compareA.addEventListener("change", comparar);
    compareB.addEventListener("change", comparar);

    comparar();
}

function comparar() {
    const a = pantallas.find(p => p.id === compareA.value);
    const b = pantallas.find(p => p.id === compareB.value);

    if (!a || !b) return;

    const filas = [
        ["Categoria", a.categoria, b.categoria],
        ["Contraste", a.contraste, b.contraste],
        ["Movimiento", a.movimiento, b.movimiento],
        ["Color", a.color, b.color],
        ["Iluminacion", a.iluminacion, b.iluminacion],
        ["Ventajas", a.fortalezas, b.fortalezas],
        ["Limitaciones", a.limitaciones, b.limitaciones],
        ["Aplicaciones", a.usos, b.usos]
    ];

    const tabla = document.createElement("table");
    const encabezado = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Caracteristica", a.nombre, b.nombre].forEach(texto => {
        trHead.appendChild(elemento("th", "", texto));
    });

    encabezado.appendChild(trHead);
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement("tbody");

    filas.forEach(fila => {
        const tr = document.createElement("tr");

        fila.forEach(valor => {
            tr.appendChild(elemento("td", "", valor));
        });

        cuerpo.appendChild(tr);
    });

    tabla.appendChild(cuerpo);
    resultado.replaceChildren(tabla);
}

// ========================================
// 12. HAMBURGER MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.getElementById("menuPrincipal");

function cerrarMenu() {
    menuPrincipal.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", () => {
    const abierto = menuPrincipal.classList.toggle("open");

    menuToggle.classList.toggle("active", abierto);
    menuToggle.setAttribute("aria-expanded", String(abierto));

    menuToggle.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

menuPrincipal.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", cerrarMenu);
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") cerrarMenu();
});

document.addEventListener("click", e => {
    if (
        !menuPrincipal.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        cerrarMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) cerrarMenu();
});

// ========================================
// 13. ESTADISTICAS
// ========================================

function actualizarEstadisticas() {
    document.getElementById("totalComponentes").textContent =
        componentes.length;

    document.getElementById("totalGaming").textContent =
        gamingPCs.length;

    document.getElementById("totalPantallas").textContent =
        pantallas.length;
}

// ========================================
// 14. INICIALIZACION
// ========================================

function iniciarAplicacion() {
    actualizarEstadisticas();
    crearFiltros();
    mostrarComponentes();
    mostrarGaming();
    mostrarPantallas();
    mostrarAtributos();
    mostrarExtras();
    iniciarComparador();
}

iniciarAplicacion();

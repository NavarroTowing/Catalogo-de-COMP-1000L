
// ============================================
// PC ATLAS
// Catálogo interactivo de componentes de PC
// ============================================

// 1. BASE DE DATOS LOCAL

const componentes = [
    {
        id: 1,
        nombre: "Procesador (CPU)",
        simbolo: "CPU",
        categoria: "Procesamiento",
        descripcion: "Ejecuta instrucciones y procesa datos del sistema.",
        especificaciones: [
            "Núcleos de procesamiento",
            "Hilos de ejecución",
            "Frecuencia de reloj en GHz",
            "Memoria caché L1, L2 y L3",
            "Socket del procesador"
        ],
        compatibilidad: "Verificar el socket y la compatibilidad del BIOS de la placa base."
    },
    {
        id: 2,
        nombre: "Memoria RAM",
        simbolo: "RAM",
        categoria: "Memoria",
        descripcion: "Almacena temporalmente los datos utilizados por el sistema.",
        especificaciones: [
            "DDR4 y DDR5",
            "Capacidad en GB",
            "Velocidad en MT/s",
            "Latencia CAS",
            "Canales de memoria"
        ],
        compatibilidad: "Verificar la generación DDR y las capacidades admitidas por la placa base."
    },
    {
        id: 3,
        nombre: "Placa base (Motherboard)",
        simbolo: "MB",
        categoria: "Conectividad",
        descripcion: "Interconecta y permite la comunicación entre los componentes.",
        especificaciones: [
            "Socket de CPU",
            "Chipset",
            "Ranuras PCI Express",
            "Puertos SATA y M.2",
            "Formato ATX, Micro-ATX o Mini-ITX"
        ],
        compatibilidad: "Comprobar procesador, memoria, gabinete y conectores de energía."
    },
    {
        id: 4,
        nombre: "Unidad SSD",
        simbolo: "SSD",
        categoria: "Almacenamiento",
        descripcion: "Almacena datos mediante memoria flash de alta velocidad.",
        especificaciones: [
            "Interfaz SATA o NVMe",
            "Capacidad en GB o TB",
            "Velocidad de lectura",
            "Velocidad de escritura",
            "Resistencia de escritura TBW"
        ],
        compatibilidad: "Verificar que la placa base soporte la interfaz y el formato de la unidad."
    },
    {
        id: 5,
        nombre: "Tarjeta gráfica (GPU)",
        simbolo: "GPU",
        categoria: "Procesamiento",
        descripcion: "Procesa gráficos, video y operaciones paralelas.",
        especificaciones: [
            "Memoria VRAM",
            "Arquitectura gráfica",
            "Interfaz PCI Express",
            "Consumo eléctrico",
            "Salidas HDMI y DisplayPort"
        ],
        compatibilidad: "Evaluar el espacio del gabinete y la potencia de la fuente."
    },
    {
        id: 6,
        nombre: "Fuente de poder (PSU)",
        simbolo: "PSU",
        categoria: "Energía",
        descripcion: "Convierte corriente alterna en voltajes DC para la computadora.",
        especificaciones: [
            "Potencia nominal en vatios",
            "Eficiencia energética",
            "Conectores ATX y EPS",
            "Conectores PCIe",
            "Protecciones eléctricas"
        ],
        compatibilidad: "Calcular el consumo total y comprobar los conectores necesarios."
    },
    {
        id: 7,
        nombre: "Disco duro (HDD)",
        simbolo: "HDD",
        categoria: "Almacenamiento",
        descripcion: "Almacena datos en platos magnéticos giratorios.",
        especificaciones: [
            "Capacidad en TB",
            "Velocidad de rotación RPM",
            "Memoria caché",
            "Interfaz SATA",
            "Formato de 2.5 o 3.5 pulgadas"
        ],
        compatibilidad: "Comprobar la disponibilidad de SATA, alimentación y espacio físico."
    },
    {
        id: 8,
        nombre: "Sistema de refrigeración",
        simbolo: "FAN",
        categoria: "Energía",
        descripcion: "Disipa el calor producido por los componentes.",
        especificaciones: [
            "Refrigeración por aire o líquido",
            "Velocidad del ventilador RPM",
            "Flujo de aire CFM",
            "Nivel de ruido dBA",
            "Compatibilidad de montaje"
        ],
        compatibilidad: "Verificar el socket, la altura del disipador y el espacio disponible."
    },
    {
        id: 9,
        nombre: "Tarjeta de red (NIC)",
        simbolo: "NIC",
        categoria: "Conectividad",
        descripcion: "Permite la comunicación del equipo con redes informáticas.",
        especificaciones: [
            "Ethernet o Wi-Fi",
            "Velocidad de transferencia",
            "Dirección MAC",
            "Interfaz PCIe o USB",
            "Estándares de red compatibles"
        ],
        compatibilidad: "Verificar la interfaz y los controladores del sistema operativo."
    }
];

// 2. ELEMENTOS HTML

const lista = document.getElementById("listaComponentes");
const buscador = document.getElementById("buscador");
const filtros = document.getElementById("filtros");
const ordenar = document.getElementById("ordenar");
const resultados = document.getElementById("resultados");
const sinResultados = document.getElementById("sinResultados");

const modal = document.getElementById("modalComponente");
const contenidoModal = document.getElementById("contenidoModal");
const cerrarModal = document.getElementById("cerrarModal");

let categoriaActual = "Todos";

// 3. ESTADÍSTICAS

function actualizarEstadisticas() {
    const categorias = new Set(
        componentes.map(componente => componente.categoria)
    );

    document.getElementById("totalComponentes").textContent =
        componentes.length;

    document.getElementById("totalCategorias").textContent =
        categorias.size;
}

// 4. CREAR FILTROS

function crearFiltros() {
    const categorias = [
        "Todos",
        ...new Set(componentes.map(c => c.categoria))
    ];

    filtros.innerHTML = "";

    categorias.forEach(categoria => {
        const boton = document.createElement("button");

        boton.className = "filtro";
        boton.textContent = categoria;

        if (categoria === categoriaActual) {
            boton.classList.add("activo");
        }

        boton.addEventListener("click", () => {
            categoriaActual = categoria;
            crearFiltros();
            mostrarComponentes();
        });

        filtros.appendChild(boton);
    });
}

// 5. CREAR TARJETAS

function crearTarjeta(componente) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "card";

    // Los datos del catálogo se insertan con
    // textContent para evitar interpretar HTML.
    const visual = document.createElement("div");
    visual.className = "card-visual";

    const simbolo = document.createElement("div");
    simbolo.className = "card-simbolo";
    simbolo.textContent = componente.simbolo;

    visual.appendChild(simbolo);

    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body";

    const categoria = document.createElement("span");
    categoria.className = "card-categoria";
    categoria.textContent = componente.categoria;

    const titulo = document.createElement("h3");
    titulo.textContent = componente.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = componente.descripcion;

    const boton = document.createElement("button");
    boton.textContent = "Ver ficha técnica";

    boton.addEventListener("click", () => {
        abrirFicha(componente.id);
    });

    cuerpo.append(categoria, titulo, descripcion, boton);
    tarjeta.append(visual, cuerpo);

    return tarjeta;
}

// 6. BUSCAR, FILTRAR Y ORDENAR

function mostrarComponentes() {
    const texto = buscador.value.toLowerCase().trim();

    let listaFiltrada = componentes.filter(componente => {
        const coincideCategoria =
            categoriaActual === "Todos" ||
            componente.categoria === categoriaActual;

        const contenido = [
            componente.nombre,
            componente.categoria,
            componente.descripcion,
            ...componente.especificaciones
        ].join(" ").toLowerCase();

        const coincideBusqueda = contenido.includes(texto);

        return coincideCategoria && coincideBusqueda;
    });

    listaFiltrada.sort((a, b) => {
        if (ordenar.value === "categoria") {
            return a.categoria.localeCompare(b.categoria, "es") ||
                   a.nombre.localeCompare(b.nombre, "es");
        }

        return a.nombre.localeCompare(b.nombre, "es");
    });

    lista.replaceChildren();

    listaFiltrada.forEach(componente => {
        lista.appendChild(crearTarjeta(componente));
    });

    resultados.textContent =
        `Mostrando ${listaFiltrada.length} de ${componentes.length} componentes`;

    sinResultados.hidden = listaFiltrada.length !== 0;
}

// 7. FICHA TÉCNICA INTERACTIVA

function abrirFicha(id) {
    const componente = componentes.find(c => c.id === id);

    if (!componente) return;

    contenidoModal.replaceChildren();

    const categoria = document.createElement("span");
    categoria.className = "card-categoria";
    categoria.textContent = componente.categoria;

    const titulo = document.createElement("h2");
    titulo.textContent = componente.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = componente.descripcion;

    const subtitulo = document.createElement("h3");
    subtitulo.textContent = "Especificaciones técnicas";

    const listaSpecs = document.createElement("ul");

    componente.especificaciones.forEach(spec => {
        const elemento = document.createElement("li");
        elemento.textContent = spec;
        listaSpecs.appendChild(elemento);
    });

    const tituloCompatibilidad = document.createElement("h3");
    tituloCompatibilidad.textContent = "Compatibilidad";

    const compatibilidad = document.createElement("p");
    compatibilidad.textContent = componente.compatibilidad;

    contenidoModal.append(
        categoria,
        titulo,
        descripcion,
        subtitulo,
        listaSpecs,
        tituloCompatibilidad,
        compatibilidad
    );

    modal.showModal();
}

// 8. EVENTOS

buscador.addEventListener("input", mostrarComponentes);

ordenar.addEventListener("change", mostrarComponentes);

cerrarModal.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", evento => {
    if (evento.target === modal) {
        modal.close();
    }
});

// 9. INICIAR LA APLICACIÓN

actualizarEstadisticas();
crearFiltros();
mostrarComponentes();

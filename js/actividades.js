
const cuerpoTablaActividades = document.getElementById("cuerpo-tabla-actividades");
const filtroAreaTematica = document.getElementById("filtro-area-tematica");

let actividades = [];

// Cargar las actividades desde el archivo JSON
async function cargarActividades() {
    try {
        const respuesta = await fetch("../data/actividades.json");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON.");
        }

        actividades = await respuesta.json();

        const areasTematicas = [...new Set([
            ...actividades.map((actividad) => actividad["Área Temática"]),
            "Salud"
        ])];

        areasTematicas.forEach((area) => {
            const opcion = document.createElement("option");
            opcion.value = area;
            opcion.textContent = area;
            filtroAreaTematica.appendChild(opcion);
        });

        mostrarActividades();

    } catch (error) {
        console.error("Error al cargar actividades:", error);

        cuerpoTablaActividades.innerHTML =
            '<tr><td colspan="9">No se pudieron cargar las actividades.</td></tr>';
    }
}

function mostrarActividades() {
    const areaSeleccionada = filtroAreaTematica.value;
    const actividadesFiltradas = actividades.filter((actividad) =>
        !areaSeleccionada || actividad["Área Temática"] === areaSeleccionada
    );

    cuerpoTablaActividades.replaceChildren();

    if (actividadesFiltradas.length === 0) {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.colSpan = 9;
        celda.textContent = "No encontramos actividades para el área temática seleccionada. Prueba con otra área o selecciona “Todas las áreas”.";
        fila.appendChild(celda);
        cuerpoTablaActividades.appendChild(fila);
        return;
    }

    actividadesFiltradas.forEach((actividad) => {
        const fila = document.createElement("tr");
        const valores = [
            actividad.ID,
            actividad.Nombre,
            actividad["Descripción"],
            actividad["Área Temática"],
            actividad["Provincia/Cantón"],
            actividad.Requisitos,
            actividad.Fecha,
            actividad.Cupos,
            actividad.Estado
        ];

        valores.forEach((valor) => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
        });

        cuerpoTablaActividades.appendChild(fila);
    });
}

filtroAreaTematica.addEventListener("change", mostrarActividades);
cargarActividades();

const cuerpoTablaActividades = document.getElementById("cuerpo-tabla-actividades");
const filtroAreaTematica = document.getElementById("filtro-area-tematica");

const areasTematicas = [...new Set(actividades.map((actividad) => actividad["Área Temática"]))];
areasTematicas.forEach((area) => {
    const opcion = document.createElement("option");
    opcion.value = area;
    opcion.textContent = area;
    filtroAreaTematica.appendChild(opcion);
});

function mostrarActividades() {
    const areaSeleccionada = filtroAreaTematica.value;
    const actividadesFiltradas = actividades.filter((actividad) =>
        !areaSeleccionada || actividad["Área Temática"] === areaSeleccionada
    );

    cuerpoTablaActividades.replaceChildren();

    if (actividadesFiltradas.length === 0) {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.colSpan = 6;
        celda.textContent = "No hay actividades para esta área temática.";
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
            actividad.Requisitos
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
mostrarActividades();
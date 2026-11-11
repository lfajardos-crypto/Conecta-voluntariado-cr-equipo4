const formulario = document.querySelector("#formulario-inscripcion");
const campoNombre = document.querySelector("#nombre");
const campoCorreo = document.querySelector("#correo");
const campoTelefono = document.querySelector("#telefono");
const selectorActividad = document.querySelector("#actividad");
const campoMotivacion = document.querySelector("#motivacion");
const checkboxConfirmacion = document.querySelector("#confirmacion");
const botonEnviar = document.querySelector("#enviar-inscripcion");
const mensajeInscripcion = document.querySelector("#mensaje-inscripcion");

let actividadesDisponibles = [];

function mostrarAlerta(icono, titulo, texto) {
    return Swal.fire({
        icon: icono,
        title: titulo,
        text: texto,
        background: "#f5faf6",
        color: "#23352c",
        confirmButtonColor: "#4f8d68"
    });
}

async function cargarActividades() {
    try {
        const respuesta = await fetch("/Conecta-voluntariado-cr-equipo4/data/actividades.json");
        if (!respuesta.ok) {
            throw new Error(`Error HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        if (!Array.isArray(datos) || datos.length === 0) {
            throw new Error("El archivo no contiene actividades.");
        }
        if (datos.some((actividad) =>
            actividad.ID === undefined || actividad.ID === null || !actividad.Nombre
        )) {
            throw new Error("El archivo contiene actividades sin identificador o nombre.");
        }

        actividadesDisponibles = datos;
        selectorActividad.replaceChildren(new Option("Selecciona una actividad", ""));
        actividadesDisponibles.forEach((actividad) => {
            selectorActividad.add(new Option(actividad.Nombre, String(actividad.ID)));
        });

        selectorActividad.disabled = false;
        botonEnviar.disabled = false;
    } catch (error) {
        console.error("No se pudieron cargar las actividades:", error);
        selectorActividad.replaceChildren(new Option("No se pudieron cargar las actividades", ""));
        mensajeInscripcion.textContent =
            "No fue posible cargar las actividades. Intenta nuevamente más tarde.";
        await mostrarAlerta(
            "error",
            "No se pudieron cargar las actividades",
            "Intenta nuevamente más tarde."
        );
    }
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const correo = campoCorreo.value.trim();
    const telefono = campoTelefono.value.trim();
    const actividadId = selectorActividad.value;
    const motivacion = campoMotivacion.value.trim();

    if (nombre.length < 3) {
        campoNombre.focus();
        await mostrarAlerta("warning", "Nombre inválido", "Ingresa al menos 3 caracteres en el nombre.");
        return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        campoCorreo.focus();
        await mostrarAlerta("warning", "Correo inválido", "Ingresa un correo electrónico válido.");
        return;
    }

    if (!/^\d{8}$/.test(telefono)) {
        campoTelefono.focus();
        await mostrarAlerta("warning", "Teléfono inválido", "Ingresa exactamente 8 dígitos numéricos.");
        return;
    }

    const actividadSeleccionada = actividadesDisponibles.find(
        (actividad) => String(actividad.ID) === actividadId
    );
    if (!actividadSeleccionada) {
        selectorActividad.focus();
        await mostrarAlerta("warning", "Selecciona una actividad", "Elige una actividad válida de la lista.");
        return;
    }

    if (motivacion.length < 20) {
        campoMotivacion.focus();
        await mostrarAlerta(
            "warning",
            "Motivación insuficiente",
            "Describe tu motivación con al menos 20 caracteres útiles."
        );
        return;
    }

    if (!checkboxConfirmacion.checked) {
        checkboxConfirmacion.focus();
        await mostrarAlerta(
            "warning",
            "Falta la confirmación",
            "Confirma que la información ingresada es correcta."
        );
        return;
    }

    const inscripcion = {
        nombre,
        correo,
        telefono,
        actividadId: actividadSeleccionada.ID,
        actividad: actividadSeleccionada.Nombre,
        motivacion,
        informacionConfirmada: checkboxConfirmacion.checked
    };

    console.log("Inscripción procesada:", inscripcion);
    console.log("Inscripción en formato JSON:", JSON.stringify(inscripcion));

    const mensaje = "La inscripción se procesó correctamente en esta demostración, pero no se guardó.";
    mensajeInscripcion.textContent = mensaje;
    await mostrarAlerta("success", "Inscripción válida", mensaje);
    formulario.reset();
});

cargarActividades();
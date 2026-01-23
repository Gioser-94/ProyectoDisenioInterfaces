window.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("userContainer");
  const toEditBtn = document.querySelector(".toEditBtn");
  const toInfoBtn = document.querySelector(".toInfoBtn");

  // vista
  const viewEdad = document.getElementById("viewEdad");
  const viewSatisfaccion = document.getElementById("viewSatisfaccion");
  const viewFecha = document.getElementById("viewFecha");
  const viewTelefono = document.getElementById("viewTelefono");
  const viewGenero = document.getElementById("viewGenero");
  const viewConociste = document.getElementById("viewConociste");
  const viewGusta = document.getElementById("viewGusta");
  const viewDescripcion = document.getElementById("viewDescripcion");

  // los inputs
  const inputEdad = document.getElementById("inputEdad");
  const inputSatisfaccion = document.getElementById("inputSatisfaccion");
  const labelSatisfaccion = document.getElementById("labelSatisfaccion");
  const inputFecha = document.getElementById("inputFecha");
  const inputTelefono = document.getElementById("inputTelefono");
  const inputGenero = document.getElementById("inputGenero");
  const inputDescripcion = document.getElementById("inputDescripcion");
  const descCount = document.getElementById("descCount");

  const form = document.getElementById("editForm");

  // datos
  const data = {
    edad: "",
    satisfaccion: "",
    fecha: "",
    telefono: "",
    genero: "",
    conociste: [],
    gusta: "",
    descripcion: ""
  };

  // fecha máxima = hoy
  inputFecha.max = new Date().toISOString().slice(0, 10);

  function getConocisteSeleccionados() {
    const seleccionados = [];
    const checkboxes = document.querySelectorAll('input[name="conociste"]');

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        seleccionados.push(checkboxes[i].value);
      }
    }

    return seleccionados;
  }

  function getGustaSeleccionado() {
    const radios = document.querySelectorAll('input[name="gusta"]');

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }

    return "";
  }

  function pintarVista() {
    viewEdad.textContent = data.edad || "—";
    viewSatisfaccion.textContent = data.satisfaccion ? data.satisfaccion + "/10" : "—";
    viewFecha.textContent = data.fecha || "—";
    viewTelefono.textContent = data.telefono || "—";
    viewGenero.textContent = data.genero || "—";
    viewConociste.textContent = data.conociste.length ? data.conociste.join(", ") : "—";
    viewGusta.textContent = data.gusta || "—";
    viewDescripcion.textContent = data.descripcion || "—";
  }

  function cargarInputs() {
    inputEdad.value = data.edad;
    inputSatisfaccion.value = data.satisfaccion || 5;
    labelSatisfaccion.textContent = inputSatisfaccion.value;
    inputFecha.value = data.fecha;
    inputTelefono.value = data.telefono;
    inputGenero.value = data.genero;
    inputDescripcion.value = data.descripcion;
    descCount.textContent = inputDescripcion.value.length;

    const checkboxes = document.querySelectorAll('input[name="conociste"]');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = data.conociste.includes(checkboxes[i].value);
    }

    const radios = document.querySelectorAll('input[name="gusta"]');
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = (radios[i].value === data.gusta);
    }
  }

  // range visible
  inputSatisfaccion.addEventListener("input", () => {
    labelSatisfaccion.textContent = inputSatisfaccion.value;
  });

  // contador textarea
  inputDescripcion.addEventListener("input", () => {
    descCount.textContent = inputDescripcion.value.length;
  });

  // ir a editar
  toEditBtn.addEventListener("click", () => {
    cargarInputs();
    container.classList.add("active");
  });

  // Volver a info
  toInfoBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  // Guardar
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    data.edad = inputEdad.value;
    data.satisfaccion = inputSatisfaccion.value;
    data.fecha = inputFecha.value;
    data.telefono = inputTelefono.value;
    data.genero = inputGenero.value;
    data.conociste = getConocisteSeleccionados();
    data.gusta = getGustaSeleccionado();
    data.descripcion = inputDescripcion.value;

    pintarVista();
    container.classList.remove("active");
  });

  // Primera carga
  pintarVista();
});
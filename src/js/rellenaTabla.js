import { conexion } from '../js/conexiones';

const init = () => {
  const tabla = document.querySelector('#cuerpoTabla');

  const rellenaTabla = (respuesta) => {
    let arrayRepuesta = [];
    arrayRepuesta = respuesta;

    arrayRepuesta.forEach((element) => {
      console.log(element);
      const fila = document.createElement('tr');

      const contenidoHTML = `<td>${element.id}</td><td>${element.email}</td><td>${element.first_name}</td><td><img  src="${element.avatar}"></img></td>`;
      fila.innerHTML = contenidoHTML;
      tabla.append(fila);
    });
  };

  conexion()
    .then((respuesta) => rellenaTabla(respuesta))
    .catch(console.log());
};

export { init };

import '../css/componentes.css';
/* import imgWebPack from '../assets/img/webpack-logo.png'; */

export const saludar = (nombre) => {
  console.log('creando etiqueta H1');

  const h1 = document.createElement('H1');
  h1.innerText = `hola, ${nombre}`;

  document.body.append(h1);

  /* const imagen = document.createElement('img');
  imagen.src = imgWebPack;
  document.body.append(imagen); */
};

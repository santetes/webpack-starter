const conexion = async () => {
  try {
    const dirHTTP = 'https://reqres.in/api/users?page=2';

    const respuesta = await fetch(dirHTTP);

    if (!respuesta.ok) throw 'Algo ha salido mal!!!';

    const { data } = await respuesta.json(); //descomposición y asignación a un nuevo nombre de variable

    return data;
  } catch (err) {
    throw err;
  }
};

export { conexion };

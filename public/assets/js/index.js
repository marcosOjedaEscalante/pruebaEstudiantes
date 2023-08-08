const consultaUno = async () => {
    const url = 'http://localhost:8080/estudiantes';
    const response = await fetch(url);
    const datos = await response.json();
    return datos;
}

const construccionTabla = (estudiantes) => {
    const cuerpoTabla = document.querySelector('#cuerpoTabla');
    estudiantes.estudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');
        const columnaUno = document.createElement('td');
        const columnaDos = document.createElement('td');
        const columnaTres = document.createElement('td');
        const columnaCuatro = document.createElement('td');
        const columnaCinco = document.createElement('td');
        const columnaSeis = document.createElement('td');
        const columnaSiete = document.createElement('td');
        columnaUno.innerHTML = estudiante.rut;
        columnaDos.innerHTML = estudiante.nombre;
        columnaTres.innerHTML = estudiante.apellido_pat;
        columnaCuatro.innerHTML = estudiante.apellido_mat;
        columnaCinco.innerHTML = estudiante.Curso.codigo_curso;
        columnaSeis.innerHTML = estudiante.Curso.fecha_inicio;
        columnaSiete.innerHTML = estudiante.Curso.fecha_termno;
        fila.append(columnaUno, columnaDos, columnaTres, columnaCuatro, columnaCinco, columnaSeis, columnaSiete);
        cuerpoTabla.appendChild(fila);
    });
}

consultaUno()
    .then( (datos) => {
        construccionTabla(datos);
    });

/* <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                </tr> */
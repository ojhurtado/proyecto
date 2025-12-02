async function archivoCSV() {


    const respuesta = await fetch('solar-share-energy.csv');
    const texto = await respuesta.text();
    const lineas=texto.trim().split('\n');
    const encabezados=lineas[0].split(','); 
    const datos=lineas.slice(1)

    const tbody=document.querySelector('#tablaEnergiaSolar tbody');

    datos.forEach((fila) => {
        const columnas=fila.split(',');

        if(columnas.length===encabezados.length){
            const filasCeldas=document.createElement('tr');
            
            columnas.forEach((dato) => {
                const celda=document.createElement('td');
                celda.textContent=dato.trim();
                filasCeldas.appendChild(celda);

            })
            tbody.appendChild(filasCeldas);


        }


    })

}

archivoCSV();
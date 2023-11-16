export async function obtenerClientes() {
    
    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    return result;
}

export async function obtenerCliente(id) {
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()
    return result;
}

export async function agregarCliente(datos) {

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }


}

export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}


export async function eliminarCliente(id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}
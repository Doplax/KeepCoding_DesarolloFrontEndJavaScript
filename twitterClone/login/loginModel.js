export const loginUser = async (email, password) => {
    const url = "https://localhost:8000/auth/login"

    // Construimos el objeto que necesita sparrest
    const body = {
        email: email, 
        password: password
    }


    // Todo esto nos lo podriamos ahorrar con Axios
    let response;
    try {
        response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',

            }
        })
        
        const data = await response.json()
        
        if (!response.ok) { // Dará OK si la respuesta se encuentra entre 200 y 299
            throw new Error(data.message);
        }

        if (response.ok) { 
            return data.accesToken
        }

    } catch (error) {
        if(error.message) {
            throw error.message
        } else {
            throw error
        }
    }

}
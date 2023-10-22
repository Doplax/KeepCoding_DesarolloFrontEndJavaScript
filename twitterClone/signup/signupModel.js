export const createUser = async (email, password) => {
    const url = "https://localhost:8000/auth/register"

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

        if (!response.ok) { // Dará OK si la respuesta se encuentra entre 200 y 299
            const data = await response.json()
            throw new Error(data.message);
        }

    } catch (error) {
        throw error
    }

}


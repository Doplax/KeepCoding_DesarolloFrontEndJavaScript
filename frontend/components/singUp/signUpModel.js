

export const signUpModel = {
    async createUser(email, password) {
        
        const url = "http://localhost:8000/auth/register"

        const body = {
            username: email, 
            password: password
        }
    
    
        let response;
        debugger
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
    
        } catch (error) {
            if(error.message) {
                throw error.message
            } else {
                throw error
            }
        }
    }
}
export const createTweet = async (message) => {
    const url = `https://localhost:8000/api/tweets`
    const token = localStorage.getItem('token')

    const body = {
        message: message,
    }


    let response;
    try {
        response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }
    } catch (error) {
        if (error.message) {
            throw error.message;
        } else {
            throw error
        }
    }
}
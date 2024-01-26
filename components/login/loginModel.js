export const loginModel = {
  async loginUser(username, password) {
    const url = "http://localhost:8000/auth/login";

    const credentials = {
      username: username,
      password: password,
    };
    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();
      // Verifica si la respuesta es satisfactoria
      if (response.ok) {
        return data.accessToken;
      } else {
        // Construye un mensaje de error más informativo
        const errorDetail = data.error || data.message || "Unauthorized access";
        throw new Error(`${response.status}: ${errorDetail}`);
      }
    } catch (error) {
      // Lanza el mensaje de error existente o crea uno si no está disponible
      throw new Error(error.message || "An error occurred while logging in.");
    }
  },
};

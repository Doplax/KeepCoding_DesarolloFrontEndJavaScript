
export const productListModel = {
    async getProducts() {
        const url = "http://localhost:8000/api/products"
        let parsedProducts = []

        try {
            const response = await fetch(url)
            parsedProducts = await response.json()
            console.log(response);

        } catch (error) {
            return error
        }
        return parsedProducts

    }

}
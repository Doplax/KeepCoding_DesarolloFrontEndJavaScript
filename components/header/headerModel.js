export const HeaderModel = {
    getLinks() {
        return [
            { id: "home", name: "Home", url: "/" },
            { id: "login", name: "Login", url: "/pages/login" },
            { id: "register", name: "Register", url: "/pages/register" },
        ];
    },

    getLogedLinks() {
        return [
            { id: "home", name: "Home", url: "/" },
            { id: "createProduct", name: "Create Product", url: "/pages/create-product" },
            { id: "logout", name: "Logout", url: "#" },
        ];
    }
};

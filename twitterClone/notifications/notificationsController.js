import { buildNotifications } from "./notificationsView";

export const notificationsController = (notifications) => {
    const showNotifications = (notifications) => {
        notifications.innerHTML = buildNotifications("hola ")
        setTimeout(() => {
            notifications.innerHTML = ''
        }, 3000)
    }

    return showNotifications;
}
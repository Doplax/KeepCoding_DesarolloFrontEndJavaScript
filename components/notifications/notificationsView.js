// CSS in styles/style.css
export const notificationsView = {
  buildNotification(message, type){
    return `
    <div class="parent">
      <div class="notification ${type}">
        <p>${message}</p>
      </div>
    </div>
    `
  }
}
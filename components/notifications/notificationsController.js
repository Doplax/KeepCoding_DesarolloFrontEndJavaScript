import { notificationsView } from './notificationsView.js';

export const notificationsController = {
  showNotification: ($notifications, message, type) => {
    $notifications.innerHTML = notificationsView.buildNotification(message, type);
    
    setTimeout(() => {
      $notifications.innerHTML = '';
    }, 2000);
  }
};

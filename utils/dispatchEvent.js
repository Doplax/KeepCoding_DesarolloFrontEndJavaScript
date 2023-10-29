export const dispatchEvent = (eventName, data, $element) => {
    let eventData;

    if (typeof data === 'object') {
        eventData = data;
    } else {
        eventData = { message: data };
    }

    const event = new CustomEvent(eventName, {
        detail: eventData
    });
    
    $element.dispatchEvent(event);
}

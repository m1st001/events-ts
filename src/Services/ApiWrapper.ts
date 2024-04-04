const baseUrl = 'http://localhost:3000';

export async function fetchEvents() {
    const response = await fetch(`${baseUrl}/events`);
    return response.json();
}

export async function fetchEventById(id : number) {
    const response = await fetch(`${baseUrl}/events/${id}`);
    return response.json();
}
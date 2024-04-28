import {eventDTO} from "../Components/CreateEvent/CreateEventComponent";

const baseUrl = 'http://localhost:3000';

export async function fetchEvents() {
    const response = await fetch(`${baseUrl}/events`);
    return response.json();
}

export async function fetchEventById(id : number) {
    const response = await fetch(`${baseUrl}/events/${id}`);
    return response.json();
}

export async function postEvent(eventDTO : eventDTO) {
    return await fetch(`${baseUrl}/events`, {
        method: 'POST',
        body: JSON.stringify({
            name: eventDTO.name,
            description: eventDTO.description,
            location: eventDTO.location,
            capacity: eventDTO.capacity,
            tags: [eventDTO.tags],
            startDate: eventDTO.startTime
        })
    })
}

export async function registerToEvent(userId: number, eventId: number) {

}

export async function loginRequest(id : number) {
    const response = await fetch(`${baseUrl}/events/${id}`);
    return response.ok;
}
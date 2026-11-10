import { Client } from '../types/client.types';

const STORAGE_KEY = 'gymflow_clients';

export function getClients(): Client[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveClients(clients: Client[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}
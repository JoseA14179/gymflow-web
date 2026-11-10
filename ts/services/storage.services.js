const STORAGE_KEY = 'gymflow_clients';
export function getClients() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
export function saveClients(clients) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}

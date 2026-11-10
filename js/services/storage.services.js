"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClients = getClients;
exports.saveClients = saveClients;
const client_types_1 = require("../types/client.types");
const STORAGE_KEY = 'gymflow_clients';
function getClients() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
function saveClients(clients) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}
//# sourceMappingURL=storage.services.js.map
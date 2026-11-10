"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_services_1 = require("./services/storage.services");
const client_types_1 = require("./types/client.types");
document.addEventListener('DOMContentLoaded', () => {
    const clients = (0, storage_services_1.getClients)();
    console.log("Clientes cargados: ", clients);
});
//# sourceMappingURL=clientes.js.map
import { getClients } from './services/storage.services';
document.addEventListener('DOMContentLoaded', () => {
    const clients = getClients();
    console.log("Clientes cargados: ", clients);
});
export function renderClientes(clients) {
    const listaClientes = document.getElementById('lista-clientes');
    if (!listaClientes)
        return;
    listaClientes.innerHTML = "";
    clients.forEach(client => {
        const li = document.createElement('li');
        li.innerHTML = `
        <a href="#"> 
                    <div class="nombre">
                        <span>${client.name}</span>
                    </div>
                    <div class="detalles">
                        <span class="inactivo">Inactivo</span>
                        <span class="objetivo">${client.objetivo}</span>
                    </div>
                    <div class="ultima-sesion">
                        <span>Hace 3 horas</span>
                    </div>
                    <div class="menu-cliente">
                        <span class="ver-cliente" >
                            <i data-lucide="eye"></i>
                        </span>
                        <span class="editar-cliente" >
                            <i data-lucide="pencil"></i>
                        </span>
                        <span class="mensaje-cliente">
                            <i data-lucide="message-circle"></i>
                        </span>
                        <span class="eliminar-cliente">
                            <i data-lucide="trash-2"></i>
                        </span>
                    </div>
                </a>
                `;
        listaClientes.appendChild(li);
    });
}

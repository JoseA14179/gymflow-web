# 🏋️‍♂️ GymFlow-Web — Personal Trainer Management System

> Sistema modular e intuitivo para la gestión integral de clientes, sesiones y métricas de entrenamiento personal.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 📌 Sobre el Proyecto

**GymFlow** es una plataforma web desarrollada para entrenadores personales que buscan centralizar la gestión operativa de sus clientes, planificar entrenamientos, realizar seguimiento de revisiones y controlar la evolución de su negocio.

Diseñada con un enfoque **Dark Mode** moderno, rápido y fluido, la aplicación combina una maquetación en **Sass modular** con una capa de lógica fuertemente tipada en **TypeScript**, garantizando un desarrollo robusto, limpio y escalable.

---

## ✨ Características Principales

* 👥 **Gestión de Clientes (CRUD):** Visualización, filtrado dinámico y control de fichas de clientes en tiempo real.
* 💾 **Persistencia de Datos Local:** Gestión de estados y almacenamiento seguro mediante `LocalStorage` e interfaces estrictas en TypeScript.
* 📊 **Dashboard & Métricas:** Paneles informativos con resúmenes estadísticos (clientes totales, activos e inactivos).
* 🔍 **Buscador en Tiempo Real:** Filtro rápido por nombre o atributos sin necesidad de recargar la página.
* 🎨 **Arquitectura CSS Scalable:** Interfaz moderna maquetada en Sass con estados interactivos optimizados (`:hover`, `:active`).

---

## 🛠️ Estructura del Proyecto

El sistema está organizado bajo patrones de diseño modulares para separar la arquitectura visual (CSS/Sass) de la lógica de negocio (TypeScript/JS):

```text
gymflow-web/
├── html/                      # Páginas secundarias del sistema (Clientes, Revisiones, Finanzas...)
├── img/                       # Iconos vectoriales (SVG) y recursos visuales
├── scss/                      # Estructura Sass modular (7-1 pattern simplificado)
│   ├── base/                  # Reset, variables globales y tipografía
│   ├── components/            # Componentes reutilizables (Cards, Botones, Formularios)
│   └── layout/                # Navegación, Header y Footer
├── ts/                        # Código fuente TypeScript
│   ├── types/                 # Definición de tipos e Interfaces (client.types.ts)
│   ├── services/              # Capa de servicios (storage.service.ts)
│   └── clientes.ts            # Lógica dinámica y manipulación del DOM
├── js/                        # Archivos JavaScript compilados (salida de tsc)
├── main.css                   # CSS final compilado
├── index.html                 # Vista principal / Dashboard
└── tsconfig.json              # Configuración del compilador TypeScript
```

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/gymflow-web.git
   cd gymflow-web
   ```

2. **Compilar los estilos Sass (modo vigilancia):**
   ```bash
   sass --watch scss/main.scss main.css
   ```

3. **Compilar TypeScript en modo vigilancia (Watch mode):**
   ```bash
   tsc -w
   ```

4. **Ejecución:** Abre el archivo `index.html` o `html/clientes.html` directamente en tu navegador o utilizando la extensión **Live Server**.

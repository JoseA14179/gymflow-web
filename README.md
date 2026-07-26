# 🏋️‍♂️ GymFlow-Web — Fitness & Workout Management Web App

> Sistema modular de gestión de rutinas, seguimiento de clientes y organización de entrenamientos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 📌 Sobre el Proyecto

**GymFlow** es una aplicación web pensada para entrenadores personales y gimnasios que buscan organizar sus contenidos, agendas diarias, paneles de clientes y revisiones semanales de forma intuitiva, ágil y visual.

Diseñada con un enfoque **Mobile-First** e interfaz oscura (*Dark Mode*) de alta energía, la plataforma optimiza el flujo de trabajo diario centralizando las tareas operativas en una sola vista.

---

## ✨ Características Principales

* 📊 **Dashboard General:** Resumen visual de revisiones, entrevistas y sesiones del día.
* 👥 **Gestión de Clientes:** Seguimiento personalizado de rutinas y fichas técnicas.
* 📅 **Agenda Inteligente:** Organización de tareas divididas por franjas horarias (Mañana/Tarde).
* 🎨 **UI Reutilizable:** Diseño basado en componentes interactivos con estados `:hover` y `:active` optimizados.

---

## 🛠️ Arquitectura y Tecnologías

El proyecto ha sido refactorizado desde CSS plano hacia una **arquitectura SASS modular (Pattern 7-1 simplified)** para garantizar un código limpio, mantenible y escalable:

```text
gymflow-web/
├── html/                      # Páginas secundarias del sistema
├── assets/                    # Recursos estáticos (imágenes, fuentes, SVG)
└── scss/                      # Código fuente SASS
    ├── base/                  # Reset, variables globales y tipografía
    ├── components/            # Componentes UI (Cards, Botones, Formularios)
    ├── layout/                # Navegación, Header, Sidebar y Footer
    └── main.scss              # Compilador principal

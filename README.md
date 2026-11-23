# Ejercicios React — Entrega 1

Los ejercicios del módulo de JavaScript rehechos en React con el código mínimo. Estilos con Sass (arquitectura 7-1 en `src/sass/`).

**Demo:** https://alvarobarrenadev.github.io/ejercicios-react/

## Ejercicios

| # | Ejercicio | Código |
|---|-----------|--------|
| 1 | Cambiador de color de fondo | [Ejercicio1.jsx](src/ejercicios/Ejercicio1.jsx) |
| 2 | Contador de clics | [Ejercicio2.jsx](src/ejercicios/Ejercicio2.jsx) |
| 3 | Lista dinámica | [Ejercicio3.jsx](src/ejercicios/Ejercicio3.jsx) |
| 4 | Filtro de búsqueda en tiempo real | [Ejercicio4.jsx](src/ejercicios/Ejercicio4.jsx) |
| 5 | Calculadora sencilla | [Ejercicio5.jsx](src/ejercicios/Ejercicio5.jsx) |
| 6 | Temporizador con inicio, pausa y reinicio | [Ejercicio6.jsx](src/ejercicios/Ejercicio6.jsx) |
| 7 | Generador de contraseñas aleatorias | [Ejercicio7.jsx](src/ejercicios/Ejercicio7.jsx) |
| 8 | Contador de palabras y caracteres | [Ejercicio8.jsx](src/ejercicios/Ejercicio8.jsx) |
| 9 | Lista de tareas con localStorage | [Ejercicio9.jsx](src/ejercicios/Ejercicio9.jsx) |

La página de inicio ([Home.jsx](src/pages/Home.jsx)) enlaza a cada ejercicio mediante rutas hash (`#/ejercicio-1`), gestionadas en [App.jsx](src/App.jsx) sin dependencias extra.

## Scripts

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción en dist/
pnpm run deploy # build + publicación en la rama gh-pages
```

Tras el primer despliegue: en GitHub, *Settings → Pages → Source: Deploy from a branch → `gh-pages` / root*.

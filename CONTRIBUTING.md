# Guía de contribución

## Flujo de trabajo (GitHub Flow)

1. Todo cambio parte de un issue.
2. Crea una rama desde `main`: `<tipo>/<nº-issue>-<descripción>` (ej. `feat/4-product-card`).
3. Haz commits pequeños siguiendo Conventional Commits.
4. Abre un Pull Request hacia `main` y espera a que el CI esté en verde.
5. Tras la revisión, se integra con _squash merge_.

## Commits (Conventional Commits)

`<tipo>(<ámbito opcional>): <descripción en imperativo>`

Tipos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`.
Cambio incompatible: añade `!` (ej. `feat(api)!: rename price field`).

## Trabajo entre repositorios

TechStore se reparte en dos repositorios independientes: `techstore-frontend` y
`techstore-backend`.

- El backend es la fuente de verdad del contrato de la API.
- Los cambios del contrato son compatibles hacia atrás: se añade, no se elimina ni se
  renombra de golpe. Un cambio incompatible se hace en pasos (añadir lo nuevo, migrar el
  cliente, eliminar lo antiguo).
- Orden de despliegue: primero el backend, después el frontend.
- Un cambio que afecta a ambos repos se parte en un issue por repositorio, enlazados
  con la sintaxis `TU_USUARIO/repositorio#N`.
- El frontend no asume una URL fija del backend: la recibe por variable de entorno.

## Definition of Done

- [ ] El CI pasa (lint, tipos, tests y build)
- [ ] El comportamiento nuevo tiene tests
- [ ] El PR ha sido revisado y aprobado
- [ ] La documentación está actualizada si hacía falta
- [ ] Si cambia el contrato de la API, el otro repositorio tiene un issue enlazado
- [ ] Está desplegado en staging y verificado

## Entorno local

Antes de abrir un PR ejecuta `npm run check`. Los hooks de Git comprueban formato,
lint, tipos y mensajes de commit, pero se pueden saltar con `--no-verify`. La
comprobación que no se puede saltar es el CI.

# State Machines - Ejemplo Basico

Ejemplo basico de una Maquina de Estados Finita (FSM) en TypeScript, basado en el video [de YouTube](https://www.youtube.com/watch?v=sTyRxey86Jw).

## El problema: estados imposibles

Cuando usamos multiples banderas booleanas para representar el estado de una operacion:

```ts
let isLoading = false;
let isError = false;
let isSuccess = false;
```

Es facil terminar en combinaciones que no tienen sentido logico. Por ejemplo, `isLoading = true` e `isSuccess = true` al mismo tiempo. Esto genera codigo dificil de mantener y propenso a errores, lleno de `if-else` anidados intentando controlar cada combinacion.

## La solucion: Maquinas de Estado Finitas

En lugar de permitir cualquier combinacion de variables, una FSM define:

- **Estados**: Una lista finita de situaciones posibles (`IDLE`, `LOADING`, `SUCCESS`, `ERROR`). Solo puede estar en uno a la vez.
- **Eventos/Transiciones**: Acciones que disparan el cambio de un estado a otro (ej. `FETCH` cambia de `IDLE` a `LOADING`).

```text
IDLE --FETCH--> LOADING --RESOLVE--> SUCCESS
                   |
                   +----REJECT----> ERROR
```

### Beneficios

- **Declarativo**: El flujo esta mapeado de antemano, haciendo el codigo mas predecible.
- **Sin ifs anidados**: No hay que comprobar multiples banderas constantemente.
- **Robusto**: Las transiciones no permitidas simplemente no ocurren, previniendo errores logicos de raiz.

## Requisitos

- [Bun](https://bun.sh) v1.3+

## Uso

```bash
# Instalar dependencias
bun install

# Ejecutar
bun start

# Ejecutar con watch mode
bun run start:watch
```

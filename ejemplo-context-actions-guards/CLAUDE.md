# State Machines - Ejemplo Basico

Proyecto de aprendizaje sobre Maquinas de Estado Finitas (FSM) en TypeScript puro, sin librerias externas.

## Estructura

- `src/` - Codigo fuente
- El entry point es `src/index.ts`

## Runtime

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun install` instead of `npm install`
- Use `bun run <script>` instead of `npm run <script>`
- Bun automatically loads .env, so don't use dotenv.

## Testing

Use `bun test` to run tests.

```ts
import { test, expect } from "bun:test";
```

## Convenciones

- No usar librerias externas para la state machine (XState, etc.) — el objetivo es entender el patron desde cero.
- Usar Biome para formateo y linting.

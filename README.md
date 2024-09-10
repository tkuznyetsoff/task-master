# task-master

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Instructions for setting up and running the application
```sh
pnpm install
```
### Run App:
```sh
pnpm dev
```
### Run Storybook:
```sh
pnpm tailwind
pnpm storybook
```


## Stack
- Vue (3.5)
- Pinia
- Tailwind
- Storybook
- Typescript
- Eslint
- Prettier
- Vite
# Luminaria – Tienda de lámparas (Proyecto 2)

Nuxt 3 (generación estática) + Snipcart + Utterances.

## Ejecutar
```bash
npm install
npm run dev        # desarrollo
npm run generate   # genera el sitio estático en .output/public
```

## Configuración (variables de entorno)
| Variable | Descripción |
|---|---|
| `SNIPCART_KEY` | Public API Key de Snipcart (modo Test sirve) |
| `UTTERANCES_REPO` | Repo público de GitHub `usuario/repo` con la app utterances instalada |

En Netlify: *Site settings → Environment variables*. Build command `npm run generate`, publish `.output/public` (ya está en `netlify.toml`).

## Catálogo
`data/products.json` (36 artículos) y `data/categories.json` (6 categorías). Para cambiar una imagen, edite el campo `imagen` con la URL deseada.

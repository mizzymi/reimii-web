# REIMII Digital

Proyecto convertido a **sitio estático 100% funcional sin backend**.

## Qué se cambió

- Eliminada toda la integración de autenticación y SDK de Base44.
- Eliminado React Query y la lógica de comprobación de sesión.
- Simplificada la app para que funcione solo con rutas y datos locales.
- Vite configurado sin plugins externos de backend.

## Cómo usarlo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Notas

- El proyecto funciona sin backend propio.
- Mantiene imágenes remotas públicas donde ya se estaban usando.
- Las páginas, navegación y contenido local funcionan como web estática.

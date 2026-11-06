<script setup lang="ts">
const { categories, countByCategory } = useCatalog()
useHead({ title: 'Luminaria - Categorías' })
</script>

<template>
  <section>
    <h1>Encuentra la luz perfecta</h1>
    <p class="muted">Explora nuestras categorías de lámparas.</p>
    <div class="grid cats">
      <NuxtLink v-for="c in categories" :key="c.slug" :to="`/categoria/${c.slug}`" class="cat-card">
        <h2>{{ c.nombre }}</h2>
        <p>{{ c.descripcion }}</p>
        <span class="badge">{{ countByCategory(c.slug) }} artículos</span>
      </NuxtLink>
    </div>
  </section>
</template>

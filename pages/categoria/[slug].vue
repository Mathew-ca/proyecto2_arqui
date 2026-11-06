<script setup lang="ts">
const route = useRoute()
const { getCategory, byCategory, paginate } = useCatalog()
const slug = route.params.slug as string
const cat = getCategory(slug)
if (!cat) throw createError({ statusCode: 404, statusMessage: 'Categoría no encontrada', fatal: true })

const page = computed(() => Math.max(1, parseInt(String(route.query.page)) || 1))
const all = byCategory(slug)
const view = computed(() => paginate(all, Math.min(page.value, Math.ceil(all.length / 6) || 1)))
useHead({ title: `${cat.nombre} - Luminaria` })
</script>

<template>
  <section v-if="cat">
    <NuxtLink to="/" class="muted">← Categorías</NuxtLink>
    <h1>{{ cat.nombre }}</h1>
    <p class="muted">{{ cat.descripcion }} ({{ all.length }} artículos)</p>
    <div class="grid products">
      <ProductCard v-for="p in view.items" :key="p.id" :p="p" />
    </div>
    <Pagination :page="page" :total-pages="view.totalPages" :base-path="`/categoria/${slug}`" />
  </section>
</template>

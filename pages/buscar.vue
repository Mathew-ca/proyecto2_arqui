<script setup lang="ts">
const route = useRoute()
const { search, paginate } = useCatalog()
const q = computed(() => String(route.query.q ?? ''))
const page = computed(() => Math.max(1, parseInt(String(route.query.page)) || 1))
const results = computed(() => search(q.value))
const view = computed(() => paginate(results.value, page.value))
useHead({ title: 'Búsqueda - Luminaria' })
</script>

<template>
  <section>
    <h1>Resultados para “{{ q }}”</h1>
    <p class="muted">{{ results.length }} resultado(s)</p>
    <p v-if="!results.length">No se encontraron artículos. Prueba con otras palabras (ej. “madera”, “LED”, “dorado”).</p>
    <div class="grid products">
      <ProductCard v-for="p in view.items" :key="p.id" :p="p" />
    </div>
    <Pagination :page="page" :total-pages="view.totalPages" base-path="/buscar" :query="{ q }" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ page: number; totalPages: number; basePath: string; query?: Record<string, string> }>()
const to = (n: number) => ({ path: props.basePath, query: { ...(props.query ?? {}), page: String(n) } })
</script>

<template>
  <nav v-if="totalPages > 1" class="pagination" aria-label="Paginación">
    <NuxtLink v-if="page > 1" :to="to(page - 1)" class="pbtn">← Anterior</NuxtLink>
    <span v-else class="pbtn disabled">← Anterior</span>

    <NuxtLink v-for="n in totalPages" :key="n" :to="to(n)" class="pbtn" :class="{ active: n === page }">{{ n }}</NuxtLink>

    <NuxtLink v-if="page < totalPages" :to="to(page + 1)" class="pbtn">Siguiente →</NuxtLink>
    <span v-else class="pbtn disabled">Siguiente →</span>
  </nav>
</template>

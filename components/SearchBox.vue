<script setup lang="ts">
const route = useRoute()
const q = ref(String(route.query.q ?? ''))
watch(() => route.query.q, v => { q.value = String(v ?? '') })
function go() {
  if (q.value.trim()) navigateTo({ path: '/buscar', query: { q: q.value.trim() } })
}
</script>

<template>
  <form class="search" @submit.prevent="go" role="search">
    <input v-model="q" type="search" placeholder="Buscar lámparas..." aria-label="Buscar" />
    <button type="submit">Buscar</button>
  </form>
</template>

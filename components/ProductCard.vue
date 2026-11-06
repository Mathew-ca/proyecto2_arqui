<script setup lang="ts">
defineProps<{ p: any }>()
const fallback = 'https://placehold.co/800x800/eeeeee/777777?text=Sin+imagen'
function onErr(e: Event) { (e.target as HTMLImageElement).src = fallback }
</script>

<template>
  <article class="card">
    <NuxtLink :to="`/producto/${p.id}`">
      <img :src="p.imagen" :alt="p.nombre" loading="lazy" @error="onErr" />
      <h3>{{ p.nombre }}</h3>
    </NuxtLink>
    <p class="muted">{{ p.marca }}</p>
    <p class="price">${{ p.precio.toFixed(2) }}</p>
    <button
      class="snipcart-add-item buy"
      :data-item-id="p.id"
      :data-item-name="p.nombre"
      :data-item-price="p.precio"
      :data-item-url="`/producto/${p.id}`"
      :data-item-description="p.descripcion"
      :data-item-image="p.imagen"
    >Comprar</button>
  </article>
</template>

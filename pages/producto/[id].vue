<script setup lang="ts">
const route = useRoute()
const { getProduct, getCategory } = useCatalog()
const p = getProduct(route.params.id as string)
if (!p) throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado', fatal: true })
const cat = getCategory(p.categoria)
const fallback = 'https://placehold.co/800x800/eeeeee/777777?text=Sin+imagen'
function onErr(e: Event) { (e.target as HTMLImageElement).src = fallback }
useHead({ title: `${p.nombre} - Luminaria` })
</script>

<template>
  <section v-if="p" class="detail">
    <p class="muted">
      <NuxtLink to="/">Categorías</NuxtLink> /
      <NuxtLink :to="`/categoria/${p.categoria}`">{{ cat?.nombre }}</NuxtLink> / {{ p.nombre }}
    </p>
    <div class="detail-grid">
      <img :src="p.imagen" :alt="p.nombre" @error="onErr" />
      <div>
        <h1>{{ p.nombre }}</h1>
        <p class="price big">${{ p.precio.toFixed(2) }}</p>
        <p>{{ p.descripcion }}</p>
        <table class="specs">
          <tbody>
            <tr><th>Categoría</th><td>{{ cat?.nombre }}</td></tr>
            <tr><th>Marca</th><td>{{ p.marca }}</td></tr>
            <tr><th>Material</th><td>{{ p.material }}</td></tr>
            <tr><th>Tipo de bombillo</th><td>{{ p.tipoBombillo }}</td></tr>
            <tr><th>Potencia</th><td>{{ p.potenciaW }} W</td></tr>
            <tr><th>Color</th><td>{{ p.color }}</td></tr>
            <tr><th>Altura</th><td>{{ p.alturaCm }} cm</td></tr>
            <tr><th>Disponibles</th><td>{{ p.stock }}</td></tr>
          </tbody>
        </table>
        <button
          class="snipcart-add-item buy large"
          :data-item-id="p.id"
          :data-item-name="p.nombre"
          :data-item-price="p.precio"
          :data-item-url="`/producto/${p.id}`"
          :data-item-description="p.descripcion"
          :data-item-image="p.imagen"
        >🛒 Agregar al carrito</button>
      </div>
    </div>
    <Comments :key="p.id" />
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <header class="site-header">
      <div class="container nav">
        <NuxtLink to="/" class="brand">💡 Luminaria</NuxtLink>
        <nav class="links">
          <NuxtLink to="/">Categorías</NuxtLink>
          <SearchBox />
          <a href="#" class="snipcart-checkout cart">
            🛒 Carrito (<span class="snipcart-items-count">0</span>)
          </a>
        </nav>
      </div>
    </header>

    <main class="container">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <div class="container">© 2026 Luminaria · Proyecto 2 · Tienda de lámparas</div>
    </footer>

    <!-- Snipcart -->
    <div hidden id="snipcart" :data-api-key="config.public.snipcartKey"
         data-config-modal-style="side" data-currency="usd" data-config-add-product-behavior="none"></div>
  </div>
</template>

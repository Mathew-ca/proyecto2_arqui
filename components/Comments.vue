<script setup lang="ts">
// Comentarios con utterances (usa Issues de un repositorio público de GitHub)
const config = useRuntimeConfig()
const host = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!host.value) return
  const s = document.createElement('script')
  s.src = 'https://utteranc.es/client.js'
  s.async = true
  s.crossOrigin = 'anonymous'
  s.setAttribute('repo', config.public.utterancesRepo as string)
  s.setAttribute('issue-term', 'pathname')
  s.setAttribute('label', 'comentarios')
  s.setAttribute('theme', 'github-light')
  host.value.appendChild(s)
})
</script>

<template>
  <section class="comments">
    <h2>Comentarios</h2>
    <div ref="host"></div>
  </section>
</template>

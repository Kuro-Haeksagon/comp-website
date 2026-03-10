<template>
  <!-- NAV -->
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 bg-[#f0ece3] opacity-100">

    <span class="font-serif text-base tracking-wide animate-fadeUp">
      Kuro Haeksagon
    </span>

    <ul class="flex gap-8 list-none animate-fadeUp animation-delay-200">
      <li v-for="link in navLinks" :key="link.label">
        <NuxtLink :to="link.to"
          class="font-mono text-[0.65rem] tracking-[3px] uppercase text-[#1a1714] hover:text-black transition-colors no-underline">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>

  </nav>
</template>

<script setup>
const navLinks = [
  { label: 'Solutions', to: '/#solutions' },
  { label: 'Articles', to: '/articles' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Syne:wght@400;700;800&family=Courier+Prime:ital@0;1&display=swap');

.font-serif {
  font-family: 'DM Serif Display', serif;
}

.font-mono {
  font-family: 'Courier Prime', monospace;
}

/* animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeUp {
  animation: fadeUp 0.8s forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>
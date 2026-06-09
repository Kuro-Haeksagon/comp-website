<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ',
      scrolled
        ? 'bg-white/5 border-b border-white/10 py-4 backdrop-blur-sm'
        : 'bg-transparent py-6 backdrop-blur-none',
    ]"
  >
    <div class="flex justify-between items-center px-10">
      <!-- LOGO -->
      <NuxtLink to="/" class="relative group cursor-pointer flex items-center">
        <img
          src="~/assets/New KH Logo(W).png"
          alt="Kuro Haeksagon"
          class="h-14 w-auto"
        />

        <span
          class="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#7B5CFF] to-[#FF6EC7] transition-all duration-500 group-hover:w-full"
        ></span>
      </NuxtLink>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex gap-10 list-none">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="relative font-mono text-[0.7rem] tracking-[3px] uppercase transition-all duration-300 group"
            :class="active === link.section ? 'text-white' : 'text-[#d1c693]'"
          >
            {{ link.label }}

            <span
              class="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#7B5CFF] to-[#FF6EC7] transition-all duration-300"
              :class="
                active === link.section ? 'w-full' : 'w-0 group-hover:w-full'
              "
            ></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- MOBILE BUTTON -->
      <button class="md:hidden text-white" @click="mobileOpen = !mobileOpen">
        ☰
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-[#0B0E2A]/95 backdrop-blur-xl border-t border-white/10"
    >
      <ul class="flex flex-col items-center gap-8 py-10">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="font-mono text-xs tracking-[3px] uppercase text-white"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mobileOpen = ref(false);
const scrolled = ref(false);
const active = ref("");

const navLinks = [
  { label: "Articles", to: "/articles", section: "articles" },
  { label: "About", to: "/about", section: "about" },
  { label: "Contact", to: "/contact", section: "contact" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;

  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 200 && rect.bottom >= 200) {
      active.value = section.id;
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Courier+Prime&display=swap");

.font-serif {
  font-family: "DM Serif Display", serif;
}

.font-mono {
  font-family: "Courier Prime", monospace;
}
</style>

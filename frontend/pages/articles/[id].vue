<template>
  <Header />

  <!-- WAVE BACKGROUND -->
  <div class="wave-background"></div>

  <main class="relative min-h-screen text-white z-10">
    <section v-if="article" class="pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <!-- IMAGE -->
        <div class="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            v-if="articleImages.length"
            :src="getImageUrl(articleImages[0])"
            class="w-full h-full object-cover"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          ></div>
        </div>

        <!-- ARTICLE DETAIL -->
        <div>
          <!-- CATEGORY -->
          <p class="text-xs tracking-[6px] uppercase text-white/60 mb-3">
            Article
          </p>

          <!-- TITLE -->
          <h1 class="text-3xl font-semibold mb-4">
            {{ article.title }}
          </h1>

          <!-- META -->
          <div class="flex gap-4 text-sm text-white/60 mb-8">
            <span>{{ formatDate(article.created_at) }}</span>
            <span>•</span>
            <span>{{ readingTime }} min read</span>
          </div>

          <!-- CONTENT -->
          <div class="article-content">
            {{ article.content }}
          </div>

          <!-- ACTION -->
          <div class="flex gap-6 mt-10">
            <NuxtLink
              to="/articles"
              class="text-pink-300 hover:text-pink-400 transition"
            >
              ← Back to Articles
            </NuxtLink>

            <NuxtLink to="/contact" class="btn-primary"> Contact Us </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import API from "@/functions/API";

const route = useRoute();

const config = useRuntimeConfig();
const apiBase = config.public?.apiBase || "";

const article = ref(null);
const loading = ref(false);

/* FETCH ARTICLE */

const fetchArticle = async () => {
  try {
    loading.value = true;

    const res = await API.getArticleById(route.params.id);

    article.value = res?.data || res;
  } catch (error) {
    console.error("โหลดบทความไม่สำเร็จ", error);
  } finally {
    loading.value = false;
  }
};

/* IMAGES */

const articleImages = computed(() => {
  if (!article.value?.images) return [];

  try {
    return typeof article.value.images === "string"
      ? JSON.parse(article.value.images)
      : article.value.images;
  } catch {
    return [];
  }
});

/* READING TIME */

const readingTime = computed(() => {
  if (!article.value?.content) return 0;

  const words = article.value.content.split(" ").length;

  return Math.ceil(words / 200);
});

/* FORMAT DATE */

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/* IMAGE URL */

const getImageUrl = (path) => {
  if (!path) return "";

  return `${apiBase}${path}`;
};

/* INIT */

onMounted(fetchArticle);

/* SEO */

useSeoMeta({
  title: () => article.value?.title || "Article",
  description: () => article.value?.content?.slice(0, 150) || "",
});
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* ARTICLE CONTENT */

.article-content {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

/* BUTTON */

.btn-primary {
  padding: 10px 24px;
  border-radius: 999px;
  background: linear-gradient(90deg, #ff4d4d, #ff7a3d);
  font-weight: 600;
  transition: 0.3s;
}

.btn-primary:hover {
  transform: scale(1.05);
}

/* =========================
   WAVE BACKGROUND
========================= */

.wave-background {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;

  background:
    radial-gradient(circle at center, #7b5cff30, transparent 70%),
    linear-gradient(135deg, #0e0e10, #0a0a0c);
}

.wave-background::before {
  content: "";
  position: absolute;

  width: 200%;
  height: 200%;

  background: radial-gradient(
    circle at center,
    rgba(123, 92, 255, 0.35),
    transparent 70%
  );

  filter: blur(140px);

  animation: waveMove 18s linear infinite;
}

.wave-background::after {
  content: "";
  position: absolute;

  width: 200%;
  height: 200%;

  background: radial-gradient(
    circle at center,
    rgba(179, 79, 255, 0.3),
    transparent 70%
  );

  filter: blur(140px);

  animation: waveMove 28s linear infinite reverse;
}

@keyframes waveMove {
  0% {
    transform: translate(-30%, -30%) rotate(0deg);
  }

  50% {
    transform: translate(30%, 30%) rotate(180deg);
  }

  100% {
    transform: translate(-30%, -30%) rotate(360deg);
  }
}
</style>

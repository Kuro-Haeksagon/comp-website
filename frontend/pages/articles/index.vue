<template>
  <div class="bg-[#0B0E2A] text-[#F1F5FF] overflow-x-hidden">

    <Header />

    <main>

      <!-- HERO -->
      <section class="relative pt-40 pb-28 text-center overflow-hidden">

        <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7B5CFF] blur-[200px] opacity-20"></div>
        <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#FF6EC7] blur-[200px] opacity-20"></div>

        <h1 class="font-serif text-[clamp(3rem,6vw,5rem)] leading-[0.95] mb-6">
          Latest <span class="italic text-[#FF6EC7]">Articles</span>
        </h1>

        <p class="text-white/70 max-w-xl mx-auto">
          Insights on AI, software engineering, and digital transformation.
        </p>

      </section>


      <section class="py-16 px-10">

        <div class="max-w-7xl mx-auto">

          <!-- Loading -->
          <div v-if="loading" class="text-center py-24">

            <div class="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-[#7B5CFF]"></div>

            <p class="mt-6 text-white/60">
              Loading articles...
            </p>

          </div>


          <!-- Empty -->
          <div v-else-if="articles.length === 0" class="text-center py-24">

            <h3 class="text-xl mb-3">
              No articles yet
            </h3>

            <p class="text-white/60 mb-6">
              Check back soon for new content
            </p>

            <NuxtLink to="/" class="bg-gradient-to-r from-[#7B5CFF] to-[#FF6EC7]
px-6 py-3 rounded-full text-sm uppercase tracking-[2px]">
              Go Home
            </NuxtLink>

          </div>


          <!-- ARTICLES GRID -->
          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <article v-for="article in articles" :key="article.id" class="group bg-white/5 backdrop-blur-xl border border-white/10
rounded-2xl overflow-hidden transition hover:-translate-y-2
hover:border-[#7B5CFF]/40" @mouseenter="startImageSlideshow(article.id)" @mouseleave="stopImageSlideshow(article.id)">

              <!-- IMAGE -->
              <div v-if="getArticleImages(article).length > 0" class="relative h-52 overflow-hidden">

                <div v-for="(image, index) in getArticleImages(article)" :key="index"
                  class="absolute inset-0 transition-opacity duration-500" :class="{
                    'opacity-100': (currentImageIndex[article.id] || 0) === index,
                    'opacity-0': (currentImageIndex[article.id] || 0) !== index
                  }">

                  <img :src="getImageUrl(image)" :alt="article.title"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                </div>

              </div>


              <!-- CONTENT -->
              <div class="p-6">

                <h2 class="text-xl font-semibold mb-3 group-hover:text-[#FF6EC7] transition">
                  {{ article.title }}
                </h2>

                <p class="text-white/60 mb-5 line-clamp-3">
                  {{ article.content.substring(0, 150) }}
                  {{ article.content.length > 150 ? "..." : "" }}
                </p>

                <div class="flex items-center justify-between text-sm">

                  <span class="text-white/40">
                    {{ formatDate(article.created_at) }}
                  </span>

                  <NuxtLink :to="`/articles/${article.id}`" class="text-[#7B5CFF] hover:text-[#FF6EC7] transition">
                    Read More →
                  </NuxtLink>

                </div>

              </div>

            </article>

          </div>


          <div v-if="articles.length > 0" class="text-center mt-16 text-white/50">
            Showing {{ articles.length }} article{{ articles.length === 1 ? "" : "s" }}
          </div>

        </div>

      </section>

    </main>

    <Footer />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import API from "@/functions/API"

const config = useRuntimeConfig()
const apiBase = config.public?.apiBase || ""

const articles = ref([])
const loading = ref(false)

const currentImageIndex = ref({})
const slideshowIntervals = ref({})

const fetchArticles = async () => {

  try {

    loading.value = true

    const res = await API.getArticles()

    articles.value = res?.data || res || []

    initializeImageIndexes()

  } catch (err) {

    console.error("โหลดบทความไม่สำเร็จ", err)

    articles.value = []

  } finally {

    loading.value = false

  }

}
const fetchArticlesID = async (id) => {

  try {

    loading.value = true

    const res = await API.getArticleByID(id)

    return res?.data || res || null

  } catch (err) {

    console.error("โหลดบทความไม่สำเร็จ", err)

    return null

  } finally {

    loading.value = false

  }

}

const formatDate = (dateString) => {

  const date = new Date(dateString)

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

}

const getImageUrl = (path) => {

  if (!path) return ""

  return `${apiBase}${path}`

}

const getArticleImages = (article) => {

  if (!article?.images) return []

  try {

    return typeof article.images === "string"
      ? JSON.parse(article.images)
      : article.images

  } catch {

    return []

  }

}

const initializeImageIndexes = () => {

  articles.value.forEach(article => {

    if (article?.id && !currentImageIndex.value[article.id]) {

      currentImageIndex.value[article.id] = 0

    }

  })

}

const startImageSlideshow = (articleId) => {

  const article = articles.value.find(a => a.id === articleId)

  if (!article) return

  const images = getArticleImages(article)

  if (images.length <= 1) return

  if (currentImageIndex.value[articleId] === undefined) {

    currentImageIndex.value[articleId] = 0

  }

  slideshowIntervals.value[articleId] = setInterval(() => {

    currentImageIndex.value[articleId] =
      (currentImageIndex.value[articleId] + 1) % images.length

  }, 1500)

}

const stopImageSlideshow = (articleId) => {

  if (slideshowIntervals.value[articleId]) {

    clearInterval(slideshowIntervals.value[articleId])

    delete slideshowIntervals.value[articleId]

  }

  if (currentImageIndex.value[articleId] !== undefined) {

    currentImageIndex.value[articleId] = 0

  }

}

onMounted(() => {

  fetchArticles()

})

onUnmounted(() => {

  Object.values(slideshowIntervals.value).forEach(interval => clearInterval(interval))

})

useSeoMeta({
  title: "Articles - Personal Web | John Doe",
  description: "Read the latest articles and insights on web development."
})
</script>